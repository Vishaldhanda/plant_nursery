"use client";

import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import PlantCard from "../components/PlantCard";
import PremiumNature from "../components/PremiumNature";
import { plants } from "../lib/plants";

export default function Home() {

  return (
    <main className="relative">

      {/* Premium Nature Effects (global floating butterflies etc.) */}
      <PremiumNature />

      {/* HERO SECTION */}
      <section
        className="relative h-[500px] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center z-10"
        >

          <h1 className="text-5xl font-bold mb-4">
            Welcome to Green Haven Nursery 🌿
          </h1>

          <p className="text-lg mb-6 text-gray-200">
            Bringing Nature to Your Home
          </p>

          <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Explore Plants
          </button>

        </motion.div>

      </section>


      {/* MAIN CONTENT */}
      <section className="bg-gray-100 py-12">

        <div className="max-w-7xl mx-auto flex gap-10 px-6">

          {/* SIDEBAR */}
          <div className="w-80 sticky top-20 h-fit">
            <Sidebar />
          </div>


          {/* PLANT GRID */}
          <div className="flex-1">

            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Featured Plants
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {plants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                />
              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );

}