/** @format */

import React from "react";

const ChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-[#00bbf0]">Us</span>
          </h2>
        </div>

        {/* Boxes */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Box 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
            <img
              src="images/w1.png"
              alt="Expert Management"
              className="w-16 h-16"
            />
            <div>
              <h5 className="text-xl font-semibold mb-2">Expert Management</h5>
              <p className="text-gray-600 text-sm">
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
            <img
              src="images/w2.png"
              alt="Secure Investment"
              className="w-16 h-16"
            />
            <div>
              <h5 className="text-xl font-semibold mb-2">Secure Investment</h5>
              <p className="text-gray-600 text-sm">
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
            <img
              src="images/w3.png"
              alt="Instant Trading"
              className="w-16 h-16"
            />
            <div>
              <h5 className="text-xl font-semibold mb-2">Instant Trading</h5>
              <p className="text-gray-600 text-sm">
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
            <img
              src="images/w4.png"
              alt="Happy Customers"
              className="w-16 h-16"
            />
            <div>
              <h5 className="text-xl font-semibold mb-2">Happy Customers</h5>
              <p className="text-gray-600 text-sm">
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus.
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-[#00bbf0] text-white font-semibold rounded-full hover:bg-[#009ecc] transition">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
