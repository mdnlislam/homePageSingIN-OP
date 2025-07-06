"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function FamilyPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/family"); // এটা users.json থেকে data আনবে
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 underline underline-offset-8">
          Family Members
        </h2>

        {users.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No members found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {user.name}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Date of Birth:</strong> {user.dob}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Father's Name:</strong> {user.fatherName}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Mother's Name:</strong> {user.motherName}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Blood Group:</strong> {user.bloodGroup}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Job Sector:</strong> {user.jobSector}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Job Position:</strong> {user.jobPosition}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>School:</strong> {user.school}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>College:</strong> {user.college}
                </p>
                <p className="text-gray-600">
                  <strong>University:</strong> {user.varsity}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
