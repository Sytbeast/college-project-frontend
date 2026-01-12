import React from 'react'
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ handleScroll }) => {
    return (
        <section
            className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1470&q=80')",
            }}
        >

            <div className="absolute inset-0 bg-black/60"></div>


            <div className="relative z-10 max-w-3xl px-6 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Department of Zoology
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Exploring the fascinating world of animals through 
                    <Typewriter
                     words={[
                        ' Science',
                        ' Research',
                        ' Discovery',
                     ]}
                        loop={0} 
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    /> 
                </p>
                <button onClick={handleScroll} className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-full shadow-md transition-all">
                    Explore More
                </button>
            </div>
        </section>
    );
}
export default Hero
