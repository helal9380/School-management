/** @format */

import React from "react";
import heroImg from "../../assets/slider-img.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";
import "./slide.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slide.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper ">
        <SwiperSlide>
          <section className="slider_section ">
            <div
              id="customCarousel1"
              className="carousel slide"
              data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container ">
                    <div className="row md:flex justify-between items-center px-20">
                      <div className="detail-box text-start md:w-1/2">
                        <h1>
                          Crypto <br /> Currency
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium,
                          laborum eaque magnam fugiat hic? Esse dicta aliquid
                          error repudiandae earum suscipit fugiat molestias,
                          veniam, vel architecto veritatis delectus repellat
                          modi impedit sequi.
                        </p>
                        <div className="btn-box">
                          <a
                            href=""
                            className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="img-box">
                          <img
                            src={heroImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
