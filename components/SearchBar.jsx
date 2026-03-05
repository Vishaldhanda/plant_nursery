export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search plants..."
        className="w-full max-w-md px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}