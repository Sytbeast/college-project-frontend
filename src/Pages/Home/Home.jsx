import React, { useRef } from 'react'
import Hero from '../../components/Hero/Hero'
import { Link } from 'react-router-dom';

const Home = () => {

  const homeRef = useRef(null);

  const handleScroll = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <div>
      <Hero handleScroll={handleScroll} />

      <div ref={homeRef}>

        <section className="py-16 bg-gray-50 text-center px-6">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Intro to Department</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            The Department of Zoology focuses on the study of animal life, biodiversity,
            and ecosystem sustainability. We aim to inspire scientific curiosity through
            research, education, and conservation.
          </p>
        </section>

        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-8">Our Research Areas</h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-6">
            {[
              { title: "Wildlife Conservation", desc: "Preserving biodiversity through scientific research." },
              { title: "Genetics & Evolution", desc: "Exploring animal genetics and evolutionary biology." },
              { title: "Marine Biology", desc: "Studying aquatic life and ocean ecosystems." },
            ].map((item) => (
              <Link to={"/gallery"} key={item.title} className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
        

      </div>
    </div>
  )
}

export default Home
