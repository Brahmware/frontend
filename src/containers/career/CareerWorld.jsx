import React, { useEffect, useRef, useState } from 'react';
import CareerWorldData from '../../data/career-world.json';

const CareerWorld = () => {

    const handleSelected = (event) => {

        // for nav list Element
        let thisElementId = event.target.id;
        let thisElement = document.getElementById(thisElementId);
        thisElement.classList.add("active");
        let thisParent = thisElement.parentElement;
        let thisSiblings = thisParent.childNodes;

        for (var [thisKey, thisSibling] of thisSiblings.entries()) {
            if (thisSibling.id !== thisElementId) {
                thisSibling.classList.remove("active");
            }
        }

        // for Description Element
        let targetId = `description#${event.target.id}`;
        let targetElement = document.getElementById(targetId);
        targetElement.classList.add("show")
        let targetParent = targetElement.parentElement;
        let targetSiblings = targetParent.childNodes;

        for (var [targetKey, targetSibling] of targetSiblings.entries()) {
            if (targetSibling.id !== targetId) {
                targetSibling.classList.remove("show");
            }
        }
    }

    return (
        <div className="career-world-wrapper">
            <div className="container">
                <div
                    className="career-world row"
                    data-aos='fade-up'
                    data-aos-duration='1200'
                >
                    <div
                        className="col-md-2"
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        data-aos-delay='600'
                    >
                        <ul
                            className="world-menu"
                        >
                            {
                                CareerWorldData.map((eachItem, key) => {
                                    return (
                                        <li key={key}
                                            className={eachItem.id === 0 ? "active" : ""}
                                            id={eachItem.id}
                                            onClick={handleSelected}
                                        >{eachItem.title}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div
                        className="col-md-10"
                        data-aos='fade-left'
                        data-aos-duration='1200'
                        data-aos-delay='600'
                    >
                        {
                            CareerWorldData.map((eachItem, key) => {
                                return (
                                    <div className={eachItem.id === 0 ? "description show" : "description"}
                                        id={`description#${eachItem.id}`}
                                        key={key}
                                        dangerouslySetInnerHTML={{
                                            __html: eachItem.description
                                        }}>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerWorld;