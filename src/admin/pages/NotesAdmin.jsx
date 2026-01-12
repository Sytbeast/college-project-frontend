import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotesAdmin = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState([]);

  const token = localStorage.getItem("token");

  const fetchNotes = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/notes`);
    setNotes(await res.json());
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    if(!file) return alert("select files to upload");
    if(!title) return alert("title is required");
    if(!subject) return alert("subject name is required");


    const fd = new FormData();
    fd.append("title", title);
    fd.append("subject", subject);
    fd.append("file", file);

    await fetch(`${import.meta.env.VITE_API_BASE}/api/notes`, {
      method: "POST",
      headers: { Authorization: token },
      body: fd,
    });

    alert("Notes Added");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    if (!window.confirm("Delete this Notes?")) return;

    await fetch(`${import.meta.env.VITE_API_BASE}/api/notes/${id}`, {
      method: "DELETE",
      headers: { Authorization: token },
    });
    fetchNotes();
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add Notes</h2>

      <input className="border p-2 w-full mb-2" placeholder="Title"
        onChange={e => setTitle(e.target.value)} />

      <input className="border p-2 w-full mb-2" placeholder="Subject"
        onChange={e => setSubject(e.target.value)} />

      <input type="file" className="mb-3"
        onChange={e => setFile(e.target.files[0])} />

       <Link
            to="/admin/dashboard"
            className="inline-block text-center bg-gray-800 text-white px-4 py-2 rounded"
         >
            Dashboard
        </Link>

      <button onClick={addNote}
        className="bg-green-600 text-white px-4 py-2 rounded">
        Upload Note
      </button>

      <hr className="my-6" />

      {notes.map(n => (
        <div key={n._id} className="flex justify-between mb-2">
          <p>{n.title}</p>
          <button onClick={() => deleteNote(n._id)}
            className="text-red-600">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotesAdmin;
