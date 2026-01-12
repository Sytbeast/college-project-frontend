import { useEffect, useState } from "react";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE}/api/notes`)
            .then(res => res.json())
            .then(data => setNotes(data));
    }, []);

    return (

        <>
            <div className="bg-green-700 text-white text-center py-16 px-4">
                <h1 className="text-xl md:text-4xl font-bold">
                    Zoology Notes
                </h1>
            </div>


            <div className="max-w-5xl mx-auto p-6">

                {!notes.length > 0 && <div className="font-bold text-gray-500 border mt-3 mx-auto text-center">
                    <div>No Notes are Uploaded Right Now!..</div>
                </div>}

                <div className="grid md:grid-cols-2 gap-6">
                    {notes.map(note => (
                        <div key={note._id}
                            className="p-4 border border-gray-200 hover:shadow-2xl rounded-lg shadow">
                            <h3 className="font-semibold">{note.title}</h3>
                            <p className="text-sm text-gray-600">{note.subject}</p>
                            <a
                                href={`${import.meta.env.VITE_API_BASE}/uploads/${note.file}`}
                                target="_blank"
                                className="text-green-600 font-semibold mt-2 inline-block"
                            >
                                Download PDF
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Notes;
