import React, { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const validateForm = (e) =>{

    if(!name.trim() && !email.trim()){
      e.preventDefault()
      setError("Name and Email Should Not be Empty")
    }

    if(!name.trim()){
      e.preventDefault()
      setError("Name is Required")
    }
    if(!email.trim()){
      e.preventDefault()
      setError("Email is Required")
     }
  }


  return (
    <div>
      <div className="bg-green-700 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg">
          Get in touch with the Department of Zoology
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2">

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Department Address
          </h2>

          <p className="mb-2"><strong>Department:</strong> Zoology</p>
          <p className="mb-2"><strong>College:</strong> Kirodimal Government College</p>
          <p className="mb-2"><strong>City:</strong> Raigarh, Chhattisgarh</p>
          <p className="mb-2"><strong>Email:</strong> KirodimalDegree@college.gmail</p>
        </div>

        <form action={"https://formspree.io/f/xykkggbj"} method="POST" className="border rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold mb-4">Send a Message</h2>

          { error && (
            <div className="text-red-500 text-center my-2">{error}</div>
          )}

          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            name="name"
            required
            placeholder="Your Name"
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border p-2 mb-3 rounded"
          />

          <textarea
            placeholder="Your Message"
            name="textarea"
            required
            className="w-full border p-2 mb-3 rounded"
            rows="4"
          />

          

          <button onSubmit={(e)=>validateForm(e)} type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
