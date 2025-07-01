"use client";
import { useState } from "react";
import axios from "axios";
export default function SignForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/signup", form);
      alert(res.data.message, "signupForm");
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else "Something went wrong.";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Signup</h2>

        {/* Name */}
        <div className="space-y-1">
          <label className="block text-black font-medium">Name</label>
          <input
            type="text"
            required
            placeholder="Enter your name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-black"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-black font-medium">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-black"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="block text-black font-medium">Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-black"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
