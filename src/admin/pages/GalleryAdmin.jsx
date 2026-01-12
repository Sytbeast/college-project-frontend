import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GalleryAdmin = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]); 

  const API = import.meta.env.VITE_API_BASE; 
  const token = localStorage.getItem("token");

  const loadImages = async () => {
    const res = await fetch(`${API}/api/gallery`);
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const uploadImage = async () => {
    if (!file) return alert("Select image");
    if (!title) return alert("title is required");
    if (!category) return alert("Select category");

    const fd = new FormData();
    fd.append("title", title);
    fd.append("category", category);
    fd.append("image", file);

    await fetch(`${API}/api/gallery`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: fd,
    });

    alert("Uploaded");
    setTitle("");
    setCategory("");
    setFile(null);
    loadImages();
  };

  const deleteImage = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    await fetch(`${API}/api/gallery/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    setImages(prev => prev.filter(img => img._id !== id));
  };

  return (
    <div className="max-w-4xl w-full mx-auto mt-5 md:p-6 p-4 shadow-2xl rounded-xl">

      <div className="max-w-xl mx-auto mb-10 text-center w-full">
        <h2 className="text-2xl font-bold mb-4">Add Gallery Image</h2>

        <input
          className="border md:p-2 p-1 w-full mb-3 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-3 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="marine">Marine</option>
          <option value="wildlife">WildLife</option>
          <option value="lab">Lab</option>
        </select>

        <input
          type="file"
          className="mb-3"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={uploadImage}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>

        <Link
          to="/admin/dashboard"
          className="ml-3 px-4 py-2 text-white rounded bg-gray-600"
        >
          Dashboard
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map(item => (
          <div key={item._id} className="bg-white shadow rounded overflow-hidden">
            <img
              src={`${API}/uploads/${item.image}`}
              className="h-40 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>

              <button
                onClick={() => deleteImage(item._id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GalleryAdmin;
