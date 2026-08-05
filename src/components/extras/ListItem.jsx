import React from 'react'

const ListItem = ({mainHeading, place,  duration}) => {
  return (
    <li className='py-2'>
      <h3 className="text-lg font-bold">
        {mainHeading}
      </h3>
      <p className="font-light py-1">
        {place}
      </p>
      <p className="font-light text-[var(--main-color)] py-1">
        {duration}
      </p>
    </li>
  )
}

export default ListItem