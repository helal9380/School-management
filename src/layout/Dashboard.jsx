/** @format */
import { IoHomeSharp } from "react-icons/io5";

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md px-6 py-8 space-y-6 hidden md:block">
        <h2 className="text-2xl font-bold text-[#004562] mb-6">
          Madrasah Admin
        </h2>
        <nav className="space-y-3 text-lg">
          <Link
            to="/dashboard/overview"
            className="block text-gray-700 hover:text-[#46819b] font-medium">
            📊 Overview
          </Link>
          <Link
            to="/dashboard/students"
            className="block text-gray-700 hover:text-[#46819b] font-medium">
            🎓 Students
          </Link>
          <Link
            to="/dashboard/teachers"
            className="block text-gray-700 hover:text-[#46819b] font-medium">
            👩‍🏫 Teachers
          </Link>
          <Link
            to="/dashboard/fees"
            className="block text-gray-700 hover:text-[#46819b] font-medium">
            💰 Fees Management
          </Link>
          <Link
            to="/dashboard/settings"
            className="block text-gray-700 hover:text-[#46819b] font-medium">
            ⚙️ Settings
          </Link>
        </nav>

        {/* shered */}
        <Link
          to="/"
          className="flex  items-center gap-2 text-gray-700 hover:text-[#46819b] font-medium">
          <IoHomeSharp />
          HOME
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white shadow-md rounded-lg p-4 min-h-[80vh]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
