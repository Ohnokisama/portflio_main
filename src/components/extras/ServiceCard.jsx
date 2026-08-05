import React from 'react'

const ServiceCard = ({icon, title, children}) => {
  return (
    <div className='bg-bgDark  rounded-lg p-6'>
      <i className={`${icon} ri-2x text-[var(--main-color)]`}></i>
      <h1 className="text-2xl font-bold my-3">{title}</h1>
      <p>
        {children}
      </p>
    </div>
  )
}

export default ServiceCard