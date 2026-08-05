import React from 'react'

const Button = ({value, clickHandler, style}) => {
  return (
    <button 
      className={`${style} py-3 px-3`}
      onClick={clickHandler}
    >
      {value}
    </button>
  )
}

export default Button