"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CategoryCard({ name }) {

  // convert name to URL slug
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/category/${slug}`}>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
      >

        {/* Background Image */}
        <div className="h-40 bg-gray-300">
          <img
            src="/images/placeholder.jpg"
            alt="category"
            className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h3 className="text-white text-lg font-semibold">
            {name}
          </h3>
        </div>

      </motion.div>

    </Link>
  );
}