import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const SocialMedia = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx("flex gap-6", className)}
    >
      <a href="https://www.facebook.com/sczg.unizg/">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/sczagreb/">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </motion.div>
  );
};

export default SocialMedia;
