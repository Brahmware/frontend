import React from 'react';
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
/* import Content from '../components/services-content'; */
import ServicesContainer from '../containers/services';
import Layout from '../layouts';
import Footer from '../layouts/footer';
import Header from '../layouts/header';

const OurServices = () => {

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Brahmware - Services" />
                <div className="main-wrapper">
                    <Header />
                    <ServicesContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    )
}

export default OurServices;