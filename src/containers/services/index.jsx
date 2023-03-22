import Content from '../../components/services-content';
import ServiceData from '../../data/services.json';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Service from '../../components/services-content/service';
import TabComponent from '../../components/services-tab';

const ServicesContainer = () => {

    const [backgroundVideo, setBackgroundVideo] = useState(ServiceData.services[0]);
    const mouseEnterData = (mouseEntered) => {
        setBackgroundVideo(mouseEntered);
    }
    const touchStartData = (touchStarted) => {
        setBackgroundVideo(touchStarted)
    }

    const serviceTypeRefs = useRef([]);
    const [placeToScroll, setPlaceToScroll] = useState(null);
    const location = useLocation();

    const clickedOnTab = (event) => {
        event.preventDefault();
        let clickedTab = event.target.id.split(/_(.*)/s);
        setPlaceToScroll(clickedTab[1]);
    }


    useEffect(() => {
        serviceTypeRefs.current.map((serviceTypeRef) => (
            `#${serviceTypeRef.id}` === location.hash || serviceTypeRef.id === placeToScroll) &&
            serviceTypeRef.scrollIntoView(
                {
                    behavior: "smooth"
                }
            )
        )
        setPlaceToScroll(null);
    }, [location.hash, placeToScroll])

    /* const scrollToRef = (scrollPosition) => {
        window.scrollTo(
            {
                top: scrollPosition,
                left: 0,
                behavior: 'smooth'
            });
    } */


    return (
        <div className='services section'>
            <Content data={backgroundVideo} />

            <div className="page-banner-title">
                <div className="container">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1200"
                    >
                        <h5 className="services-subtitle sub-title">Let's take your business to the Next Level</h5>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className='head-section'>
                            <h2 className="services-title title">Our <span>Services</span></h2>
                            <TabComponent
                                data={ServiceData.services}
                                clickedOnTab={clickedOnTab}
                            />
                        </div>
                    </div>
                    <div className="details-section">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="600"
                        >
                            <p>
                                We help you in becoming the best narrator for your audience.
                                With our Brahmastras, your brand will hit the Target.
                                With our perfect strategic insights and the spectrum of services we offer,
                                your business will get what it exactly needs.
                                Whether you are an Enterprise or a promising start-up
                                our services will not only add value to your brand but will make sure that your business stands out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-section mt-10 mb-10">
                <div className="container">

                    {
                        ServiceData.services.map((service, key) => {
                            let restOftheServices = [...ServiceData.services];
                            restOftheServices.splice(key, 1);
                            return (
                                <Service
                                    key={key}
                                    sectionData={service}
                                    mouseEnterData={mouseEnterData}
                                    touchStartData={touchStartData}
                                    otherServices={restOftheServices}
                                    serviceTypeRef={element => serviceTypeRefs.current[key] = element}
                                    clickedOnTab={clickedOnTab}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesContainer