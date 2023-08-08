import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand";
import HomeAbout from "../containers/home/about";
import PricingContainer from "../containers/home/home-pricing";
import IconBoxContainer from "../containers/home/icon-box";
import IntroContainer from "../containers/home/intro";
import OurBrahmandContainer from "../containers/home/our-brahmand";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Brahmware" />
                <div className="main-wrapper">
                    <Header />
                    <IntroContainer />
                    <BrandContainer />
                    <HomeAbout />
                    <OurBrahmandContainer />
                    <PricingContainer />
                    <IconBoxContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
