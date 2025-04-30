/** @format */

import React from "react";

const FeeList = ({ fees }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 bg-white shadow rounded">
        <thead className="bg-[#00bbf0] text-white text-sm uppercase">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Class</th>
            <th className="p-4">Roll</th>
            <th className="p-4">Monthly Fee</th>
            <th className="p-4">Lunch Fee</th>
            <th className="p-4">Other Dues</th>
            <th className="p-4">Total</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee) => (
            <tr
              key={fee.id}
              className="border-t hover:bg-gray-50">
              <td className="p-4 font-semibold">{fee.name}</td>
              <td className="p-4">Class : {fee.class}</td>
              <td className="p-4">{fee.roll}</td>
              <td className="p-4">৳{fee.monthlyFee}</td>
              <td className="p-4">৳{fee.lunchFee}</td>
              <td className="p-4">৳{fee.otherDues}</td>
              <td className="p-4 font-bold">
                ৳{fee.monthlyFee + fee.lunchFee + fee.otherDues}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeList;
