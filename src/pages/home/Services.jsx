/** @format */

import React from "react";
import { FaLayerGroup, FaMoneyBillWave, FaUserShield } from "react-icons/fa";

const Services = () => {
  const features = [
    {
      id: 1,
      title: "Division Management",
      description:
        "Create and assign students to divisions or classes seamlessly.",
      icon: <FaLayerGroup className="text-5xl text-[#00bbf0] mx-auto mb-4" />,
    },
    {
      id: 2,
      title: "Fee Tracking",
      description:
        "Track monthly fees, lunch fees, and other dues effortlessly.",
      icon: (
        <FaMoneyBillWave className="text-5xl text-[#00bbf0] mx-auto mb-4" />
      ),
    },
    {
      id: 3,
      title: "Role-Based Access",
      description:
        "Different views for Admin, Teachers, Students, and Parents.",
      icon: <FaUserShield className="text-5xl text-[#00bbf0] mx-auto mb-4" />,
    },
  ];

  return (
    <section className="py-16 text-white about_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Key <span className="text-[#00bbf0]">Features</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((service) => (
            <div
              key={service.id}
              className="bg-[#00475b] text-white shadow-md rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105">
              <div>{service.icon}</div>
              <h5 className="text-xl font-semibold mb-2">{service.title}</h5>
              <p className="mb-4">{service.description}</p>
              <a
                href="#"
                className="text-[#00addd] font-semibold hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
