import React from "react";
import PropTypes from "prop-types";
import PageTitle from "../../../components/page-title";

const PageTitleContainer = ({ title, subTitle, link }) => {
    return (
        <div className="section">
            <div className="container">
                <PageTitle title={title} subTitle={subTitle} link={link} />
            </div>
        </div>
    );
};

PageTitleContainer.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.array,
};

export default PageTitleContainer;
