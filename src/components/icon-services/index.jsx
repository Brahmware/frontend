import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useHover from "../../hooks/use-hover";
import IconComponent from "../../utils/IconComponent";

const IconServices = ({ data }) => {
    const [hoverRef, isHovered] = useHover();
    return (
        <Link to={`/services#${data.link}`}
        >
            <div
                ref={hoverRef}
                className={`service-box ${isHovered ? "active" : " "}`}
            >

                <div className="box-part">

                    <i className="our-brahmand-icon"><IconComponent icon={data.icon} /></i>

                    <div className="title">
                        <h4>{data.title}</h4>
                    </div>

                    <div className="text">
                        <span>{data.excerpt}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

IconServices.propTypes = {
    data: PropTypes.object,
};

export default IconServices;
