import { AnimatePresence, motion } from "framer-motion";

export default function RouteTransitionOverlay({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 3000,
            background: "rgba(10, 6, 18, 0.55)",
            backdropFilter: "blur(6px)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              padding: "12px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(20, 12, 30, 0.75)",
              color: "white",
              fontSize: 14,
              letterSpacing: 0.4,
            }}
          >
            Loading…
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
