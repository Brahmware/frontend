import { Swiper, SwiperSlide } from "swiper/react";
import Brand from "../../../components/brand";
import ClientsData from "../../../data/clients.json";

const BrandContainer = () => {
    const swiperOption = {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        spaceBetween: 40,
        autoplay: false,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    };
    return (
        <div className="section overflow-hidden bg-dark">
            <div className="client-section">
                <div className="container">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay='0'
                        className="section-title"
                    >
                        <h2 className="title">Our Clients</h2>
                    </div>
                    <div
                        className="client-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <Swiper className="client-active" {...swiperOption}>
                            {ClientsData.brand &&
                                ClientsData.brand.map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Brand key={key} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandContainer;
