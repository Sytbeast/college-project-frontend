import React from "react";

const Courses = () => {
  return (
    <div>
      <div className="bg-green-700 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold">Courses Offered</h1>
        <p className="mt-3 text-lg">
          Explore undergraduate and postgraduate programs in Zoology
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-bold text-green-700">B.Sc Zoology</h2>
          <p className="mt-3 text-gray-600">
            Study of animal diversity, anatomy, physiology, genetics, and ecology.
          </p>
          <p className="mt-4 font-semibold">Duration: 3 Years</p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-bold text-green-700">M.Sc Zoology</h2>
          <p className="mt-3 text-gray-600">
            Advanced study in animal behavior, molecular biology, and research.
          </p>
          <p className="mt-4 font-semibold">Duration: 2 Years</p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-bold text-green-700">Ph.D Zoology</h2>
          <p className="mt-3 text-gray-600">
            Doctoral research programs in specialized zoological fields.
          </p>
          <p className="mt-4 font-semibold">Duration: As per Research</p>
        </div>

      </div>
    </div>
  );
};

export default Courses;
