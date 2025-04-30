/** @format */

import React, { useState } from "react";
import { feeData } from "../../utils/feeData";
import AddFeeForm from "./AddFeeForm";
import FeeList from "./FeeList";

const FeeManagement = () => {
  const [fees, setFees] = useState(feeData);

  const handleAddFee = (newFee) => {
    setFees((prev) => [...prev, newFee]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-5 space-y-8">
      <h2 className="text-3xl text-center font-bold text-[#102126]">
        📊 Fee Management
      </h2>
      <AddFeeForm onAdd={handleAddFee} />
      <FeeList fees={fees} />
    </div>
  );
};

export default FeeManagement;
