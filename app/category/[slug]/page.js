"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import PlantCard from "../../../components/PlantCard";

export default function CategoryPage() {

  const params = useParams();

  const slug = params.slug;

  // convert slug to readable title
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, l => l.toUpperCase());

  return (

    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-green-100 py-16 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-green-800"
        >
          {title}
        </motion.h1>

        <p className="text-gray-600 mt-3">
          Browse our collection of {title.toLowerCase()}.
        </p>

      </section>


      {/* Plant Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <PlantCard name="Snake Plant" />
          <PlantCard name="Aloe Vera" />
          <PlantCard name="Peace Lily" />
          <PlantCard name="Areca Palm" />
          <PlantCard name="Money Plant" />
          <PlantCard name="Rubber Plant" />

        </div>

      </section>

    </main>

  );
}