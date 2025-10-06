    import { useState } from "react";

export default function RequestPickup() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    pickup: "",
    destination: "",
    vehicle: "",
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = () => {
    alert("Request submitted (demo only)");
    setForm({ name: "", contact: "", pickup: "", destination: "", vehicle: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 flex flex-col items-center">
      <div className="w-full max-w-lg bg-white p-5 rounded shadow space-y-4">
        <h1 className="text-2xl font-bold text-green-800 text-center">
          Transportation Request
        </h1>

        <input
          placeholder="Farmer / Buyer Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="border border-gray-200 p-2 rounded w-full"
        />
        <input
          placeholder="Contact Number"
          value={form.contact}
          onChange={(e) => handleChange("contact", e.target.value)}
          className="border border-gray-200 p-2 rounded w-full"
        />
        <input
          placeholder="Pickup Location"
          value={form.pickup}
          onChange={(e) => handleChange("pickup", e.target.value)}
          className="border border-gray-200 p-2 rounded w-full"
        />
        <input
          placeholder="Destination"
          value={form.destination}
          onChange={(e) => handleChange("destination", e.target.value)}
          className="border border-gray-200 p-2 rounded w-full"
        />
        <select
          value={form.vehicle}
          onChange={(e) => handleChange("vehicle", e.target.value)}
          className="border border-gray-200 p-2 rounded w-full"
        >
          <option value="">Select Vehicle Type</option>
          <option>Mini Truck</option>
          <option>Tractor</option>
          <option>Lorry</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-green-700 text-white rounded py-2 hover:bg-green-800 w-full"
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}
