"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function FamilyMemberPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/family");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-[80px] min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 px-4 pb-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-purple-700 drop-shadow-lg">
          Our Family
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl hover:scale-[1.03]"
            >
              {/* Top image section */}
              <div className="w-full h-48 relative bg-gray-200">
                <Image
                  src="/images/rakib.jpg"
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom content section */}
              <div className="p-6 text-center space-y-1">
                <h2 className="text-2xl font-bold text-purple-800">
                  {user.name}
                </h2>
                <p className="text-gray-600">{user.gender}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">📱 {user.phone}</p>
                <div className="text-sm text-gray-600 pt-2 space-y-1">
                  <p>🎓 School: {user.school}</p>
                  <p>🏫 College: {user.college}</p>
                  <p>🏛️ Varsity: {user.varsity}</p>
                  <p>💼 Job: {user.jobSector}</p>
                  <p>🎂 DOB: {user.dateOfBirth}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
