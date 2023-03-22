import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { obscureTitle } from "../../utils/obscure";

const Work = ({ data }) => {
    const cate = data.service.map((value, idx) => {
        return (
            <span className="d-inline" key={idx}>
                {value}
                {idx !== data.service.length - 1 && ", "}
            </span>
        );
    });
    return (
        <div className="single-project-slide">
            <div className="thumb">
                <Link
                    to={process.env.PUBLIC_URL + `/project-detalis/${data.id}`}
                    className="image"
                >
                    <img
                        className="fit-image"
                        src={process.env.PUBLIC_URL + data.media.thumb}
                        alt="Product"
                    />
                </Link>
            </div>

            <div className="content">
                <h4 className="subtitle">{cate}</h4>
                <h3 className="title">
                    <Link to={process.env.PUBLIC_URL + `/project-detalis/${data.id}`}>
                        {data.title?.length < 27
                            ? data.title
                            : obscureTitle(data.title, 27)
                        }
                    </Link>
                </h3>
            </div>
        </div>
    );
};

Work.propTypes = {
    data: PropTypes.object,
};

export default Work;
