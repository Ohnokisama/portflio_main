import React from 'react'
import Ai from "./../../assets/adobe-illustrator.svg";
import Figma from "./../../assets/figma.svg";
import Photoshop from "./../../assets/photoshop.svg";
import Education from './Education';
import Experience from './Experience';
import Achievements from './Achievements';

const AboutSection = ({tab}) => {
  switch(tab) {
    case 'education':
      return(
        <Education />
      )

    case 'experience':
      return(
        <Experience />
      )

    case 'achievements':
      return(
        <Achievements />
      )

    case 'skills':
      return(
        <div className='py-4'>
          <div className="flex gap-4 my-2">
            <p>Web Development</p> --
            <div className='text-xl flex gap-1'>
              <i className="ri-html5-line"></i>
              <i className="ri-css3-line"></i>
              <i className="ri-tailwind-css-line"></i>
              <i className="ri-bootstrap-line"></i>
              <i className="ri-javascript-line"></i>
              <i className="ri-reactjs-line"></i>
              <i className="ri-nodejs-line"></i>
              <i className="ri-wordpress-line"></i>
              <i className="ri-firebase-line"></i>
              
            </div>
          </div>
          <div className="flex gap-4 my-2">
            <p>Design</p> --
            <div className='text-xl flex gap-1 design'>
              <img src={ Figma } alt="" />
              <img src={ Ai } alt="" />
              <img src={ Photoshop } alt="" />
            </div>
          </div>
        </div>
      )
  }
}

export default AboutSection