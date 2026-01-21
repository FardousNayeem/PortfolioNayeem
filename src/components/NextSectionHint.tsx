import { AnimatePresence, motion } from "framer-motion";

export function NextSectionHint(props: {
  visible: boolean;
  position: "top" | "bottom";
  text: string;
  onClick: () => void;
}) {
  const { visible, position, text, onClick } = props;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          className={`edge-hint edge-hint--${position}`}
          onClick={onClick}
          initial={{ opacity: 0, y: position === "bottom" ? 12 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 12 : -12 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {text}
          <span className="edge-hint__arrow">{position === "bottom" ? "↓" : "↑"}</span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
