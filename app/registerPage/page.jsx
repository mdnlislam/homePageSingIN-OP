"use client";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    school: "",
    college: "",
    varsity: "",
    jobSector: "",
    dateOfBirth: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0]?.name });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("/api/register", form);
      setMessage(res.data.message || "Registration successful!");
      setForm({
        name: "",
        email: "",
        phone: "",
        gender: "",
        school: "",
        college: "",
        varsity: "",
        jobSector: "",
        dateOfBirth: "",
        image: null,
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="h-16" />

      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-8 my-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Family Member Register Form
        </h1>

        {message && (
          <div
            className={`mb-4 p-3 rounded ${
              message.includes("success")
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="image"
              className="block mb-1 font-semibold text-gray-700"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-1 font-semibold text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+8801XXXXXXXXX"
              className="w-full px-4 py-2 border rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block mb-1 font-semibold text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="school"
              className="block mb-1 font-semibold text-gray-700"
            >
              School Name
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={form.school}
              onChange={handleChange}
              placeholder="Your school name"
              className="w-full px-4 py-2 border rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="college"
              className="block mb-1 font-semibold text-gray-700"
            >
              College Name
            </label>
            <input
              type="text"
              id="college"
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder="Your college name"
              className="w-full px-4 py-2 border rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="varsity"
              className="block mb-1 font-semibold text-gray-700"
            >
              University Name
            </label>
            <input
              type="text"
              id="varsity"
              name="varsity"
              value={form.varsity}
              onChange={handleChange}
              placeholder="Your university name"
              className="w-full px-4 py-2 border rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="jobSector"
              className="block mb-1 font-semibold text-gray-700"
            >
              Job Sector
            </label>
            <input
              type="text"
              id="jobSector"
              name="jobSector"
              value={form.jobSector}
              onChange={handleChange}
              placeholder="Your job sector"
              className="w-full px-4 py-2 border rounded text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="dateOfBirth"
              className="block mb-1 font-semibold text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded shadow transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
