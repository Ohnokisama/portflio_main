import React from 'react'
import Logo from '../assets/Logo_main.svg'

const Top = () => {
  return (
    <nav className='px-6 md:px-[8.5rem] py-3 bg-[var(--bg-color)] md:py-6 flex flex-row justify-between items-center fixed w-full z-50'>
      <img src={Logo} width={70} alt="" className='relative' />
      <ul className="flex md:mt-0">
        <li className="px-3">
          <a href="" className='hover:text-[var(--main-dark-color)] transition-all'>
            <i className="ri-github-line text-xl md:text-2xl"></i>
          </a>
        </li>
        <li className="px-3">
          <a href="" className='hover:text-[var(--main-dark-color)] transition-all'>
            <i className="ri-linkedin-line text-xl md:text-2xl"></i>
          </a>
        </li>
        <li className="px-3">
          <a href="" className='hover:text-[var(--main-dark-color)] transition-all'>
            <i className="ri-instagram-line text-xl md:text-2xl"></i>
          </a>
        </li>
        <li className="px-3">
          <a href="" className='hover:text-[var(--main-dark-color)] transition-all'>
            <i className="ri-twitter-x-line text-xl md:text-2xl"></i>
          </a>
        </li>
        <li className="px-3">
          <a href="" className='hover:text-[var(--main-dark-color)] transition-all'>
            <i className="ri-facebook-line text-xl md:text-2xl"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Top