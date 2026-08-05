import React, {useEffect, useState} from 'react'
import ProjectCard from '../extras/ProjectCard'
import projects from '../extras/data'

const Projects = () => {
  const [category, setCategory] = useState('Web Development')
  const active = "text-[var(--main-color)] border-b-2 border-[var(--main-color)]"

  // const handleClick = e => {
  //   setCategory(e.target.value)
  // }

  const filteredProjects = projects.filter(
    (project) =>
    project.category.toLocaleLowerCase() == category.toLocaleLowerCase()
  )

  useEffect(() => {
    document.title = "Projects | Onuoha Jephthah"
    console.log(filteredProjects);
  }, [category])

  return (
    <div className='pt-28 px-6 h-auto pb-20 md:pb-0 md:px-[8.5rem] md:gap-12'>
      <div className="w-full">
        <div className="text-center mb-6">
          <h1 className='text-3xl md:text-4xl font-bold'>My Works</h1>
          <p className='my-3 text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, aspernatur.
          </p>
        </div>
        <div className="flex justify-center gap-4 my-4">
          <button 
            className={`${category === 'Web Development' ? active : ''} py-3 px-3`}
            onClick={() => setCategory('Web Development')}
          >
            Web Development
          </button>
          <button 
            className={`${category === 'Product Design' ? active : ''} py-3 px-3`}
            onClick={() => setCategory('Product Design')}
          >
            Product Design
          </button>
          <button 
            className={`${category === 'Graphic Design' ? active : ''} py-3 px-3`}
            onClick={() => setCategory('Graphic Design')}
          >
            Graphic Design
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {
            filteredProjects.map((item, id) => (
              <ProjectCard key={id} item={item} />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Projects