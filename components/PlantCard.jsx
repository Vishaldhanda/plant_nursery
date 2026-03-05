"use client";

import Link from "next/link";

export default function PlantCard({ plant }) {

  // Safety check
  if (!plant) return null;

  return (

    <Link href={`/plant/${plant.id}`}>

      <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition">

        {/* Image */}
        {plant.image && (
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-48 object-cover"
          />
        )}

        {/* Content */}
        <div className="p-4">

          <h3 className="font-semibold text-lg">
            {plant.name}
          </h3>

          <p className="text-gray-500 text-sm">
            {plant.category}
          </p>

          <p className="text-green-700 font-bold mt-2">
            ₹{plant.price}
          </p>

        </div>

      </div>

    </Link>

  );
}