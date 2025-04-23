/** @format */

import aboutImg from "../../assets/images//about-img.png";

const About = () => {
  return (
    <section
      className="py-16 text-white about_section"
      id="#about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-[#00bbf0]">Us</span>
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              We Are Finexo
            </h3>
            <p className="text-white mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <p className="text-white mb-6">
              Molestiae odio earum non qui cumque provident voluptates,
              repellendus exercitationem, possimus at iste corrupti officiis
              unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab
              omnis quasi expedita.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 bg-[#00bbf0] text-white font-semibold rounded-full hover:bg-[#009ecc] transition">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
