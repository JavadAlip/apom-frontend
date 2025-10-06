
import React from "react";
const ListProduce = () => {
  const produceList = [
    { crop: "Tomatoes", quantity: "50kg", price: "₹1000", location: "Salem", date: "2025-10-10" },
    { crop: "Potatoes", quantity: "100kg", price: "₹2000", location: "Coimbatore", date: "2025-10-12" },
    { crop: "Carrots", quantity: "30kg", price: "₹800", location: "Madurai", date: "2025-10-15" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Produce</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produceList.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{item.crop}</h2>
            <p className="text-gray-700">Quantity: {item.quantity}</p>
            <p className="text-gray-700">Price: {item.price}</p>
            <p className="text-gray-700">Location: {item.location}</p>
            <p className="text-gray-500 text-sm">Available Date: {item.date}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduce;
