import React from 'react'

const FacultyCards = ({img , alt ,name ,designation , qualification, specialization}) => {

  const handleImgError = (e) => {
    e.target.src = "/person.png";  
  };

  return (
    <div className='p-6 rounded-2xl border border-gray-200 cursor-pointer shadow-lg hover:shadow-2xl bg-slate-100 text-center transition-all'>
      <img className='w-22 h-22 mx-auto object-cover object-center rounded-full border-4 border-green-500' src={img} onError={handleImgError} alt={alt} />
      <h2 className='text-xl font-semibold text-green-700 mt-3'>{name}</h2>
      <p className='text-gray-600 font-medium'>{designation}</p>
      <p className='text-gray-700 text-sm'>{qualification}</p>
      <p className='text-gray-600 text-sm mt-1 italic'>{specialization}</p>
    </div>
  )
}

export default FacultyCards
