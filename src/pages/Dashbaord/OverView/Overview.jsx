/** @format */

import React from "react";
import {
  FaChalkboardTeacher,
  FaMoneyBill,
  FaUserGraduate,
  FaWallet,
} from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Overview = () => {
  const stats = [
    {
      title: "Total Students",
      value: 125,
      icon: <FaUserGraduate className="text-3xl text-blue-500" />,
    },
    {
      title: "Total Teachers",
      value: 15,
      icon: <FaChalkboardTeacher className="text-3xl text-green-500" />,
    },
    {
      title: "Monthly Income",
      value: "৳95,000",
      icon: <FaMoneyBill className="text-3xl text-emerald-500" />,
    },
    {
      title: "Monthly Expenses",
      value: "৳40,000",
      icon: <FaWallet className="text-3xl text-red-500" />,
    },
  ];

  const chartData = [
    { name: "Jan", Income: 90000, Expenses: 40000 },
    { name: "Feb", Income: 95000, Expenses: 42000 },
    { name: "Mar", Income: 98000, Expenses: 39000 },
    { name: "Apr", Income: 97000, Expenses: 41000 },
    { name: "May", Income: 54000, Expenses: 36210 },
    { name: "Apr", Income: 97000, Expenses: 41000 },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#102126]">
        Dashboard <span className="text-[#00bbf0]">Overview</span>
      </h2>

      {/* Stat Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow border border-gray-200 p-5 flex items-center gap-4 hover:shadow-md transition">
            <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <p className="text-xl font-semibold text-gray-800">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#102126]">
          Monthly Income vs Expenses
        </h3>
        <ResponsiveContainer
          width="100%"
          height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="Income"
              fill="#00bbf0"
            />
            <Bar
              dataKey="Expenses"
              fill="#f87171"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Overview;
