/** @format */

import { useState } from "react";
import { allTeachers } from "../../../utils/feeData";

// data/teachersData.js

const ManageTeachers = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [teachers, setTeachers] = useState(allTeachers);
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6">
        👩‍🏫 Manage Teachers ({teachers.length})
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#004562] text-white uppercase text-xs">
            <tr>
              <th className="p-4">Photo</th>
              <th className="p-4">Name</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr
                key={teacher.id}
                className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="p-4 font-medium">{teacher.name}</td>
                <td className="p-4">{teacher.subject}</td>
                <td className="p-4">
                  <a
                    href={`mailto:${teacher.email}`}
                    className="text-blue-600 hover:underline">
                    {teacher.email}
                  </a>
                </td>
                <td className="p-4">{teacher.phone}</td>
                <td className="p-4 space-x-2">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-xs bg-blue-500 text-white hover:bg-blue-600"
                    onClick={() => {
                      setSelectedStudent(teacher);
                      document.getElementById("my_modal_3").showModal();
                    }}>
                    View
                  </button>
                  {selectedStudent && (
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
                        <div>
                          <div className="w-full flex justify-center items-center p-4">
                            <div className="w-[80%] overflow-hidden shadow-lg border border-gray-200">
                              <img
                                src={teacher.photo}
                                alt={teacher.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg">
                          Teacher Name: {teacher.name}
                        </h3>
                        <h3 className="font-bold text-lg">
                          Subject: {teacher.subject}
                        </h3>
                        <h3 className="font-bold text-lg">
                          Email: {teacher.email}
                        </h3>
                        <h3 className="font-bold text-lg">
                          Phone: {teacher.phone}
                        </h3>
                      </div>
                    </dialog>
                  )}

                  <button className="btn btn-xs bg-yellow-500 text-white hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="btn btn-xs bg-red-500 text-white hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageTeachers;
