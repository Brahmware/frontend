import React from 'react';
import { conclusion } from '../../data/about-us.json';

const AboutConclusion = () => {
    return (
        <div className='section conclusion-section'>
            <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay='0'
                className="container conclusion-content"
            >
                <div className='conclusion'><span>{conclusion}</span></div>
            </div>
        </div>
    )
}

export default AboutConclusion