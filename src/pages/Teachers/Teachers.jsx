/** @format */

import React from "react";

const teachers = [
  {
    id: 1,
    name: "Mr. Rafiq Ahmed",
    subject: "Mathematics",
    photo: "https://i.ibb.co/9nN6Bvz/teacher1.jpg",
    email: "rafiq.ahmed@example.com",
  },
  {
    id: 2,
    name: "Ms. Ayesha Karim",
    subject: "English",
    photo: "https://i.ibb.co/7J8wBKH/teacher2.jpg",
    email: "ayesha.karim@example.com",
  },
  {
    id: 3,
    name: "Mr. Saiful Islam",
    subject: "Science",
    photo: "https://i.ibb.co/qJgDfFf/teacher3.jpg",
    email: "saiful.islam@example.com",
  },
];

const Teachers = () => {
  return (
    <section className="py-16 about_section text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Our <span className="text-[#00bbf0]">Teachers</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto">
            Our experienced and passionate teachers are here to guide every
            student towards academic success.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-[#00bbf0]"
              />
              <h3 className="text-xl font-semibold">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.subject}</p>
              <a
                href={`mailto:${teacher.email}`}
                className="text-[#00bbf0] mt-2 inline-block hover:underline">
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
