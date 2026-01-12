import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FacultyAdmin = () => {
  const [faculty, setFaculty] = useState([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [file, setFile] = useState(null);

  const token = localStorage.getItem("token");
  const API = import.meta.env.VITE_API_BASE;

  const fetchFaculty = async () => {
    const res = await fetch(`${API}/api/faculty`);
    const data = await res.json();
    setFaculty(data);
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const addFaculty = async () => {
    if(!name) return alert("name is required");

    const fd = new FormData();
    fd.append("name", name);
    fd.append("designation", designation);
    fd.append("qualification", qualification);
    fd.append("specialization", specialization);
    fd.append("image", file);

    await fetch(`${API}/api/faculty`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: fd,
    });

    alert("Faculty Added");
    fetchFaculty();
  };

  const deleteFaculty = async (id) => {
    if (!window.confirm("Delete this faculty?")) return;

    await fetch(`${API}/api/faculty/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    setFaculty(prev => prev.filter(f => f._id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded shadow-2xl">
      <h2 className="md:text-2xl text-lg font-bold mb-4">Manage Faculty</h2>

      <div className="grid gap-3 mb-8">
        <input className="border p-2 w-full rounded" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input className="border p-2 w-full rounded" placeholder="Designation" onChange={e => setDesignation(e.target.value)} />
        <input className="border p-2 w-full rounded" placeholder="Qualification" onChange={e => setQualification(e.target.value)} />
        <input className="border p-2 w-full rounded" placeholder="Specialization" onChange={e => setSpecialization(e.target.value)} />
        <input className="border w-full rounded" type="file" onChange={e => setFile(e.target.files[0])} />

        <button onClick={addFaculty} className="bg-green-600 text-white py-2 rounded">
          Add Faculty
        </button>

        <Link
            to="/admin/dashboard"
            className="inline-block text-center bg-gray-800 text-white px-4 py-2 rounded"
         >
            Dashboard
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {faculty.map(f => (
          <div key={f._id} className="border p-4 rounded">
            <img
              src={`${API}/uploads/${f.image}`}
              className="h-40 w-full object-cover mb-2"
            />
            <h3 className="font-bold">{f.name}</h3>
            <p>{f.designation}</p>
            <button
              onClick={() => deleteFaculty(f._id)}
              className="bg-red-600 text-white px-3 py-1 mt-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default FacultyAdmin;
