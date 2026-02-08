import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotesAdmin = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState([]);

  // editing ke liye hai
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);


  const token = localStorage.getItem("token");

  const fetchNotes = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/notes`);
    setNotes(await res.json());
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    if (!file) return alert("select files to upload");
    if (!title) return alert("title is required");
    if (!subject) return alert("subject name is required");


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

  const editNote = (note) => {
    setTitle(note.title)
    setSubject(note.subject)
    setEditId(note._id)
    setShowModal(true)
  }

  const updateNote = async () => {
    if (!title || !subject) return alert("All fields required");

    const fd = new FormData();
    fd.append("title", title);
    fd.append("subject", subject);

    if (file) {
      fd.append("file", file);
    }

    await fetch(`${import.meta.env.VITE_API_BASE}/api/notes/${editId}`, {
      method: "PUT",
      headers: { Authorization: token },
      body: fd,
    });

    alert("Note Updated");
    setShowModal(false);
    setEditId(null);
    setTitle("");
    setSubject("");
    setFile(null);
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

          <div className="flex gap-3">
            <button onClick={() => editNote(n)}
              className="text-blue-600 bg-blue-200 border border-blue-600 rounded px-2 py-1">Edit</button>

            <button onClick={() => deleteNote(n._id)}
              className="text-red-600 bg-red-200 border border-red-600 rounded px-2 py-1">Delete</button>
          </div>


        </div>
      ))}



      {
        showModal && (
          <div className="fixed inset-0 bg-white backdrop-blur-2xl bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl font-bold mb-4">Update Note</h2>

              <input
                className="border p-2 w-full mb-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                className="border p-2 w-full mb-2"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <input
                type="file"
                className="mb-3"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={updateNote}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )
      }


    </div>






  );
};

export default NotesAdmin;
