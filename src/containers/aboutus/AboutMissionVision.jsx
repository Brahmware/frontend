import React, { useState } from 'react';
import { AboutUsGearImage } from '../../assets/icons';
import { missioin_vision } from "../../data/about-us.json";
import useHover from '../../hooks/use-hover';

const AboutMissionVision = () => {

    const [hoverRefMission, isHoverOnMission] = useHover();
    const [hoverRefVision, isHoverOnVision] = useHover();

    return (
        <div className='section mission-vision-section'>
            <div className="container mission-vision-container">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay='0'
                    className="title"
                >
                    <span>Our Mission and Vision</span>
                </div>
                <div className="content-section noselect">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay='600'
                        className="mission"
                    >
                        <div className={isHoverOnMission || isHoverOnVision ? "gear-image deactivate-animation" : "gear-image"}>
                            <AboutUsGearImage />
                        </div>
                        <div
                            data-aos="fade-in"
                            data-aos-duration="1200"
                            data-aos-delay='1800'
                            className="content-inside"
                            ref={hoverRefMission}
                        >
                            <div className="title">
                                <span>Mission</span>
                            </div>
                            <div className="divider" />
                            <div className="content">
                                <span>{missioin_vision.mission.content}</span>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay='900'
                        className="vision"
                    >
                        <div className={isHoverOnMission || isHoverOnVision ? "gear-image deactivate-animation" : "gear-image"}>
                            <AboutUsGearImage />
                        </div>
                        <div
                            data-aos="fade-in"
                            data-aos-duration="1200"
                            data-aos-delay='2100'
                            className="content-inside"
                            ref={hoverRefVision}
                        >
                            <div className="title">
                                <span>Vision</span>
                            </div>
                            <div className="divider" />
                            <div className="content">
                                <span>{missioin_vision.vision.content}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMissionVision