import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_ORDER } from "./routeorder";

type NavState = { suppressAutoUntil?: number };

function getPrevNext(pathname: string) {
  const idx = ROUTE_ORDER.findIndex((r) => r.path === pathname);
  const prev = idx > 0 ? ROUTE_ORDER[idx - 1] : null;
  const next = idx >= 0 && idx < ROUTE_ORDER.length - 1 ? ROUTE_ORDER[idx + 1] : null;
  return { prev, next };
}

export function useEdgeNavigate(opts?: { auto?: boolean }) {
  const auto = opts?.auto ?? false;

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const navState = (location.state ?? {}) as NavState;

  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [showNextHint, setShowNextHint] = useState(false);
  const [showPrevHint, setShowPrevHint] = useState(false);

  const directionRef = useRef<"up" | "down">("down");
  const lastYRef = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);

  const userHasScrolledRef = useRef(false);
  const downDistanceRef = useRef(0);
  const upDistanceRef = useRef(0);

  const lockedRef = useRef(false);
  const lastNavAtRef = useRef(0);

  const bottomDebounceRef = useRef<number | null>(null);
  const topDebounceRef = useRef<number | null>(null);

  const pendingNavRef = useRef<number | null>(null);

  const { prev, next } = useMemo(() => getPrevNext(pathname), [pathname]);

  useEffect(() => {
    userHasScrolledRef.current = false;
    downDistanceRef.current = 0;
    upDistanceRef.current = 0;
    lockedRef.current = false;

    if (bottomDebounceRef.current) window.clearTimeout(bottomDebounceRef.current);
    if (topDebounceRef.current) window.clearTimeout(topDebounceRef.current);
    bottomDebounceRef.current = null;
    topDebounceRef.current = null;

    if (pendingNavRef.current) window.clearTimeout(pendingNavRef.current);
    pendingNavRef.current = null;
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastYRef.current;

      if (Math.abs(dy) > 2) userHasScrolledRef.current = true;

      if (dy > 0) {
        directionRef.current = "down";
        downDistanceRef.current += dy;
        upDistanceRef.current = 0;
      } else if (dy < 0) {
        directionRef.current = "up";
        upDistanceRef.current += Math.abs(dy);
        downDistanceRef.current = 0;
      }

      lastYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const canAutoNavigateNow = () => {
    if (!userHasScrolledRef.current) return false;

    const suppressUntil = navState.suppressAutoUntil ?? 0;
    if (Date.now() < suppressUntil) return false;

    const now = Date.now();
    if (lockedRef.current) return false;
    if (now - lastNavAtRef.current < 1600) return false;

    return true;
  };

  const scheduleNav = (fn: () => void) => {
    if (pendingNavRef.current) window.clearTimeout(pendingNavRef.current);

    pendingNavRef.current = window.setTimeout(() => {
      pendingNavRef.current = null;
      fn();
    }, 1000);
  };

  const goNext = useCallback(() => {
    if (!next) return;

    lockedRef.current = true;
    lastNavAtRef.current = Date.now();

    scheduleNav(() => {
      navigate(next.path, {
        state: { suppressAutoUntil: Date.now() + 2200 } satisfies NavState,
      });
    });

    window.setTimeout(() => (lockedRef.current = false), 2000);
  }, [navigate, next]);

  const goPrev = useCallback(() => {
    if (!prev) return;

    lockedRef.current = true;
    lastNavAtRef.current = Date.now();

    scheduleNav(() => {
      navigate(prev.path, {
        state: { suppressAutoUntil: Date.now() + 2200 } satisfies NavState,
      });
    });

    window.setTimeout(() => (lockedRef.current = false), 2000);
  }, [navigate, prev]);

  // bottom sentinel (next)
  useEffect(() => {
    const el = bottomRef.current;
    if (!el || !next) return;

    const hintObserver = new IntersectionObserver(
      ([entry]) => setShowNextHint(entry.isIntersecting),
      { root: null, rootMargin: "0px 0px 320px 0px", threshold: 0.01 }
    );

    const navObserver = new IntersectionObserver(
      ([entry]) => {
        if (!auto) return;
        if (!entry.isIntersecting) return;
        if (directionRef.current !== "down") return;

        if (downDistanceRef.current < 120) return;

        if (!canAutoNavigateNow()) return;

        if (bottomDebounceRef.current) return;
        bottomDebounceRef.current = window.setTimeout(() => {
          bottomDebounceRef.current = null;
          if (directionRef.current !== "down") return;
          if (!canAutoNavigateNow()) return;
          goNext();
        }, 260);
      },
      { root: null, rootMargin: "0px 0px 80px 0px", threshold: 0.01 }
    );

    hintObserver.observe(el);
    navObserver.observe(el);

    return () => {
      hintObserver.disconnect();
      navObserver.disconnect();
      if (bottomDebounceRef.current) window.clearTimeout(bottomDebounceRef.current);
      bottomDebounceRef.current = null;
    };
  }, [auto, next, goNext]);

  // top sentinel (prev)
  useEffect(() => {
    const el = topRef.current;
    if (!el || !prev) return;

    const hintObserver = new IntersectionObserver(
      ([entry]) => setShowPrevHint(entry.isIntersecting),
      { root: null, rootMargin: "420px 0px 0px 0px", threshold: 0.01 }
    );

    const navObserver = new IntersectionObserver(
      ([entry]) => {
        if (!auto) return;
        if (!entry.isIntersecting) return;
        if (directionRef.current !== "up") return;

        if (upDistanceRef.current < 80) return;

        if (!canAutoNavigateNow()) return;

        if (topDebounceRef.current) return;
        topDebounceRef.current = window.setTimeout(() => {
          topDebounceRef.current = null;
          if (directionRef.current !== "up") return;
          if (!canAutoNavigateNow()) return;
          goPrev();
        }, 260);
      },
      { root: null, rootMargin: "140px 0px 0px 0px", threshold: 0.01 }
    );

    hintObserver.observe(el);
    navObserver.observe(el);

    return () => {
      hintObserver.disconnect();
      navObserver.disconnect();
      if (topDebounceRef.current) window.clearTimeout(topDebounceRef.current);
      topDebounceRef.current = null;
    };
  }, [auto, prev, goPrev]);

  return {
    topRef,
    bottomRef,
    prev,
    next,
    showPrevHint,
    showNextHint,
    goPrev,
    goNext,
  };
}
