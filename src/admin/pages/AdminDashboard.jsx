import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [faculty , setFaculty] = useState([])
  const [notes, setNotes] = useState([])
  const [gallery, setGallery] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchFaculty = async() =>{
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/faculty/`)
      const data = await res.json();
      setFaculty(data);
      
    }
    const fetchGallery = async () =>{
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/gallery/`)
      const data = await res.json();
      setGallery(data);
    }
    const fetchNotes = async () =>{
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/notes/`)
      const data = await res.json();
      setNotes(data);
    }


    fetchFaculty();
    fetchGallery();
    fetchNotes();

  },[])




  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
        <p className="text-gray-600 text-center">Zoology Department Admin Panel</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <Link to="/admin/gallery">
          <div className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Gallery</h2>
            <p className="text-white">
              Add, update & delete gallery images
            </p>
            <p className="text-md font-semibold">Total Gallery Uploaded : {gallery.length>0? gallery.length: "0"}</p>

          </div>
        </Link>

        <Link to="/admin/faculty">
          <div className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Faculty</h2>
            <p className="text-white">
              Manage faculty details & profiles
            </p>
            <p className="text-md font-semibold">Total Faculty : {faculty.length>0? faculty.length: "0"}</p>
          </div>
        </Link>

        <Link to="/admin/notesadmin">
          <div className="bg-yellow-500 hover:bg-yellow-600 text-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Notes</h2>
            <p className="text-white">
              upload & Manage Notes
            </p>
            <p className="text-md font-semibold">Total Notes Uploaded : {notes.length>0? notes.length: "0"}</p>

          </div>
        </Link>

        <div
          onClick={logout}
          className="bg-red-500 text-white p-6 rounded-xl shadow hover:bg-red-600 transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Logout</h2>
          <p>Exit from admin panel</p>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;

