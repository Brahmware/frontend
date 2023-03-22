import React from "react";
import SectionTitle from "../../../components/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import projects from "../../../data/projects.json";
import Testimonial from "../../../components/testimonial";
import { LeftarrowIcon, RightarrowIcon } from "../../../assets/icons";

SwiperCore.use([Navigation]);
const TestimonialContainer = () => {
    const swiperOption = {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: ".testimonial-carousel .swiper-button-next",
            prevEl: ".testimonial-carousel .swiper-button-prev",
        },
    };
    return (
        <div className="section testimonial-section">
            <div className="container">
                <div className="testimonial-wrapper">
                    <SectionTitle
                        classOption="section-title"
                        title="Testimonial"
                    />
                    <div
                        className="testimonial-carousel"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-once="false"
                    >
                        <Swiper {...swiperOption}>
                            {projects &&
                                projects.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Testimonial
                                                key={i}
                                                data={single}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                        <div className="swiper-button-next">
                            <i className="right-arrow-icon"><RightarrowIcon /></i>
                        </div>
                        <div className="swiper-button-prev">
                            <i className="left-arrow-icon"><LeftarrowIcon /></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialContainer;
