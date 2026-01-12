import React, { useEffect, useState } from 'react'
import GalleryCard from '../../components/Cards/GalleryCard';

const Gallery = () => {

  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_BASE}/api/gallery${category ? `?category=${category}` : ""
      }`
    )
      .then(res => res.json())
      .then(data => setImages(data));
  }, [category]);

  return (
    <div>
      <div className='bg-green-700 text-white text-center py-16'>
        <h2 className='text-4xl font-bold'>Explore</h2>
        <h2 className='md:text-lg mt-2 text-sm'>Explore Our Zoological Research & Studies</h2>
      </div>

      <div>
        <div className="flex md:gap-4  gap-2 justify-center my-6">
          {["", "marine", "wildlife", "lab"].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="bg-green-600 text-white text-sm md:px-4 md:py-2 px-2 py-1 rounded hover:bg-green-500"
            >
              {cat || "All"}
            </button>
          ))}
        </div>


        {!images.length > 0 && <div className="font-bold text-gray-500 border mt-6 max-w-5xl mx-auto text-center">
          <div>No Images are Uploaded Right Now!..</div>
        </div>}

        <div className="grid  md:grid-cols-3 sm:grid-cols-2 gap-6 p-10">
          {images.map(img => (
            <GalleryCard
              key={img._id}
              image={`${import.meta.env.VITE_API_BASE}/uploads/${img.image}`}
              title={img.title}
              category={img.category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
