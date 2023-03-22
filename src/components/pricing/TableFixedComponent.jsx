import React from 'react'

const TableFixedComponent = (props) => {
    return (
        <ul
            className={`package-solution-names col-md-4 col-7 ${props.fixedclass}`}
        >
            <li className="package-label row"></li>
            {/* Business Solutions */}
            <li className="service-label service-names row">
                <div
                    className="title"
                    style={{ top: `${props.headerHeight}px` }}
                >
                    <div className="item-wrapper">Business Solutions</div>
                </div>
                <ul>
                    <li className="service row">
                        <div className="item-wrapper">
                            Business Analysis
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Requirement Analysis
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Business Process Modelling
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Customer Management
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">

                            Marketing & Sales
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Strategy & Consulting
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            eLearning
                        </div>
                    </li>
                </ul>
            </li>
            {/* Branding */}
            <li className="service-label service-names row">
                <div
                    className="title"
                    style={{ top: `${props.headerHeight}px` }}
                >
                    <div className="item-wrapper">Branding</div>
                </div>
                <ul>
                    <li className="service row">
                        <div className="item-wrapper">
                            Corporate Design
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Corporate Identity
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Digital Strategy
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Brand Strategy
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Communication Strategy
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Social Media
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Commercial Design
                        </div>
                    </li>
                </ul>
            </li>
            {/* Tech Solutions */}
            <li className="service-label service-names row">
                <div
                    className="title"
                    style={{ top: `${props.headerHeight}px` }}
                >
                    <div className="item-wrapper">Tech Solutions</div>
                </div>
                <ul>
                    <li className="service row">
                        <div className="item-wrapper">
                            Front and Back-End Development
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            API
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            UI & UX
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Responsive Web Design
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            App design and Development
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Microsites
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Prototyping
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            E-Commerce & Online Shops
                        </div>
                    </li>
                    <li className="service row">
                        <div className="item-wrapper">
                            Corporate Website
                        </div>
                    </li>
                </ul>
            </li>
            <li className="service-label service-names row">
                <div className="floor-price">
                    <div className="item-wrapper">
                        <span>Floor Pricing<astr>*</astr></span>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default TableFixedComponent