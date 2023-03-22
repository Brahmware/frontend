import PropTypes from "prop-types";
import { obscureTitle } from "../../utils/obscure";
import { Link } from "react-router-dom";

const Testimonial = ({ data }) => {

    return (
        <Link
            className="single-testimonial noselect"
            to={`/project-detalis/${data.id}#testimonial`}
        >
            <div className="testimonial-author">
                <i className="testimonial-icon">
                    <img src={data.endorserImage} alt={data.name} />
                </i>
                <div className="name">
                    <div className="author-name"><span>{data.name}</span></div>
                    <div className="author-designation"><span>{data.designation}</span></div>
                </div>
            </div>
            <div className="testimonial-content">
                <p>{obscureTitle(data.quote, 140)}</p>
                <span className="view__more">More</span>
            </div>
        </Link>
    );
};

Testimonial.propTypes = {
    data: PropTypes.object,
};

export default Testimonial;
