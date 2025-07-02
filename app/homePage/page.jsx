"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Spacer for Navbar height */}
      <div className="h-16" />

      {/* Hero Section - Full Screen Light Image Only */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/home.jpg"
          alt="Home Background"
          fill
          className="object-cover brightness-[1.5]" // হালকা ব্যাকগ্রাউন্ড
          priority
        />
      </div>

      {/* Info Section: Rakib Picture + Text */}
      <div className="bg-white text-gray-800 py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Picture */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <Image
            src="/images/rakib.jpg"
            alt="Md. Nurul Islam Rakib"
            width={224}
            height={224}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Md. Nurul Islam (Rakib)
          </h2>
          <p className="text-lg mb-3 text-gray-700">
            🎓 Diploma in Ceramic Technology
          </p>
          <p className="text-lg mb-3 text-gray-700">
            🏫 Bangladesh Institute of Glass and Ceramics
          </p>
          <p className="text-lg mb-3 text-gray-700">
            🎓 B.Sc in IPE (Industrial & Production Engineering)
          </p>
          <p className="text-lg text-gray-700">
            🏫 European University of Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
}
