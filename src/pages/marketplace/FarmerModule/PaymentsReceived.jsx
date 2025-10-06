import React from "react";

const PaymentsReceived = () => {
  const payments = [
    { orderId: "101", amount: "₹2000", date: "2025-10-01", status: "Completed" },
    { orderId: "102", amount: "₹1000", date: "2025-10-02", status: "Completed" },
    { orderId: "103", amount: "₹1500", date: "2025-10-03", status: "Completed" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Payments Received</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{p.orderId}</td>
                <td className="p-3">{p.amount}</td>
                <td className="p-3">{p.date}</td>
                <td className="p-3">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsReceived;
