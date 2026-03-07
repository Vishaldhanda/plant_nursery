"use client";

import { motion } from "framer-motion";

export default function PlantCard({ plant }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
    >
      {/* Plant Image */}
      <div className="h-48 overflow-hidden">

        <motion.img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

      </div>

      {/* Plant Details */}
      <div className="p-4">

        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
          {plant.name}
        </h3>

        <p className="text-sm text-gray-500">
          {plant.category}
        </p>

        {/* Optional future price */}
        {plant.price && (
          <p className="text-green-600 font-semibold mt-2">
            ₹{plant.price}
          </p>
        )}

      </div>
    </motion.div>
  );
}