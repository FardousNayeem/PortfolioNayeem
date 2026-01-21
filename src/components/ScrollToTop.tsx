import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type NavState = { scrollTo?: "top" | "bottom" };

export default function ScrollToTop() {
  const location = useLocation();
  const state = (location.state ?? {}) as NavState;

  useEffect(() => {
    requestAnimationFrame(() => {
      if (state.scrollTo === "bottom") {
        window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    });
  }, [location.pathname]);

  return null;
}
