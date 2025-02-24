import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    Venue: "",
    date: "",
    project: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen  text-white">
      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#BB58FF] to-[#470069] p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-white">Travel Agency Form</h2>

        <label className="block mb-2 font-medium text-white">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-[#1733B8] bg-black text-white rounded p-2 mb-3"
          required
        />

        <label className="block mb-2 font-medium text-white">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-[#1733B8] bg-black text-white rounded p-2 mb-3"
          required
        />

        <label className="block mb-2 font-medium text-white">Venue:</label>
        <input
          type="number"
          name="Venue"
          value={formData.Venue}
          onChange={handleChange}
          className="w-full border border-[#1733B8] bg-black text-white rounded p-2 mb-3"
          required
        />

        <label className="block mb-2 font-medium text-white">Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border border-[#1733B8] bg-black text-white rounded p-2 mb-3"
          required
        />

        {/* <label className="block mb-2 font-medium text-white">Great Project:</label>
        <textarea
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="w-full border border-[#1733B8] bg-black text-white rounded p-2 mb-4"
          rows="3"
          required
        ></textarea> */}

        <button
          type="submit"
          className="w-full bg-[#470069] text-white py-2 rounded  transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
