import clsx from "clsx";
import { motion } from "framer-motion";

const LanguageSelect = ({ value, onChange, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx("text-gray-400", className)}
    >
      <button
        className={clsx(value === "hr" && "font-bold text-white", "transition")}
        onClick={() => onChange("hr")}
      >
        HR
      </button>
      <span> / </span>
      <button
        className={clsx(
          value === "eng" && "font-bold text-white",
          "transition"
        )}
        onClick={() => onChange("eng")}
      >
        ENG
      </button>
    </motion.div>
  );
};

export default LanguageSelect;
