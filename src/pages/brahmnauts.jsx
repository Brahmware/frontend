import React from 'react'
import SEO from '../components/seo'
import { NotWebAdmin, WebAdmin } from '../containers/employee'
import Layout from '../layouts'
import { useHistory } from 'react-router-dom'

const Brahmnauts = () => {
    /* 
        *If an admin login to access the cms
        *If an Brahmnauts, go to Brahmware systems or access webmail
    */

    let history = useHistory();
    let searchPath = history.location && history.location.search;
    let query = new URLSearchParams(searchPath);
    let backlink = query.get('backlink');

    return (
        <React.Fragment>
            <Layout>
                <SEO title="Brahmnaut Station" />
                <div className="main-wrapper brahmnauts-wrapper">
                    <div className="container brahmnauts-container">
                        <div className="flex-column d-flex justify-content-center align-items-center">
                            <WebAdmin />
                            <NotWebAdmin backlink={backlink} />
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Brahmnauts