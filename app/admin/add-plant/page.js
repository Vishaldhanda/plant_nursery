
"use client";
export default function AddPlant() {
  return (
    <div className="p-10">
      <h1>Add Plant</h1>
      <input placeholder="Plant Name"/>
      <input type="file"/>
      <input type="file"/>
      <button>Save Plant</button>
    </div>
  );
}
