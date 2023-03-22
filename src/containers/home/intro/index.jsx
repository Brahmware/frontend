import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import HomeData from "../../../data/home.json";
import Intro from "../../../components/intro";
import SocialIcon from "../../../components/social-icon";
import {
    FacebookIcon,
    LeftarrowIcon,
    LinkedinIcon,
    RightarrowIcon,
    TwitterIcon
} from "../../../assets/icons";

SwiperCore.use([Navigation, Autoplay]);
const IntroContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 800,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 10000
        },
        navigation: {
            nextEl: ".slider-active .swiper-button-next",
            prevEl: ".slider-active .swiper-button-prev",
        },
    };
    return (
        <div className="section slider-section">
            <Swiper effect="fade" className="slider-active" {...swiperOption}>
                {HomeData[0].slider &&
                    HomeData[0].slider.map((single, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <Intro key={key} data={single} />
                            </SwiperSlide>
                        );
                    })}
                <div className="swiper-button-next">
                    <i className="right-arrow-icon"><RightarrowIcon /></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="left-arrow-icon"><LeftarrowIcon /></i>
                </div>
            </Swiper>

            <div className="container">
                <ul className="social">
                    <li>
                        <SocialIcon
                            path="https://twitter.com/brahmware"
                            icon={<TwitterIcon />}
                        />
                    </li>
                    <li>
                        <SocialIcon
                            path="https://www.linkedin.com/company/brahmware"
                            icon={<LinkedinIcon />}
                        />
                    </li>
                    <li>
                        <SocialIcon
                            path="https://www.facebook.com/brahmware"
                            icon={<FacebookIcon />}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default IntroContainer;
