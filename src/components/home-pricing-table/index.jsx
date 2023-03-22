import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IconComponent from "../../utils/IconComponent";
import React from "react";

const Pricing = ({ data }) => {
    return (
        <div className="single-pricing-box noselect">
            <div className="pricing-inner">
                {
                    data?.badgeType === "true" && (
                        <div className="popular">{data.badge}</div>
                    )
                }
                <div className="icon-box">
                    <i className="pricing-icon"><IconComponent icon={data.icon} /></i>
                </div>
                <h4 className="title">{data.title}</h4>
                <div
                    className="price"
                    dangerouslySetInnerHTML={{ __html: data.price }}
                ></div>
                <ul className="price-list">
                    {data.pricingList &&
                        data.pricingList.map((single, key) => {
                            return (
                                <React.Fragment key={key}>
                                    <li
                                        dangerouslySetInnerHTML={{ __html: single }}
                                    />
                                    <div className="divider-line" />
                                </React.Fragment>
                            );
                        })}
                </ul>
                <Link
                    to={process.env.PUBLIC_URL + `/pricing#package_${data.title.replace(/ /g, "_")}`}
                    className="btn btn-outline-primary d-block"
                >
                    Show More
                </Link>
            </div>
        </div>
    );
};

Pricing.propTypes = {
    data: PropTypes.object,
};

export default Pricing;