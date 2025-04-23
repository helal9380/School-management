/** @format */

import teacherImg1 from "../../assets/images//team-1.jpg";
import teacherImg2 from "../../assets/images//team-2.jpg";
import teacherImg3 from "../../assets/images//team-3.jpg";
import teacherImg4 from "../../assets/images//team-4.jpg";

const teamMembers = [
  {
    name: "Joseph Brown",
    position: "Marketing Head",
    image: teacherImg1,
  },
  {
    name: "Nancy White",
    position: "Marketing Head",
    image: teacherImg2,
  },
  {
    name: "Earl Martinez",
    position: "Marketing Head",
    image: teacherImg3,
  },
  {
    name: "Josephine Allard",
    position: "Marketing Head",
    image: teacherImg4,
  },
];

const Teachers = () => {
  return (
    <section className="team_section py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#00bbf0]">Teachers</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-box rounded-xl shadow-md text-center p-6">
              <div className="mb-4 img-box-img">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
              </div>
              <h5 className="text-xl font-semibold mb-1">{member.name}</h5>
              <p className="text-gray-500 text-sm mb-4">{member.position}</p>
              <div className="flex justify-center space-x-3 text-blue-500 text-lg">
                <a
                  href="#"
                  className="hover:text-blue-700">
                  <i
                    className="fa fa-facebook"
                    aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400">
                  <i
                    className="fa fa-twitter"
                    aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600">
                  <i
                    className="fa fa-linkedin"
                    aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-pink-500">
                  <i
                    className="fa fa-instagram"
                    aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-red-600">
                  <i
                    className="fa fa-youtube-play"
                    aria-hidden="true"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
