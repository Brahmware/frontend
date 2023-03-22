import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ReactComponent as WorldMark } from "./world_mark.svg";
import { ReactComponent as SeedOfLife } from "./seed_of_life.svg";


const Logo = ({ }) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <div className="logo-elements">
                <i className="seed-of-life">
                    <SeedOfLife />
                </i>
                <i className="world-mark">
                    <WorldMark />
                </i>
            </div>
        </Link>
    );
};

Logo.propTypes = {
    image: PropTypes.string,
};

export default Logo;
