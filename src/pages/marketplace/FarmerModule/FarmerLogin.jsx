import React from "react";
import { Link } from "react-router-dom";

const FarmerLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Farmer Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="sr-only">
            Mobile or Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Mobile or Email"
            aria-label="Mobile or Email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            aria-label="Password"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition mb-4">
          Login
        </button>

        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FarmerLogin;
