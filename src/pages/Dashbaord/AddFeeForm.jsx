/** @format */

import React, { useState } from "react";

const AddFeeForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    roll: "",
    monthlyFee: 0,
    lunchFee: 0,
    otherDues: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name.includes("Fee") || name === "otherDues"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: Date.now() });
    setFormData({
      name: "",
      class: "",
      roll: "",
      monthlyFee: 0,
      lunchFee: 0,
      otherDues: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-md rounded space-y-4">
      <h3 className="text-xl font-semibold">Add Student Fee</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Student Name"
          className="input input-bordered w-full"
          required
        />
        <input
          name="class"
          value={formData.class}
          onChange={handleChange}
          placeholder="Class"
          className="input input-bordered w-full"
          required
        />
        <input
          name="roll"
          value={formData.roll}
          onChange={handleChange}
          placeholder="Roll Number"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="monthlyFee"
          value={formData.monthlyFee}
          onChange={handleChange}
          placeholder="Monthly Fee"
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="lunchFee"
          value={formData.lunchFee}
          onChange={handleChange}
          placeholder="Lunch Fee"
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="otherDues"
          value={formData.otherDues}
          onChange={handleChange}
          placeholder="Other Dues"
          className="input input-bordered w-full"
        />
      </div>
      <button
        type="submit"
        className="btn bg-[#00bbf0] text-white hover:bg-[#009ecc]">
        Add Fee
      </button>
    </form>
  );
};

export default AddFeeForm;
