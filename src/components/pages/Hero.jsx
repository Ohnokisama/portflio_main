import React, { useEffect } from 'react'
import Typing from '../extras/Typing'
import { Link } from 'react-router-dom'
import Resume from "../../assets/Resume.pdf"

const Hero = ({setMenu}) => {
  useEffect(() => {
    document.title = "Home | Onuoha Jephthah"
  }, [])

  return (
    <div className='flex flex-col md:flex-row h-auto md:h-[100vh] items-center pt-28 md:pt-0'>
      <div className="w-full md:w-[50%] px-6 md:pl-28">
        <h3 className="text-3xl font-thin my-6">
          <Typing />
        </h3>
        <h1 className='md:text-7xl text-4xl font-black'>
          I'm <span className='text-[var(--main-color)] md:text-7xl text-4xl'>Onuoha</span> <br /> Jephthah
        </h1>
        <div className="flex my-6 gap-4">
          <Link to={'/about'} className='py-3 px-4 bg-[var(--main-color)] font-bold md:py-4 md:px-8' onClick={() => setMenu('about')}>About Me <i className="ri-arrow-right-s-line"></i></Link>
          <a href={Resume} className='py-3 px-4 bg-white text-[var(--main-color)] font-bold md:py-4 md:px-8' download={'Resume'}>Download CV <i className="ri-download-2-line"></i></a>
        </div>
      </div>
      <div className="w-full md:w-[50%] bg-[var(--main-color)] h-full">

      </div>
    </div>
  )
}

export default Hero