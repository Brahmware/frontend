import React from 'react';
import JobPosting from '../../components/job-posting';
import JobData from '../../data/jobs.json';

const JobsContainer = () => {
    return (
        <div className="container jobs-container">
            <div
                data-aos="fade-up"
                data-aos-duration='1200'
            >
                <div className="title">
                    Open <span>Positions</span>
                </div>
            </div>

            {
                JobData.map((job, key) => {
                    return (
                        <JobPosting
                            key={key}
                            data={job}
                        />
                    )
                })
            }
        </div>
    )
}

export default JobsContainer