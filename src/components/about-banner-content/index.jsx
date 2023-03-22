import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import SectionTitle from "../section-title";

const AboutBannerContent = ({ data }) => {
    return (
        <div className="about-banner-content">
            <h1
                className="banner-title"
                data-aos="fade-up"
                dangerouslySetInnerHTML={{
                    __html: data.title,
                }}
            ></h1>
            <div
                className="banner-service"
                data-aos="fade-up"
                data-aos-duration="900"
            >
                <SectionTitle classOption="section-title-2" title="Service" />
                <h4 className="service-text">
                    <span>
                        Business Solutions, Branding, Tech Solutions
                    </span>
                </h4>
            </div>
        </div>
    );
};

AboutBannerContent.propTypes = {
    data: PropsTypes.object,
};

export default AboutBannerContent;
