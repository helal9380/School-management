/** @format */
import React, { useState } from "react";

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
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <section className="text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#102126]">
            All Students{" "}
            <span className="text-[#004562]">({students.length})</span>
          </h2>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-[#004562] text-white uppercase text-sm">
              <tr>
                <th className="px-6 py-3"></th>
                <th className="px-6 py-3">Photo</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Class</th>
                <th className="px-6 py-3">Roll</th>
                <th className="px-6 py-3">Guardian Email</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-[#f0faff] transition duration-200">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4">{student.class}</td>
                  <td className="px-6 py-4">{student.roll}</td>
                  <td className="px-6 py-4">
                    <a
                      href={`mailto:${student.guardianEmail}`}
                      className="text-[#004562] hover:underline">
                      {student.guardianEmail}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="px-4 py-1 text-sm bg-[#004562] text-white rounded-md hover:bg-[#009ecc] transition"
                      onClick={() => {
                        setSelectedStudent(student),
                          document.getElementById("my_modal_3").showModal();
                      }}>
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View Modal */}
        {selectedStudent && (
          <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog
              id="my_modal_3"
              className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="text-center">
                  <img
                    src={selectedStudent.photo}
                    alt={selectedStudent.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1">
                    {selectedStudent.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{selectedStudent.class}</p>
                  <p>
                    <strong>Roll:</strong> {selectedStudent.roll}
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${selectedStudent.guardianEmail}`}
                      className="text-[#004562] hover:underline">
                      {selectedStudent.guardianEmail}
                    </a>
                  </p>
                </div>
              </div>
            </dialog>
          </>
        )}
      </div>
    </section>
  );
};

export default Students;
