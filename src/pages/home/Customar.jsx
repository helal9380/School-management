/** @format */

import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";

const testimonials = [
  {
    name: "LusDen",
    subtitle: "magna aliqua. Ut",
    image: client1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Zen Court",
    subtitle: "magna aliqua. Ut",
    image: client2,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Customar = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800">
            What says our <span className="text-[#00bbf0]">Guirdient</span>
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper">
          {testimonials.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg px-6 rounded  py-2 my-8 max-w-md mx-auto hover:shadow-xl transition duration-300">
                {/* Client Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-blue-500 shadow-md"
                  />
                </div>

                {/* Details */}
                <div className="text-center">
                  <h6 className="text-xl font-semibold text-gray-800">
                    {client.name}
                  </h6>
                  <p className="text-sm text-blue-500 mb-2">
                    {client.subtitle}
                  </p>

                  <div className="text-blue-400 text-xl mb-4">
                    <i
                      className="fa fa-quote-left"
                      aria-hidden="true"></i>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    “{client.quote}”
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Autoplay Progress (optional) */}
          <div
            className="autoplay-progress hidden"
            slot="container-end">
            <svg
              viewBox="0 0 48 48"
              ref={progressCircle}>
              <circle
                cx="24"
                cy="24"
                r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Customar;
