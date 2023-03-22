import PropTypes from "prop-types";
import ArrowLink from "../arrowlink";

const PageTitle = ({ title, subTitle, link }) => {
    return (
        <div className="page-banner-title" data-aos="fade-up">
            <h2 className="title">{title}</h2>
            <p className="project-subtitle">{subTitle}</p>
            <ArrowLink link={link} blank_target={true} text={`Visit ${title}'s Website`} withoutComponent />
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.array,
};

export default PageTitle;
