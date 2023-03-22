import React from 'react'
import BrahmNaut from '../../components/brahmnaut';

const CareerBanner = () => {
    return (
        <div className="section career-banner-section overflow-hidden">
            <div className="container career-heading-wrapper">
                <div className="row">
                    <div className="col">
                        <div
                            data-aos="fade-right"
                            data-aos-duration='1200'
                        >
                            <div
                                className="career-title"
                            >
                                Upgrade yourself <br />to a <span>Brahmnaut</span>
                            </div>

                        </div>
                        <div

                            data-aos="fade-right"
                            data-aos-duration='1200'
                            data-aos-delay='600'
                        >
                            <div
                                className="career-subtitle"
                            >
                                Join Brahm<span>ware</span>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div
                            className="graphics"
                            data-aos='fade-left'
                            data-aos-duration='1200'
                            data-aos-delay='1200'
                        >
                            <BrahmNaut />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerBanner;