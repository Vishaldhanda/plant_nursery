"use client";

import { useState, useEffect } from "react";
import { plants, updatePlant } from "../../../lib/plants";
import { useRouter, useParams } from "next/navigation";

export default function EditPlant() {

  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {

    const plant = plants.find(p => p.id == id);

    if (plant) {
      setName(plant.name);
      setCategory(plant.category);
      setPrice(plant.price);
    }

  }, [id]);

  const handleSubmit = (e) => {

    e.preventDefault();

    updatePlant(id, {
      name,
      category,
      price
    });

    alert("Plant updated successfully!");

    router.push("/admin/dashboard");
  };

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        Edit Plant
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Update Plant
        </button>

      </form>

    </div>
  );
}