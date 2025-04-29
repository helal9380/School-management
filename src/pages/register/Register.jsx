/** @format */

import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    // TODO: integrate Firebase Auth createUserWithEmailAndPassword
    console.log({ name, email, password });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f0f4f8]">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#00bbf0]">
          Register
        </h2>
        <form
          onSubmit={handleRegister}
          className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00bbf0]"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00bbf0]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00bbf0]"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-sm text-gray-500">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#00bbf0] hover:bg-[#009dcc] text-white py-2 rounded-md font-semibold">
            Register
          </button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#00bbf0] hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
