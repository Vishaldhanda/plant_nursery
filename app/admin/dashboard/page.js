"use client";

import Link from "next/link";
import { plants, deletePlant } from "../../lib/plants";
import { useState, useEffect } from "react";

export default function Dashboard() {

  const [plantList, setPlantList] = useState([]);

  // Load plants on page load
  useEffect(() => {
    setPlantList([...plants]);
  }, []);

  // Delete function
  const handleDelete = (id) => {

    const confirmDelete = confirm("Are you sure you want to delete this plant?");

    if (!confirmDelete) return;

    deletePlant(id);

    // Update UI after delete
    setPlantList([...plants]);
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Admin Dashboard
      </h1>

      <Link href="/admin/add">
        <button className="bg-green-600 text-white px-4 py-2 rounded mb-6 hover:bg-green-700">
          Add New Plant
        </button>
      </Link>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-green-100">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Plant Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>

          {plantList.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No plants available
              </td>
            </tr>
          ) : (

            plantList.map((plant) => (

              <tr key={plant.id} className="border-t">

                {/* IMAGE COLUMN */}
                <td className="p-3">
                  {plant.image ? (
                    <img
                      src={plant.image}
                      className="h-12 w-12 object-cover rounded border"
                    />
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </td>

                <td className="p-3">{plant.name}</td>

                <td className="p-3">{plant.category}</td>

                <td className="p-3">₹{plant.price}</td>

                <td className="p-3">

                  <Link href={`/admin/edit/${plant.id}`}>
                    <span className="text-blue-600 cursor-pointer mr-4 hover:underline">
                      Edit
                    </span>
                  </Link>

                  <span
                    onClick={() => handleDelete(plant.id)}
                    className="text-red-600 cursor-pointer hover:underline"
                  >
                    Delete
                  </span>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}