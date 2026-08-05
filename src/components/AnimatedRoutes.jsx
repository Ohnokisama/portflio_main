import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import PageTransition from "./PageTransition";

import { Hero, About, Projects, Services, Contact } from "./pages";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function AnimatedRoutes({ setMenu }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="relative">
        {/* OVERLAY */}
        <PageTransition />

        {/* ROUTES */}
        <Routes location={location}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Hero setMenu={setMenu} />
              </motion.div>
            }
          />

          <Route
            path="/about"
            element={
              <motion.div {...pageVariants}>
                <About />
              </motion.div>
            }
          />

          <Route
            path="/services"
            element={
              <motion.div {...pageVariants}>
                <Services />
              </motion.div>
            }
          />

          <Route
            path="/projects"
            element={
              <motion.div {...pageVariants}>
                <Projects />
              </motion.div>
            }
          />

          <Route
            path="/contact"
            element={
              <motion.div {...pageVariants}>
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
