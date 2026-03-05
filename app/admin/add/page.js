"use client";

import { useState } from "react";
import { addPlant } from "../../lib/plants";
import { useRouter } from "next/navigation";

export default function AddPlant() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addPlant({
      name,
      category,
      price,
      image
    });

    router.push("/admin/dashboard");
  };

  return (

    <div className="p-10 max-w-xl">

      <h1 className="text-2xl font-bold mb-6">
        Add New Plant
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="Plant Name"
          className="border p-2 w-full"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Category"
          className="border p-2 w-full"
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          placeholder="Price"
          className="border p-2 w-full"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 w-full"
        />

        {image && (
          <img
            src={image}
            className="h-32 object-cover rounded"
          />
        )}

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Save Plant
        </button>

      </form>

    </div>
  );
}