import React from 'react'
import Cards from '../../components/Cards/Cards'

const About = () => {
  return (
    <div>
      <section className='text-center mt-4 p-3'>
        <h2 className='text-3xl font-bold mb-3 text-green-600'>About The Department</h2>
        <p className='max-w-3xl mx-auto text-gray-700 text-justify'>The Department of Zoology is one of the leading academic wings of the college, dedicated to the study of animal life and biological diversity.
          Since its establishment, the department has been imparting quality education, promoting scientific thinking, and encouraging students to pursue research in various fields of Zoology.
          <br />
          <br />
          The department offers undergraduate and postgraduate courses, equipped with modern laboratories and an experienced faculty team.</p>
      </section>

      <Cards
        heading={"Vision"}
        paragraph={"To achieve excellence in the field of Zoology through innovation, research, and education, while nurturing awareness about wildlife conservation and environmental sustainability."}
       />

      <section className='text-center mt-4 p-3 max-w-xl mx-auto'>
        <h2 className='text-3xl font-bold mb-3 text-green-600'>Mission</h2>
        <ul className='text-start max-w-3xl list-disc list-inside text-gray-700 mx-auto'>
          <li>To Provide a Strong Foundation in Animal Sciences</li>
          <li>To promote research culture among students</li>
          <li>To spread awareness about biodiversity conservation</li>
          <li>To contribute to society through knowledge and innovation</li>
        </ul>
      </section>
      


    </div>
  )
}

export default About
