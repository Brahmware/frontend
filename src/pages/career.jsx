import React from 'react';
import ScrollToTop from '../components/scroll-to-top';
import SEO from '../components/seo';
import {
    CareerBanner,
    CareerWorld,
    JobsContainer
} from '../containers/career';
import Layout from '../layouts';
import Footer from '../layouts/footer';
import Header from '../layouts/header';

const careerPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Brahmware - Career" />
                <div className="main-wrapper career-wrapper">
                    <Header />
                    <CareerBanner />
                    <CareerWorld />
                    <JobsContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    )
}

export default careerPage;