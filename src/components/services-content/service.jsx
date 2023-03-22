import { useState, useEffect, useRef } from 'react';
import IconComponent from '../../utils/IconComponent';
import TabComponent from '../services-tab';

const Service = (props) => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const handleScroll = ({ }) => {
        if (window.scrollY >= 0) {
            const header = document.querySelector(".header");
            setHeaderHeight(header.offsetHeight)
        }
    };

    return (
        <div
            className="service-type"
            id={props.sectionData.link}
            onMouseEnter={() => props.mouseEnterData(props.sectionData)}
            onTouchStart={() => props.touchStartData(props.sectionData)}
            ref={props.serviceTypeRef}
        >
            <div className="section-top"
                style={{ top: `${headerHeight}px` }}
            >
                <div className="title">
                    <IconComponent icon={props.sectionData.icon} />
                    <div className="text">
                        {props.sectionData.title}
                    </div>
                </div>
                <TabComponent
                    data={props.otherServices}
                    clickedOnTab={props.clickedOnTab}
                />
            </div>
            <div
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="300"
            >
                {props.sectionData.types.map((type, key) => {
                    return (
                        <div
                            className="each-type"
                            key={key}
                        >
                            <div className="type-title">
                                <h2
                                    className="title"
                                    dangerouslySetInnerHTML={{
                                        __html: type.title,
                                    }}
                                ></h2>
                            </div>
                            <div className={"type-description"}>
                                <p
                                    className="description"
                                    dangerouslySetInnerHTML={{
                                        __html: type.description
                                    }}
                                ></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service;