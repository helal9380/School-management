/** @format */

import React from "react";

const students = [
  {
    id: 1,
    name: "Rakib Hasan",
    class: "Class 6",
    roll: "1023",
    photo: "https://i.ibb.co/ZKFD5kj/student1.jpg",
    guardianEmail: "rakib.parent@example.com",
  },
  {
    id: 2,
    name: "Mim Akter",
    class: "Class 7",
    roll: "1041",
    photo: "https://i.ibb.co/WGgJDv4/student2.jpg",
    guardianEmail: "mim.parent@example.com",
  },
  {
    id: 3,
    name: "Nayeem Islam",
    class: "Class 5",
    roll: "1098",
    photo: "https://i.ibb.co/d7jqKdv/student3.jpg",
    guardianEmail: "nayeem.parent@example.com",
  },
];

const Students = () => {
  return (
    <section className="py-20 about_section text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#00bbf0]">Students</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto">
            A few of our hardworking and dedicated students currently enrolled.
          </p>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="table  w-full">
            <thead className="about_section text-white">
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Name</th>
                <th>Class</th>
                <th>Roll</th>
                <th>Guardian Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="hover:bg-[#102126]">
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={student.photo}
                          alt={student.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.roll}</td>
                  <td>
                    <a
                      href={`mailto:${student.guardianEmail}`}
                      className="text-[#00bbf0] hover:underline">
                      {student.guardianEmail}
                    </a>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline btn-info">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Students;
