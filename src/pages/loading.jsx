import React from 'react';
//import '../assets/css/loadingpage.css';
import { SeedOfLifeIcon } from '../assets/icons';

const LoadingPage = () => {
    return (
        <div className='loading-page'>
            <div className="loading-animation">
                <SeedOfLifeIcon />
            </div>
        </div>
    )
}

export default LoadingPage;