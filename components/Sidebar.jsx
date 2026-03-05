"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Sidebar() {

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents & Cacti",
    "Ornamental Trees",
    "Herbs & Edibles",
    "Garden Supplies"
  ];

  return (

    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-[280px] bg-white shadow-xl rounded-xl p-5 sticky top-24 h-fit"
    >

      {/* Search */}
      <div className="relative mb-6">

        <Search className="absolute left-3 top-3 text-gray-400" size={18} />

        <input
          type="text"
          placeholder="Search plants..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

      </div>


      {/* Categories title */}
      <div className="bg-green-700 text-white px-4 py-2 rounded-md mb-4 font-semibold text-center">
        Plant Categories
      </div>


      {/* Categories list */}
      <ul className="space-y-3">

        {categories.map((cat, index) => (

          <motion.li
            key={index}
            whileHover={{ x: 5 }}
            className="cursor-pointer text-gray-700 hover:text-green-600 border-b pb-2"
          >
            • {cat}
          </motion.li>

        ))}

      </ul>

    </motion.div>

  );

}