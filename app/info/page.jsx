"use client";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Padding top so content doesn't hide behind fixed navbar */}
      <div className="pt-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-600 mb-8 text-center">
          Alhamdulillah
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center">
          <img
            src="/images/dadi.jpg"
            alt="Dadi"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
          />
          <img
            src="/images/dada.jpg"
            alt="Dada"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
          />
        </div>

        <div className="mt-10 space-y-8">
          {/* এখানে অন্য কন্টেন্ট এড করতে পারো */}
        </div>
      </div>
    </div>
  );
}
