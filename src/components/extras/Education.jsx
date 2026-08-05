import React from 'react'
import ListItem from './ListItem'

const Education = () => {
  return (
    <div className='py-3'>
      <ul>
        <ListItem 
          mainHeading={'Secondary School Education'}
          place={'Federal College of Education (Technical) Secondary School'}
          duration={'September 2011 - June 2017'}
        />
        <ListItem 
          mainHeading={'B.Sc. Computer Science'}
          place={'National Open University of Nigeria (NOUN)'}
          duration={'September 2024 - Present'}
        />
        {/* <ListItem 
          mainHeading={'Graphic Design'}
          place={'Globaltech World Computer Institute'}
          duration={'January 2021 - March 2021'}
        />
        <ListItem 
          mainHeading={'Digital Marketing'}
          place={'Globaltech World Computer Institute'}
          duration={'October 2021 - December 2021'}
        />
        <ListItem 
          mainHeading={'Product Design'}
          place={'Cholatrek Institute'}
          duration={'September 2022 - March 2023'}
        /> */}
      </ul>
    </div>
  )
}

export default Education