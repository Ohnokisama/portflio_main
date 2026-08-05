import React from 'react'
import Image1 from "../../assets/Frame 1.png";

const ProjectCard = ({item: {image, title, projectLink}}) => {
  return (
    <div className='h-[200px] md:h-[250px] bg-red-500 rounded-xl relative overflow-hidden group'>
      <img src={image} alt={title} className='h-full w-full object-cover rounded-lg' />
      <div className="absolute w-full h-full bg-main/75 top-0 left-[100%] flex items-center justify-center flex-col group-hover:left-0 transition-all">
        <p className='text-2xl font-bold text-center'>{title}</p>
        <a href={`${projectLink}`} className='mt-2'>
          View Project &nbsp;
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard