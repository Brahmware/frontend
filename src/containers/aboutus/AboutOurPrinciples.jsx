import React from 'react';
import { ourprinciples } from '../../data/about-us.json';
import IconComponent from '../../utils/IconComponent';


const AboutOurPrinciples = () => {

    return (
        <div className="section our-principles-section bg-dark">
            <div className="container our-principles-container">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay='0'
                    className="title"
                >
                    Our Principles
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay='300'
                    className="tagline"
                >
                    {ourprinciples.title}
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay='600'
                    className="principles row row-cols-lg-4 row-cols-sm-2 row-cols-1 gx-2 gy-2"
                >
                    {
                        ourprinciples.principles_list && ourprinciples.principles_list.map((eachPrinciple, key) => {
                            return (
                                <div className="col" key={key}>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-delay={`${600 + key * 300}`}
                                        className="principle noselect"
                                    >
                                        <div className="icon"><IconComponent icon={eachPrinciple.icon} /></div>
                                        <div className="name">
                                            <span>{eachPrinciple.name}</span>
                                        </div>
                                        <div className="content">{eachPrinciple.content}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutOurPrinciples