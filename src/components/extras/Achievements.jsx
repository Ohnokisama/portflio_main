import React from 'react'
import ListItem from './ListItem'

const Achievements = () => {
  return (
    <div className=''>
      <ul>
        <ListItem 
          mainHeading={'Most hardworking staff'}
          place={'Globaltech World Computer Institute'}
          duration={'May 2023 - December 2023'}
        />
        <ListItem 
          mainHeading={'H.O.D. - Web Development Agric Branch'}
          place={'Globaltech World Computer Institute'}
          duration={'August 2023 - December 2024'}
        />
      </ul>
    </div>
  )
}

export default Achievements