import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/black_headphones.png";
import img2 from "../../../assets/blue_headphones.png"
import img3 from "../../../assets/pink_headphones.png" 
import "./Banner.css"
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";

const Banner = () => {
  const slides = [
    {
      img: img1,
      title: "Micropack MHP Headphone black",
      description: "Get the best discounts on top brands. Shop now!",
    },
    {
      img: img2,
      title: "New Arrivals",
      description: "Explore the latest fashion trends with our new collection.",
    },
    {
      img: img3,
      title: "Best Sellers",
      description: "Shop the most popular products loved by our customers.",
    },
  ];

  return (
    <div className="banner_main">
      <div className="banner py-4 Banner">
        <div className="container ">
          <Swiper
            modules={[Autoplay, Scrollbar]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            scrollbar={{ hide: true }}
            loop={true}
            className="swiper-container"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="row align-items-center">
                  {/* Alternate Image & Text Position */}
                  {index % 2 !== 0 ? (
                    <>
                      <div className="col-md-6 d-flex justify-content-center">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="img-fluid rounded banner-img"
                        />
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <h6 className="main_label pb-3"><i className="fa-solid fa-star"></i>Top Products of the Month</h6>
                        <h2 className="fw-bold">{slide.title}</h2>
                        <p className="py-3">{slide.description}</p>
                        <div className="banner_btns">
                          <button className="main_btn">Shop Now</button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-12 col-lg-6">
                        <h6 className="main_label pb-3"><i className="fa-solid fa-star"></i>Top Products of the Month</h6>
                        <h2 className="fw-bold">{slide.title}</h2>
                        <p className="py-3">{slide.description}</p>
                        <div className="banner_btns">
                          <button className="ms-1 main_btn">Shop Now</button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-center">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="img-fluid rounded banner-img"
                        />
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner
