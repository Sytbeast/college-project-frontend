import React from "react";

const AnimalCard = ({ image, title, scientific, description, features, examples }) => {
  return (
    <div className="
      bg-white rounded-2xl shadow-md 
      hover:shadow-2xl transition-all duration-300 
      flex flex-col h-full
    ">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="
            w-full h-48 sm:h-52 md:h-56 
            object-cover 
            hover:scale-105 transition duration-300
          "
        />
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl md:text-2xl font-bold text-green-700">
          {title}
        </h3>

        <p className="italic text-sm text-gray-500 mb-2">
          {scientific}
        </p>

        <p className="text-gray-700 text-sm mb-4 grow">
          {description}
        </p>

        <div className="mb-3">
          <h4 className="font-semibold text-sm mb-1">
            Key Features:
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-3 border-t text-sm">
          <span className="font-semibold">Examples:</span>{" "}
          <span className="text-gray-600">{examples}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
