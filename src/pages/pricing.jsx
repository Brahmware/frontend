import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PricingBannerContainer from "../containers/pricing/pricing-banner";
import PricingContainer from "../containers/pricing/pricing-plan";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const PricingPage = () => {

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Brahmware Pricing" />
                <div className="main-wrapper">
                    <Header />
                    <PricingBannerContainer />
                    <PricingContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default PricingPage;
