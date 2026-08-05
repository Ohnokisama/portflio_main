import React, { useEffect, useState } from 'react'
import AboutSection from '../extras/AboutSection'

const About = () => {
  useEffect(() => {
    document.title = "About Me | Onuoha Jephthah"
  }, [])

  const [tab, setTab] = useState('education')
  const active = "text-[var(--main-color)] border-b-2 border-[var(--main-color)]"

  return (
    <div className="flex flex-col md:flex-row h-auto pt-28 px-6 pb-16 gap-12 md:px-[8.5rem]">
      <div className="w-full md:w-[50%]">
        <h1 className="text-3xl md:text-4xl font-black mb-4">What I Do</h1>
        <p className="my-5">
          Frontend Engineer with 4+ years of experience building responsive,
          scalable, and user focused web applications. Strong expertise in React
          and TypeScript, with a focus on performance optimization, reusable
          component architecture, and clean UI implementation. Experienced in
          translating design systems into production-ready interfaces and
          collaborating with cross-functional teams to deliver high-quality
          digital products.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
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
      <div className="w-full md:w-[50%]">
        <div className="flex gap-1 md:gap-3 w-full flex-wrap">
          <button
            className={`${tab === "education" ? active : ""} py-3 px-3`}
            onClick={() => setTab("education")}
          >
            Education
          </button>
          <button
            className={`${tab === "experience" ? active : ""} py-3 px-3`}
            onClick={() => setTab("experience")}
          >
            Experience
          </button>
          <button
            className={`${tab === "achievements" ? active : ""} py-3 px-3 hidden md:flex`}
            onClick={() => setTab("achievements")}
          >
            Achievements
          </button>
          <button
            className={`${tab === "skills" ? active : ""} py-3 px-3`}
            onClick={() => setTab("skills")}
          >
            Skills
          </button>
        </div>
        <AboutSection tab={tab} />
      </div>
    </div>
  );
}

export default About