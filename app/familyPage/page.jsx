"use client";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Add padding top so content doesn't hide behind fixed navbar */}
      <div className="pt-20 px-4">
        <h1 className="text-3xl font-bold">Alhamdulillah</h1>

        <div className="mt-10 space-y-8"></div>
      </div>
    </div>
  );
}
