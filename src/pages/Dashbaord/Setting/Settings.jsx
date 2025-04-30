/** @format */

import React from "react";

const Settings = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#102126]">
          Account <span className="text-[#00bbf0]">Setting</span>
        </h2>

        {/* Profile Settings */}
        <div className="bg-white shadow rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Asadur Rahman"
                className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="asadur@example.com"
                className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#00bbf0] hover:bg-[#009ecc] text-white px-5 py-2 rounded-lg mt-2 transition">
              Save Changes
            </button>
          </form>
        </div>

        {/* Password Change */}
        <div className="bg-white shadow rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#00bbf0] hover:bg-[#009ecc] text-white px-5 py-2 rounded-lg mt-2 transition">
              Update Password
            </button>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
              />
              Email notifications for new announcements
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
              />
              SMS alerts for fee dues
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
              />
              App notifications for activity updates
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
