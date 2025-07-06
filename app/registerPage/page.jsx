"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: null,
    dob: "",
    fatherName: "",
    motherName: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    jobSector: "",
    jobPosition: "",
    school: "",
    college: "",
    varsity: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    await axios.post("/api/register", formData);

    setForm({
      name: "",
      email: "",
      image: null,
      dob: "",
      fatherName: "",
      motherName: "",
      gender: "",
      bloodGroup: "",
      phone: "",
      jobSector: "",
      jobPosition: "",
      school: "",
      college: "",
      varsity: "",
    });

    setLoading(false);
    alert("Registered!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Navbar always top */}
      <Navbar />

      {/* Form container */}
      <div className="flex justify-center items-center pt-10 pb-20 px-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Registration Form
          </h2>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-4"
          >
            {[
              ["name", "Name"],
              ["email", "Email"],
              ["dob", "Date of Birth"],
              ["fatherName", "Father's Name"],
              ["motherName", "Mother's Name"],
              ["phone", "Phone Number"],
              ["jobSector", "Job Sector"],
              ["jobPosition", "Job Position"],
              ["school", "School Name"],
              ["college", "College Name"],
              ["varsity", "University Name"],
            ].map(([field, label]) => (
              <div key={field}>
                <label className="block text-black font-semibold mb-1">
                  {label}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "dob"
                      ? "date"
                      : "text"
                  }
                  name={field}
                  placeholder={`Enter ${label.toLowerCase()}`}
                  value={form[field]}
                  onChange={handleChange}
                  className="border border-gray-300 bg-gray-100 text-black placeholder:text-black p-2 w-full rounded"
                  required
                />
              </div>
            ))}

            {/* Image Upload */}
            <div>
              <label className="block text-black font-semibold mb-1">
                Profile Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
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

            {/* Blood Group */}
            <div>
              <label className="block text-black font-semibold mb-1">
                Blood Group
              </label>
              <select
                name="bloodGroup"
                value={form.bloodGroup}
                onChange={handleChange}
                className="border border-gray-300 bg-gray-100 text-black p-2 w-full rounded"
                required
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded w-full transition duration-200"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
