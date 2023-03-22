import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Intro = ({ data }) => {
    return (
        <div
            className="single-slider d-flex align-items-center animation-style-01"
        /* style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage
                })`,
        }} */
        >
            <div className="slide-background">
                <video autoPlay loop muted>
                    <source src={data.backgroundImage} />
                </video>
            </div>
            <div className="container">
                <div className="slider-content">
                    <h4 className="sub-title">{data.subTitle}</h4>
                    <h1
                        className="main-title"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    ></h1>
                    <p dangerouslySetInnerHTML={{ __html: data.desc }}></p>
                    <Link
                        className="slider-btn"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        <span>
                            Work With Us
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
