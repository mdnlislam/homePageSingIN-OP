"use client";
import Link from "next/link";
import { useState } from "react";
import { manuItem } from "@/config";
import LogoutButton from "@/app/components/logoutButton";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {manuItem.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
          <LogoutButton />

          {/* <NavLink href="/homePage" label="Home" />
          <NavLink href="/registerPage" label="Family Register form" />
          <NavLink href="/familyPage" label="Family Member" />
          <NavLink href="/info" label="Info" /> */}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-blue-700">
          <NavLink href="/homePage" label="Home" />
          <NavLink href="/registerPage" label="Register" />
          <NavLink href="/familyPage" label="Family Member" />
          <NavLink href="/info" label="Info" />
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <Link href={href} className="text-white hover:text-gray-200 text-lg">
      {label}
    </Link>
  );
}
