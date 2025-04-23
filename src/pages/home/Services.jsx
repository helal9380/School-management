/** @format */

import React from "react";

const Services = () => {
  const serviceData = [
    {
      title: "Currency Wallet",
      description:
        "Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      image: "images/s1.png",
    },
    {
      title: "Security Storage",
      description:
        "Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      image: "images/s2.png",
    },
    {
      title: "Expert Support",
      description:
        "Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      image: "images/s3.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our <span className="text-[#00bbf0]">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105">
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto h-20"
                />
              </div>
              <h5 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h5>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-[#00bbf0] font-medium hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block px-6 py-2 bg-[#00bbf0] text-white font-semibold rounded-full hover:bg-[#009ecc] transition">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
