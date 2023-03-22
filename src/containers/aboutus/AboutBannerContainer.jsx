import React from "react";
import { AboutUsImage, FacebookIcon, LinkedinIcon, TwitterIcon } from "../../assets/icons";
import ArrowLink from "../../components/arrowlink";
import SocialIcon from "../../components/social-icon";
import { tagline } from "../../data/about-us.json";

const AboutBannerContainer = () => {
    return (
        <div className="section about-banner-section">
            <div className="container">
                <div className="about-banner">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay='0'
                        className="tagline"
                        dangerouslySetInnerHTML={{
                            __html: tagline
                        }}
                    />
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay='300'
                        className="banner-image"
                    >
                        <AboutUsImage />
                    </div>
                </div>
                <div
                    className="services-socials-component"
                >
                    <div className="our-services">
                        <div className="title">
                            <span>OUR SERVICES</span>
                        </div>
                        <div className="services">
                            <ArrowLink text={"Business Solutions"} link={"/services#business_solutions"} />
                            <ArrowLink text={"Branding"} link={"/services#branding"} />
                            <ArrowLink text={"Tech Solutions"} link={"/services#tech_solutions"} />
                        </div>
                    </div>
                    <div className="our-socials">
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
            </div>
        </div>
    );
};

export default AboutBannerContainer;
