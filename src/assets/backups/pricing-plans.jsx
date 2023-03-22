import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IconComponent from "../../utils/IconComponent";

const Pricing = ({ data }) => {
    return (
        <div className="single-pricing-box">
            <div className="pricing-iner">
                {data?.badgeType === "true" && (
                    <div className="popular">{data.badge}</div>
                )}
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
                                <li
                                    key={key}
                                    dangerouslySetInnerHTML={{ __html: single }}
                                ></li>
                            );
                        })}
                </ul>
                <Link
                    to={process.env.PUBLIC_URL + "/pricing"}
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
