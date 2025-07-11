"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function FamilyPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/family");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-[#bbdefb]">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 underline underline-offset-8">
          Welcome To Family Members
        </h2>

        {users.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No members found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.map((user, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-5"
              >
                {/* চাইলে এখানে image দেখাতে পারেন */}
                <img
                  src="/images/fower.jpg"
                  alt=""
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  {user.name}
                </h3>

                <div className="space-y-1 text-gray-700 text-sm text-center">
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Gender:</strong> {user.gender}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
