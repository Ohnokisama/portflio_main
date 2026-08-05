import { motion } from "framer-motion";

const overlayVariants = {
  initial: { scaleY: 0, originY: 0 },
  exit: { scaleY: 1 },
};

export default function PageTransition() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black origin-bottom z-[999]"
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}
