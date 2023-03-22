import React from 'react'
import SEO from '../components/seo'
import PrivacyContainer from '../containers/privacy/PrivacyContainer'
import Layout from '../layouts'
import Footer from '../layouts/footer'
import Header from '../layouts/header'

const privacyPolicy = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title={"Brahmware - Privacy Policy"} />
                <div className="main-wrapper">
                    <Header />
                    <PrivacyContainer />
                    <Footer />
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default privacyPolicy