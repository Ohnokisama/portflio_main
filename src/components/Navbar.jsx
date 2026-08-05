import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({menu, setMenu}) => {
  // Setting current link state
  // const [menu, setMenu] = useState('')

  // Setting hover display
  const span = 'p-1 bg-white text-[#00031a] rounded absolute right-16 hidden md:group-hover:inline transition-all'

  // Setting active link
  const active = 'text-[var(--main-dark-color)]'

  // Getting location to set active link
  const location = useLocation()

  return (
    <div className='fixed z-40 bottom-0 bg-[var(--main-color)] h-auto rounded-none w-full md:bg-white/10 backdrop:blur-xl md:h-[330px] md:right-10 md:top-[30%] md:w-auto md:rounded-full'>
      <ul className='flex flex-row md:flex-col items-center md:justify-center justify-evenly'>
        <li className="px-6 py-5 group">
          <Link to={'/'} className={`${menu === 'home' ? active : location.pathname === '/' ? active : 'text-white'}`} onClick={() => setMenu('home')}>
            <i className="ri-home-2-line"></i>
          </Link>
          <span className={`${span}`}>Home</span>
        </li>
        <li className="px-6 py-5 group">
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
        </li>
      </ul>
    </div>
  )
}

export default Navbar