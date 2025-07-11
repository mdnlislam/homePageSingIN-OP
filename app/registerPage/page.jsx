"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/register", form); // সরল JSON পাঠাচ্ছেন
      alert("Registered successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        gender: "",
      });
    } catch (err) {
      if (err.response?.status === 400) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong!");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <Navbar />

      <div className="flex justify-center items-center pt-10 pb-20 px-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-black font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-300 bg-gray-100 text-black p-2 w-full rounded"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-black font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 bg-gray-100 text-black p-2 w-full rounded"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-black font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-300 bg-gray-100 text-black p-2 w-full rounded"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-black font-semibold mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="border border-gray-300 bg-gray-100 text-black p-2 w-full rounded"
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded w-full transition duration-200"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
