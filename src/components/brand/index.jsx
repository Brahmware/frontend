import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <div className="image-box">
            <img
                className="client-image"
                src={process.env.PUBLIC_URL + data.image}
                alt="Brahmware-Brand-Logo"
            />
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
