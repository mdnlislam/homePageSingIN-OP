"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 text-gray-800">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Spacer */}
      <div className="h-16" />

      {/* Hero Background */}
      <div className="relative w-full h-[90vh]">
        <Image
          src="/images/home.jpg"
          alt="Home Background"
          fill
          className="object-cover brightness-130"
          priority
        />
      </div>

      {/* Info Section */}
      <div className="py-5 px-6 flex flex-col items-center text-center">
        {/* Picture */}
        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg mb-4">
          <Image
            src="/images/rakib.jpg"
            alt="Md. Nurul Islam Rakib"
            width={180}
            height={180}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-2">
          Web Designer & Developer
        </h1>

        {/* Name */}
        <h2 className="text-lg font-bold text-gray-900 mb-1">
          Md. Nurul Islam (Rakib)
        </h2>

        {/* Education Info */}
        <p className="text-sm text-gray-600 mb-1">
          Diploma in Ceramic Technology
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Bangladesh Institute of Glass and Ceramics
        </p>
        <p className="text-sm text-gray-600 mb-1">
          B.Sc in IPE (Industrial & Production Engineering)
        </p>
        <p className="text-sm text-gray-600 mb-4">
          European University of Bangladesh
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-red-600 hover:text-red-800 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+880123456789"
            className="text-green-600 hover:text-green-800 transition"
          >
            <FaPhone />
          </a>
        </div>
      </div>
    </div>
  );
}
