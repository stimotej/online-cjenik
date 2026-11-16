import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/pro-solid-svg-icons";
import useDisableScroll from "../lib/useDisableScroll";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";
import clsx from "clsx";
import { SECTION_STYLES } from "./sectionStyles";
// import LanguageSelect from "./LanguageSelect";

const Navbar = ({ sections }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  // const [language, setLanguage] = useState("hr");

  useDisableScroll(menuOpened);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* <LanguageSelect
        value={language}
        onChange={setLanguage}
        className={clsx("top-7 left-6 z-50", menuOpened ? "fixed" : "absolute")}
      /> */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 p-6 flex items-center justify-end"
        )}
      >
        <button onClick={() => setMenuOpened(!menuOpened)}>
          <FontAwesomeIcon
            icon={menuOpened ? faXmark : faBarsStaggered}
            size="2x"
            className="text-white"
          />
        </button>
      </motion.header>
      {menuOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-xl"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8 items-center justify-center h-full text-white font-bold"
          >
            {sections.map((section) => {
              const style = SECTION_STYLES[section.type];
              return (
                <motion.a
                  key={style.id}
                  variants={item}
                  href={`#${style.id}`}
                  onClick={() => setMenuOpened(false)}
                >
                  {section.nav || style.nav}
                </motion.a>
              );
            })}
          </motion.div>
          <SocialMedia className="text-white/50 absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40" />
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
