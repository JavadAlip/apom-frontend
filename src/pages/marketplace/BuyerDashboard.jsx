import { useState } from "react";

export default function BuyerDashboard() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [products] = useState([
    { id: 1, crop: "Tomatoes", price: "1000", location: "Salem", quantity: "50kg" },
    { id: 2, crop: "Potatoes", price: "2000", location: "Erode", quantity: "100kg" },
    { id: 3, crop: "Onions", price: "1500", location: "Namakkal", quantity: "75kg" },
  ]);

  const filtered = products.filter(
    (item) =>
      item.crop.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || item.location === location)
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 space-y-6">
      <h1 className="text-2xl font-bold text-green-800">Marketplace – Buyer Dashboard</h1>

      {/* Filters */}
      <div className="bg-white shadow p-4 rounded flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by crop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 p-2 rounded w-full sm:w-1/3"
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-200 p-2 rounded w-full sm:w-1/3"
        >
          <option value="">All Locations</option>
          <option value="Salem">Salem</option>
          <option value="Erode">Erode</option>
          <option value="Namakkal">Namakkal</option>
        </select>
        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
          Apply Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="font-semibold text-gray-800">{item.crop}</h2>
              <p className="text-sm text-gray-500">Location: {item.location}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-green-700 font-bold mt-1">₹ {item.price}</p>
              <button className="mt-3 bg-green-700 text-white w-full rounded py-1 hover:bg-green-800">
                Request to Buy
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
