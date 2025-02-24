import React, { useState } from "react";
import { MdFormatListBulleted } from "react-icons/md";
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
    <div className="flex justify-center items-center min-h-screen bg-[#121212] text-white">
      <form onSubmit={handleSubmit} className="bg-[#1E1E2F] p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-[#BB58FF] flex flex-row">Travel Agency Form <MdFormatListBulleted className="text-2xl mt-1 ml-2" /></h2>

        <label className="block mb-2 font-medium text-[#EAEAEA]">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-[#BB58FF] bg-[#2A2A3A] text-white rounded p-2 mb-3 focus:border-[#33A1FD] focus:outline-none"
          required
        />

        <label className="block mb-2 font-medium text-[#EAEAEA]">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-[#BB58FF] bg-[#2A2A3A] text-white rounded p-2 mb-3 focus:border-[#33A1FD] focus:outline-none"
          required
        />

        <label className="block mb-2 font-medium text-[#EAEAEA]">Venue:</label>
        <input
          type="number"
          name="Venue"
          value={formData.Venue}
          onChange={handleChange}
          className="w-full border border-[#BB58FF] bg-[#2A2A3A] text-white rounded p-2 mb-3 focus:border-[#33A1FD] focus:outline-none"
          required
        />

        <label className="block mb-2 font-medium text-[#EAEAEA]">Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border border-[#BB58FF] bg-[#2A2A3A] text-white rounded p-2 mb-3 focus:border-[#33A1FD] focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#BB58FF] hover:bg-[#33A1FD] text-white py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
