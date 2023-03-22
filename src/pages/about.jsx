import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutBannerContainer from "../containers/aboutus/AboutBannerContainer";
import AboutConclusion from "../containers/aboutus/AboutConclusion";
import AboutMissionVision from "../containers/aboutus/AboutMissionVision";
import AboutOurPrinciples from "../containers/aboutus/AboutOurPrinciples";
import AboutTeamMembers from "../containers/aboutus/AboutTeamMembers";
import AboutUsContainer from "../containers/aboutus/AboutUsContainer";
import BrandTwoContainer from "../containers/global/brand-two";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Brahmware - About Us" />
                <div className="main-wrapper">
                    <Header />
                    <AboutBannerContainer />
                    <BrandTwoContainer />
                    <AboutUsContainer />
                    <AboutOurPrinciples />
                    <AboutMissionVision />
                    <AboutTeamMembers />
                    <AboutConclusion />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
