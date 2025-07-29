import React, { useState } from "react";

const LoginPopup = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-red-500"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border px-4 py-2 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your password"
                required
              />
              {/* Toggle Icon */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3 cursor-pointer text-lg text-gray-500 hover:text-black"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
