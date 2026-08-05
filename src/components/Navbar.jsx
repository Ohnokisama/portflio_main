import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion";

const Navbar = () => {
  // Setting current link state
  // const [menu, setMenu] = useState('')

  // Setting hover display
  const span = 'p-1 bg-white text-[#00031a] rounded absolute right-16 hidden md:group-hover:inline transition-all'

  // Setting active link
  const active = 'text-[var(--main-dark-color)] transition-all'

  // Getting location to set active link
  const location = useLocation()

  const links = [
    { path: "/", icon: "ri-home-2-line", label: "Home" },
    { path: "/about", icon: "ri-user-smile-line", label: "About" },
    { path: "/services", icon: "ri-tools-line", label: "Services" },
    { path: "/projects", icon: "ri-briefcase-3-line", label: "Projects" },
    { path: "/contact", icon: "ri-contacts-book-3-line", label: "Contact" },
  ];

  return (
    <div className="fixed z-40 bottom-0 bg-[var(--main-color)] h-auto rounded-none w-full md:bg-white/10 backdrop:blur-xl md:h-[330px] md:right-10 md:top-[30%] md:w-auto md:rounded-full">
      <ul className="flex flex-row md:flex-col items-center md:justify-center justify-evenly">
        {links.map((link) => {
          const isActive =
            location.pathname === link.path;

            console.log(link.label, isActive);

          return (
            <li className="px-6 py-5 group" key={link.path}>
              <Link to={link.path}>
                <motion.div
                  animate={{
                    scale: isActive ? 1.25 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                  }}
                >
                  <motion.i
                    className={`${link.icon} ${
                      isActive
                        ? "text-xl md:text-2xl text-[var(--main-dark-color)]"
                        : "text-white"
                    }`}
                    transition={{
                      duration: 0.25,
                    }}
                  />
                </motion.div>
              </Link>
              <span className={`${span}`}>{link.label}</span>
            </li>
          );
        })}
        {/* <li className="px-6 py-5 group">
          <Link to={'/about'} className={`${menu === 'about' ? active : location.pathname === '/about' ? active : ''}`} onClick={() => setMenu('about')}>
            <i className="ri-user-smile-line"></i>
          </Link>
          <span className={`${span}`}>About</span>
        </li>
        <li className="px-6 py-5 group">
          <Link to={'/services'} className={`${menu === 'services' ? active : location.pathname === '/services' ? active : ''}`} onClick={() => setMenu('skills')}>
            <i className="ri-tools-line"></i>
          </Link>
          <span className={`${span}`}>Services</span>
        </li>
        <li className="px-6 py-5 group">
          <Link to={'/projects'} className={`${menu === 'projects' ? active : location.pathname === '/projects' ? active : ''}`} onClick={() => setMenu('projects')}>
            <i className="ri-briefcase-3-line"></i>
          </Link>
          <span className={`${span}`}>Projects</span>
        </li>
        <li className="px-6 py-5 group">
          <Link to={'/contact'} className={`${menu === 'contact' ? active : location.pathname === '/contact' ? active : ''}`} onClick={() => setMenu('contact')}>
            <i className="ri-contacts-book-3-line"></i>
          </Link>
          <span className={`${span}`}>Contact</span>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar