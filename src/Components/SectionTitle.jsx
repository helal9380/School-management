/** @format */

import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="space-y-2 text-center my-10">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
