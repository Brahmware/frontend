import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import Layout from "../layouts";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Brahmware - Contact Us" />
                <div className="main-wrapper contact-main-wrapper">
                    <Header />
                    <ContactContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
