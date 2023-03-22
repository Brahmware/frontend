import React from "react";
import { Link } from "react-router-dom";
import { BusinessSolutionsAnimated, BrandingAnimated, TechSolutionsAnimated } from "../../../components/animated-icons";
import ArrowLink from "../../../components/arrowlink";
import SectionTitle from "../../../components/section-title";
import useHover from "../../../hooks/use-hover";

const OurBrahmandContainer = () => {

    const [hoverRefBusinessSolutions, isHoveredBusinessSolutions] = useHover();
    const [hoverRefBranding, isHoveredBranding] = useHover();
    const [hoverRefTechSolutions, isHoveredTechSolutions] = useHover();

    return (
        <div className="section">
            <div className="container">
                <div className="our-brahmand-section">
                    <SectionTitle title="Our Brahmand" />

                    <div
                        className="our-brahmand-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-once="false"
                    >
                        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gx-3 gy-3">
                            <Link to="/services#business_solutions">
                                <div
                                    ref={hoverRefBusinessSolutions}
                                    className={`service-box ${isHoveredBusinessSolutions ? "active" : " "}`}
                                >
                                    <div className="box-part">
                                        <i className="our-brahmand-icon">
                                            <BusinessSolutionsAnimated />
                                        </i>
                                        <div className="title">
                                            <h4>Business Solutions</h4>
                                        </div>

                                        <div className="text">
                                            <span>Every business solution we provide has been designed as per the client’s requirements and after a lot of research in understanding how it can help each business in achieving its goals. Our solutions assure profitable business outcomes.</span>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            <Link to="/services#branding">
                                <div
                                    ref={hoverRefBranding}
                                    className={`service-box ${isHoveredBranding ? "active" : " "}`}
                                >
                                    <div className="box-part">
                                        <i className="our-brahmand-icon">
                                            <BrandingAnimated />
                                        </i>
                                        <div className="title">
                                            <h4>Branding</h4>
                                        </div>

                                        <div className="text">
                                            <span>Effective branding helps to create a memorable impression and also helps to build trust with the audience. Our creative, skilled, strategic brand architects know how to exactly convert your target audience into loyal customers that in turn helps in improving recognition.</span>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            <Link to="/services#tech_solutions">
                                <div
                                    ref={hoverRefTechSolutions}
                                    className={`service-box ${isHoveredTechSolutions ? "active" : " "}`}
                                >
                                    <div className="box-part">
                                        <i className="our-brahmand-icon">
                                            <TechSolutionsAnimated />
                                        </i>
                                        <div className="title">
                                            <h4>Tech Solutions</h4>
                                        </div>

                                        <div className="text">
                                            <span>By choosing Brhamware’s tech solutions you opt for a smart business as you will encounter increased productivity, reliability, and a world-class experience for your audience. Our domain experts will ensure that your brand makes a significant impact on every visitor.</span>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            {/* {ServiceData.services &&
                                ServiceData.services.map((single, key) => {
                                    return (
                                        <div key={key} className="col">
                                            <IconServices key={key} data={single} />
                                        </div>
                                    );
                                })
                            } */}
                        </div>
                        <div className="cta-our-brahmand">
                            <h4 className="text">
                                Now that you know us, let's plan your next Business <ArrowLink text={'Move'} link={"/contact"} />
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBrahmandContainer;
