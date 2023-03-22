import React from "react";
import { FacebookIcon, LinkedinIcon, OnlineIcon, TwitterIcon } from "../../assets/icons";
import ContactForm from "../../components/contact-form";
import ContactOffice from "../../components/contact-offices";
import MapComponent from "../../components/map";
import LocationData from "../../data/available-location.json";

const ContactContainer = () => {
    return (
        <div className="container">
            <div className="contact-section">
                <div className="contactus row">
                    <div className="col-md-6">
                        <div className="map noselect">
                            <div
                                className="title"
                                data-aos='fade-right'
                                data-aos-duration='1200'
                            >
                                We are <span>Here</span>
                            </div>
                            <div
                                data-aos='zoom-in'
                                data-aos-duration='1200'
                                data-aos-delay='300'
                            >
                                <MapComponent locations={LocationData} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-form-wrapper">
                            <div
                                className="contact-info"
                                data-aos='fade-left'
                                data-aos-duration='1200'
                            >
                                <div className="section-heading">
                                    <div className="title noselect">
                                        Contact <span>Us</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="contact-form"
                                data-aos='fade-left'
                                data-aos-duration='1200'
                                data-aos-delay='300'
                            >
                                <div className="description noselect">
                                    <span>
                                        Thank you for your interest.
                                        Please fill out the form below to inquire about our work in Digital.
                                    </span>
                                </div>
                                <div className="note noselect">
                                    <span>
                                        Required fields are marked with an asterisk (*).
                                    </span>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="office-addresses row">
                    {
                        LocationData.map((office, officeKey) => {
                            return (
                                <React.Fragment key={officeKey}>
                                    <ContactOffice
                                        index={officeKey}
                                        office={office}
                                    />
                                </React.Fragment>
                            )
                        })
                    }
                    <div
                        className="office"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay={`${600 + (LocationData.length * 300)}`}
                    >
                        <div className="icon-side">
                            <OnlineIcon />
                        </div>
                        <div
                            className="information-side"
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            data-aos-delay={`${1200 + (600 + (LocationData.length * 300))}`}
                        >
                            <div className="title">
                                @ <span>Online</span>
                            </div>
                            <div className="email">
                                <a href="mailto:hello@brahmware.com">
                                    hello@brahm<span>ware</span>.com
                                </a>
                            </div>
                            <div
                                className="social-icons"
                            >
                                <a
                                    className="facebook"
                                    href="https://twitter.com/brahmware"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <TwitterIcon />
                                </a>
                                <a
                                    className="facebook"
                                    href="https://www.linkedin.com/company/brahmware"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedinIcon />
                                </a>
                                <a
                                    className="facebook"
                                    href="https://www.facebook.com/brahmware"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FacebookIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
