import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "../extras/AboutSection";

const About = () => {
  useEffect(() => {
    document.title = "About Me | Onuoha Jephthah";
  }, []);

  const [tab, setTab] = useState("education");

  const active =
    "text-[var(--main-color)] border-b-2 border-[var(--main-color)]";

  return (
    <div className="flex flex-col md:flex-row h-auto pt-28 px-6 pb-16 gap-12 md:px-[8.5rem]">
      {/* LEFT */}
      <div className="w-full md:w-[50%]">
        <h1 className="text-3xl md:text-4xl font-black mb-4">What I Do</h1>
        <p className="my-5">
          Frontend Engineer with 4+ years of experience building responsive,
          scalable, and user-focused web applications. Strong expertise in React
          and TypeScript, with a focus onperformance optimization, reusable
          component architecture, and clean UI implementation.Experienced in
          translating design systems into production-ready interfaces
          andcollaborating with cross-functional teams to deliver high-quality
          digital products.
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 flex flex-col">
            <h3 className="text-4xl font-black text-[var(--main-color)]">5+</h3>
            <p className="uppercase font-semibold">
              Projects <br /> Done
            </p>
          </div>
          <div className="p-4 flex flex-col">
            <h3 className="text-4xl font-black text-[var(--main-color)]">5+</h3>
            <p className="uppercase font-semibold">
              Satisfied <br /> Clients
            </p>
          </div>
          <div className="p-4 flex flex-col">
            <h3 className="text-4xl font-black text-[var(--main-color)]">4+</h3>
            <p className="uppercase font-semibold">
              Years of <br /> Experience
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-[50%]">
        {/* TABS */}
        <div className="flex gap-2 md:gap-3 flex-wrap relative">
          {["education", "experience", "achievements", "skills"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className="relative py-3 px-3 capitalize"
            >
              {item}

              {/* Animated underline */}
              {tab === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-[var(--main-color)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="mt-6 relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AboutSection tab={tab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default About;
