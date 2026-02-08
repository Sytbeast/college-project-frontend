import React, { useEffect, useState } from "react";
import FacultyCards from "../../components/Cards/FacultyCards";

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    fetch(`${API}/api/faculty`)
      .then((res) => res.json())
      .then((data) => {
        setFaculty(data);
        // console.log(data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="bg-green-700 text-white text-center py-16">
        <h2 className="text-4xl font-bold">Our Faculty</h2>
        <p className="text-lg mt-2">
          Meet the team that inspires and leads excellence in Zoology
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {loading && (
          <div className="mx-auto">
            <img className="mx-auto" width={30} height={30} src="loader.gif"></img>
          </div>
          // <p className="text-center text-gray-600">Loading faculty...</p>
        )}

        {!loading && faculty.length === 0 && (
          <p className="text-center text-gray-500">
            No faculty added yet.
          </p>
        )}

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((item) => (
            <FacultyCards
              key={item._id}
              name={item.name}
              designation={item.designation}
              qualification={item.qualification}
              specialization={item.specialization}
              img={`${API}/uploads/${item.image}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
