import React from 'react'
import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <>
      <TypeAnimation 
        sequence={[
          'UI/UX Designer',
          2000,
          'Frontend Web Developer',
          2000,
          'Graphic Designer',
          2000
        ]}
        wrapper='span'
        speed={50}
        repeat={Infinity}
      />
    </>
  )
}

export default Typing