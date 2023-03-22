import React, { useState } from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import classnames from "classnames";
import SectionTitle from "../../../components/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Work from "../../../components/work";
import WorkData from "../../../data/projects.json";
import { LeftarrowIcon, RightarrowIcon } from "../../../assets/icons";

SwiperCore.use([Navigation]);
const WorkContainer = () => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 1,
        slidesPerView: 4,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".tab-carousel .swiper-button-next",
            prevEl: ".tab-carousel .swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            576: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
            },
        },
    };
    return (
        <div className="section bg-dark work-section">
            <div className="container">
                <div className="row">
                    <div className="row align-items-end">
                        <div className="col-xl-3 col-lg-4">
                            <SectionTitle title="Works" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="work-tab-content">
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Swiper className="tab-carousel" {...swiperOption}>
                            {WorkData &&
                                WorkData.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Work key={i} data={single} />
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
                    </TabPane>
                    <TabPane tabId="2">
                        <Swiper className="tab-carousel" {...swiperOption}>
                            {WorkData &&
                                WorkData.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Work key={i} data={single} />
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
                    </TabPane>
                    <TabPane tabId="3">
                        <Swiper className="tab-carousel" {...swiperOption}>
                            {WorkData &&
                                WorkData.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Work key={i} data={single} />
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
                    </TabPane>
                    <TabPane tabId="4">
                        <Swiper className="tab-carousel" {...swiperOption}>
                            {WorkData &&
                                WorkData.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Work key={i} data={single} />
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
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
};

export default WorkContainer;
