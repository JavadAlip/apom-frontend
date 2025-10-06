// src/pages/marketplace/FarmerDashboard.jsx
import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function FarmerDashboard() {
  const [produce, setProduce] = useState([
    { id: 1, crop: "Tomatoes", quantity: "50", price: "1000", location: "Salem", availableDate: "2025-10-10" },
    { id: 2, crop: "Potatoes", quantity: "100", price: "2000", location: "Erode", availableDate: "2025-10-15" },
  ]);

  const [form, setForm] = useState({
    crop: "",
    quantity: "",
    price: "",
    location: "",
    availableDate: "",
  });

  const handleAdd = () => {
    if (!form.crop || !form.quantity || !form.price) return alert("Please fill all fields");
    const newItem = { id: Date.now(), ...form };
    setProduce([...produce, newItem]);
    setForm({ crop: "", quantity: "", price: "", location: "", availableDate: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 space-y-6">
        <h1 className="text-2xl font-bold">Farmer Dashboard</h1>

        {/* Add Produce Form */}
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold mb-3">List New Produce</h2>
          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Crop Type"
              value={form.crop}
              onChange={(e) => setForm({ ...form, crop: e.target.value })}
              className="border p-2 rounded w-full"
            />
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="Quantity (kg)"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Price (₹)"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="border p-2 rounded"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="date"
                placeholder="Available Date"
                value={form.availableDate}
                onChange={(e) => setForm({ ...form, availableDate: e.target.value })}
                className="border p-2 rounded"
              />
            </div>

            <button
              onClick={handleAdd}
              className="bg-green-700 text-white rounded py-2 hover:bg-green-800 transition"
            >
              Add Produce
            </button>
          </div>
        </div>

        {/* Produce List */}
        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold mb-3">My Produce</h2>
          {produce.length === 0 ? (
            <p className="text-gray-600">No produce added yet.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {produce.map((item) => (
                <div key={item.id} className="border p-3 rounded shadow-sm">
                  <h3 className="font-semibold">{item.crop}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity} kg</p>
                  <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
                  <p className="text-sm text-gray-600">Location: {item.location}</p>
                  <p className="text-xs text-gray-400">Available: {item.availableDate}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
