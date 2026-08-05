import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../extras/ProjectCard";
import projects from "../extras/data";

const Projects = () => {
  const [category, setCategory] = useState("all");

  const active =
    "text-[var(--main-color)] border-b-2 border-[var(--main-color)]";

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  useEffect(() => {
    document.title = "Projects | Onuoha Jephthah";
  }, [category]);

  const formatLabel = (cat) => {
    if (cat === "all") return "All";
    return cat
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="pt-28 px-6 pb-20 md:px-[8.5rem]">
      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">My Works</h1>
        <p className="my-3 text-lg">A selection of my recent projects.</p>
      </div>

      {/* FILTERS */}
      <div className="flex justify-center gap-4 my-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`${category === cat ? active : ""} py-2 px-3 capitalize`}
          >
            {formatLabel(cat)}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredProjects.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;