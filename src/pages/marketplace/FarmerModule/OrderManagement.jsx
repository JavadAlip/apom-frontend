import React from "react";

const OrderManagement = () => {
  const orders = [
    { customer: "Rahul", crop: "Tomatoes", quantity: "20kg", status: "Pending" },
    { customer: "Anita", crop: "Potatoes", quantity: "50kg", status: "Pending" },
    { customer: "Suresh", crop: "Carrots", quantity: "15kg", status: "Pending" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">{order.customer}</h2>
            <p className="text-gray-700">Crop: {order.crop}</p>
            <p className="text-gray-700">Quantity: {order.quantity}</p>
            <p className="text-gray-500">Status: {order.status}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                Accept
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
