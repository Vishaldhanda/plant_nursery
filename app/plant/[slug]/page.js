"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function PlantPage() {

  const params = useParams();

  const slug = params.slug;

  // convert slug to readable name
  const plantName = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, l => l.toUpperCase());

  return (

    <main className="min-h-screen bg-gray-50 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-md"
        >

          {/* Image */}
          <div>
            <img
              src="/images/placeholder.jpg"
              alt="plant"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>


          {/* Info */}
          <div className="flex flex-col justify-center">

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {plantName}
            </h1>

            <p className="text-gray-600 mb-4">
              This is a beautiful and healthy plant perfect for your home or garden.
              Easy to maintain and improves air quality.
            </p>

            <p className="text-2xl font-semibold text-green-700 mb-6">
              ₹100
            </p>

            <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition w-fit">
              Contact Owner
            </button>

          </div>

        </motion.div>

      </div>

    </main>

  );
}