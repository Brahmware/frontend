import React, { useEffect, useRef, useState } from 'react';
import { TopArrowIcon } from '../../assets/icons';
import ArrowLink from '../arrowlink';

const JobPosting = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [detailsHeight, setDetailsHeight] = useState(0);
    const handleOpening = () => {
        setIsOpen((prev) => !prev);
    };
    const refDetails = useRef(null);

    useEffect(() => {
        if (isOpen) setDetailsHeight(refDetails.current.getBoundingClientRect().height);
        else setDetailsHeight(0);
    }, [isOpen, refDetails])

    return (
        <div
            data-aos='fade-up'
            data-aos-duration='1200'
            style={{ width: "100%" }}>
            <div className={isOpen ? "job open" : "job"}>
                <div className="job-heading row">
                    <div className="col">
                        <div className="title">
                            <div className="job-title">
                                {props.data.jobtitle}
                            </div>
                        </div>
                        <div className="subtitle">
                            <div className="job-id">
                                <span>Job ID:</span> {props.data.jobid}
                            </div>
                            <div className="job-type">
                                <span>Job Type:</span> {props.data.jobtype}
                            </div>
                            <div className="job-location">
                                <span>Job Location:</span> {props.data.joblocation}
                            </div>
                        </div>
                    </div>
                    <div
                        className={isOpen ? "expand-button col-sm-1 up" : "expand-button col-sm-1"}
                        onClick={handleOpening}
                    >
                        <TopArrowIcon />
                    </div>
                </div>
                <div className="details-section"
                    style={{ height: `${detailsHeight}px` }}
                >
                    <div
                        ref={refDetails}
                        className="job-details"
                    >
                        <div className="description">
                            {props.data.jobdetails.description}
                        </div>
                        <ul className="responsibilities">
                            <span>Responsibilities:</span>
                            {
                                props.data.jobdetails.responsibilities.map((responsibility, key) => {
                                    return (
                                        <li
                                            key={key}
                                            className="responsibility"
                                        >
                                            {responsibility}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="requirements">
                            <span>Requirements:</span>
                            {
                                props.data.jobdetails.requirements.map((requirement, key) => {
                                    return (
                                        <li
                                            key={key}
                                            className="requirement"
                                        >
                                            {requirement}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="benifits">
                            <span>Benifits:</span>
                            {
                                props.data.jobdetails.benifits.map((benifit, key) => {
                                    return (
                                        <li
                                            key={key}
                                            className="benifit"
                                        >
                                            {benifit}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="experience">
                            <span>Experience:</span>
                            {
                                props.data.jobdetails.experience.map((eachElement, key) => {
                                    return (
                                        <li
                                            key={key}
                                            dangerouslySetInnerHTML={{
                                                __html: eachElement
                                            }}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="apply">
                    <a href={`/career/apply/${props.data.jobid}`} className="apply-button">Apply Now</a>
                </div>
            </div>
        </div>
    )
}

export default JobPosting;