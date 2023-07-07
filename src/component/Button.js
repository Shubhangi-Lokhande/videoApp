import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-gray-200 cursor-pointer rounded-lg m-2 p-2'>{name}</button>
  )
}

export default Button