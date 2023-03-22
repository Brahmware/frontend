import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useHover from "../../hooks/use-hover";
import IconComponent from "../../utils/IconComponent";

const IconBox = ({ data }) => {
    const [hoverRef, isHovered] = useHover();

    return (
        <div
            ref={hoverRef}
            className={`service-box ${isHovered ? "active" : ""}`}
        >
            <div className="title">{data.title}</div>
            <div className="excerpt"><span>{data.excerpt}</span></div>
            <div className="what-you-get"> <IconComponent icon={data.icon} /></div>
            <Link to={process.env.PUBLIC_URL + "/about"} className="more">More</Link>
        </div>
    );
};

IconBox.propTypes = {
    data: PropTypes.object,
};

export default IconBox;
