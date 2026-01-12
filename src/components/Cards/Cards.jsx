import React from 'react'

const Cards = ({heading , paragraph}) => {
  return (
    <div className='rounded-xl bg-gray-100 shadow hover:shadow-lg p-6 cursor-pointer transition max-w-xl text-center mx-auto mb-5 '>
      <h1 className='text-xl font-semibold text-green-700 mb-2'>{heading}</h1>
      <p className='text-gray-600'>{paragraph}</p>
    </div>
  )
}

export default Cards
