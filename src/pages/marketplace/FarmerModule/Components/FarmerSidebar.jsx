import React from "react";
import { Link, useLocation } from "react-router-dom";

const FarmerSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Produce", path: "/dashboard/produce" },
    { name: "Orders", path: "/dashboard/orders" },
    { name: "Payments", path: "/dashboard/payments" },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-md fixed">
      <div className="p-6 text-xl font-bold border-b">Farmer Portal</div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-6 py-3 my-2 rounded hover:bg-gray-200 ${
              location.pathname === item.path ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FarmerSidebar;
