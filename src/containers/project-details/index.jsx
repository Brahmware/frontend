import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import { FacebookIcon, LinkedinIcon, QuoteIcon, TwitterIcon } from "../../assets/icons";
import { useCallback } from "react";

const ProjectDetailsContainer = ({ data }) => {

    const history = useHistory();

    const testimonialRef = useCallback((node) => {
        if (node !== null && (history.location?.hash).includes('testimonial')) {
            node.scrollIntoView()
        }
    }, [history.location?.hash]);

    return (
        <div className="section project-details-section">
            <div className="custom-container container-fluid">
                <div
                    className="details-images"
                    data-aos="fade-up"
                    data-aos-duration="900"
                >
                    <img
                        loading="lazy"
                        src={data.media.image}
                        alt="Project Details"
                    />
                </div>
            </div>

            <div className="container">
                <div
                    className="details-challenge section-padding-02 mt-n1"
                    data-aos="fade-up"
                    data-aos-duration="900"
                >
                    <h5 className="details-label">{data.cate}</h5>

                    <h1 className="title">Project Summary</h1>
                </div>

                <div className="details-info section-padding mt-n10">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3 single-info">
                            <h5 className="details-label" style={{ paddingBottom: '0.4em' }}>Challenges</h5>
                            {
                                data?.challenge?.map((challengeType, key) => {
                                    return (<p key={key} style={{ lineHeight: '1.125em' }}>{challengeType}</p>)
                                })
                            }
                        </div>
                        <div className="col-lg-3 single-info">
                            <h5 className="details-label" >Date</h5>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: data.date,
                                }}
                            />
                        </div>
                        <div className="col-lg-3 single-info">
                            <h5 className="details-label" style={{ paddingBottom: '0.4em' }}>Team</h5>
                            {
                                data?.team?.map((teamType, key) => {
                                    return (<p key={key} style={{ lineHeight: '1.125em' }}>{teamType}</p>)
                                })
                            }
                        </div>
                        <div className="col-lg-3 single-info">
                            <h5 className="details-label" style={{ paddingBottom: '0.4em' }}>Services Used</h5>
                            {
                                data?.service?.map((serviceType, key) => {
                                    return (<p key={key} style={{ lineHeight: '1.125em' }}>{serviceType}</p>)
                                })
                            }
                        </div>
                    </div>
                </div>

                <div
                    className="details-middle-content section-padding-02 mt-n2"
                    data-aos="fade-up"
                >
                    <h2 className="title">{data.subTitle}</h2>
                    {data.body.map((value, i) => {
                        return (
                            <div
                                key={i}
                                className="desc"
                                dangerouslySetInnerHTML={{
                                    __html: value,
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="custom-container container-fluid">
                <div className="column-images">
                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <div
                                className="details-images mt-6 wow fadeInLeft"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                <img
                                    loading="lazy"
                                    src={data.gallery.imageOne}
                                    alt="Project Details"
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-duration="900"
                        >
                            <div
                                className="details-images mt-6 wow fadeInRight"
                                data-wow-delay="0.3s"
                                data-wow-duration="1.5s"
                            >
                                <img
                                    loading="lazy"
                                    src={data.gallery.imageTwo}
                                    alt="Project Details"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="container mt-10 d-flex flex-column"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <div className="quote d-flex justify-start gap-6 section-padding-02">
                    <QuoteIcon className="quotation" />
                    <div className="d-flex flex-column gap-10" ref={testimonialRef}>
                        <div className="blockquote">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: data.quote,
                                }}
                            />
                        </div>

                        <div className="author-info d-flex justify-start align-items-center gap-6">
                            <img
                                className="author__image"
                                loading="lazy"
                                src={data.endorserImage}
                                alt="Project Details"
                            />
                            <div className="author__details">
                                <h4 className="name">{data.name}</h4>
                                <p>{data.designation}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="details-images mt-10">
                    <img
                        loading="lazy"
                        src={data.gallery.imageThree}
                        alt="Project Details"
                    />
                </div>

                <div className="details-social" data-aos="fade-up">
                    <h5 className="details-label">Share on social</h5>
                    <ul className="social">
                        <li>
                            <NavLink to={{ pathname: "https://twitter.com/" }} target="_blank">
                                <i className="social-icon"><TwitterIcon /></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{ pathname: "https://linkedin.com/" }} target="_blank">
                                <i className="social-icon"><LinkedinIcon /></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={{ pathname: "https://facebook.com/" }} target="_blank">
                                <i className="social-icon"><FacebookIcon /></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

ProjectDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default ProjectDetailsContainer;
