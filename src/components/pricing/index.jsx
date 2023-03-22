import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CrossIcon, TickIcon } from '../../assets/icons';
import IconComponent from '../../utils/IconComponent';
import TableFixedComponent from './TableFixedComponent';

const PricingTable = (props) => {
    const pricing = props.pricingData;
    const all_keys = {
        "business_solutions": Object.keys(pricing[3].packageDetails[0].solutionDetails),
        "branding": Object.keys(pricing[3].packageDetails[1].solutionDetails),
        "tech_solutions": Object.keys(pricing[3].packageDetails[2].solutionDetails)
    }

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({ }) => {
        if (window.scrollY >= 0) {
            const header = document.querySelector(".header");
            setHeaderHeight(header.offsetHeight)
        }
    };

    const packageReferences = useRef([]);
    const location = useLocation();

    useEffect(() => {
        packageReferences.current.map((packageReference) => (
            `#${packageReference.id}` === location.hash) &&
            packageReference.scrollIntoView(
                {
                    behavior: "smooth"
                }
            )
        )
    }, [location.hash])

    return (
        <div className="pricing-table container-fluid row w-100">
            {
                pricing.map((eachPackage, key) => {
                    return (
                        <React.Fragment key={key}>
                            <TableFixedComponent
                                headerHeight={headerHeight}
                                fixedclass={`fixedclass_${eachPackage.packageID}`}
                            />
                            <ul
                                id={`package_${eachPackage.packageName.replace(/ /g, "_")}`}
                                ref={(element) => packageReferences.current[key] = element}
                                className="package-details col-md-2 col-5"
                                key={key}
                            >
                                <li className="package-label row">
                                    <i className="package-icon">
                                        <IconComponent icon={eachPackage.packageIcon} />
                                    </i>
                                </li>
                                <li className="service-label row">
                                    <div
                                        className="title"
                                        style={{ top: `${headerHeight}px` }}
                                    >
                                        <div className="item-wrapper">
                                            {eachPackage.packageName}
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            all_keys.business_solutions.map((keyName, key) => {
                                                return (
                                                    eachPackage.packageDetails[0].solutionDetails[keyName] ?
                                                        <li key={key} className="service row">
                                                            <div className="item-wrapper span-list">
                                                                {
                                                                    eachPackage.packageDetails[0].solutionDetails[keyName].map((item, itemKey) => {
                                                                        return (
                                                                            <span className="item">
                                                                                {item}
                                                                                {
                                                                                    itemKey === eachPackage.packageDetails[0].solutionDetails[keyName].length - 1 ? '' : ' + '
                                                                                }
                                                                            </span>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </li>
                                                        :
                                                        <li className="service fl row">
                                                            <div className="item-wrapper">
                                                                <CrossIcon />
                                                            </div>
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="service-label row">
                                    <div
                                        className="title"
                                        style={{ top: `${headerHeight}px` }}
                                    >
                                        <div className="item-wrapper">
                                            {eachPackage.packageName}
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            all_keys.branding.map((keyName, key) => {
                                                return (
                                                    eachPackage.packageDetails[1].solutionDetails[keyName] ?
                                                        <li key={key} className="service row">
                                                            <div className="item-wrapper span-list">
                                                                {
                                                                    eachPackage.packageDetails[1].solutionDetails[keyName].map((item, itemKey) => {
                                                                        return (
                                                                            <span className="item">
                                                                                {item}
                                                                                {
                                                                                    itemKey === eachPackage.packageDetails[1].solutionDetails[keyName].length - 1 ? '' : ' + '
                                                                                }
                                                                            </span>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </li>
                                                        :
                                                        <li className="service fl row">
                                                            <div className="item-wrapper">
                                                                <CrossIcon />
                                                            </div>
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="service-label row">
                                    <div
                                        className="title"
                                        style={{ top: `${headerHeight}px` }}
                                    >
                                        <div className="item-wrapper">
                                            {eachPackage.packageName}
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            all_keys.tech_solutions.map((keyName, key) => {
                                                return (
                                                    eachPackage.packageDetails[2].solutionDetails[keyName] ?
                                                        <li key={key} className="service row">
                                                            <div className="item-wrapper span-list">
                                                                {
                                                                    eachPackage.packageDetails[2].solutionDetails[keyName].map((item, itemKey) => {
                                                                        return (
                                                                            <span className="item">
                                                                                {item}
                                                                                {
                                                                                    itemKey === eachPackage.packageDetails[2].solutionDetails[keyName].length - 1 ? '' : ' + '
                                                                                }
                                                                            </span>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </li>
                                                        :
                                                        <li className="service fl row">
                                                            <div className="item-wrapper">
                                                                <CrossIcon />
                                                            </div>
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="service-label row">
                                    <div className="floor-price">
                                        <div className="item-wrapper">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: eachPackage.packagePrice
                                                }}
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default PricingTable