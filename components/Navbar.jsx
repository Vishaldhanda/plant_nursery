"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">
          🌿 Green Haven Nursery
        </h1>
      </Link>


      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-medium">

        <Link href="/" className="hover:text-green-200 transition">
          Home
        </Link>

        <Link href="/about" className="hover:text-green-200 transition">
          About Us
        </Link>

        <Link href="/contact" className="hover:text-green-200 transition">
          Contact Us
        </Link>

      </div>

    </nav>

  );
}