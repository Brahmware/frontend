import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
/* import { getClosest, getSiblings, slideToggle, slideUp } from "../../utils"; */
import disableScroll from 'disable-scroll';
import { AboutusIcon, CareersIcon, HomeIcon, PricingIcon, RightarrowIcon, ServicesIcon } from "../icons";
import CopyrightSocial from "../copyright-social";

const HamburgerMenu = ({ show, onClose }) => {

    show ? disableScroll.on() : disableScroll.off();

    const handleClickOnMenu = () => {

    }
    /* const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("mobile-menu-expand") ||
            target.classList.contains("mobile-menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    }; */
    return (
        <div className={`offcanvas-menu ${show ? "open" : ""}`}>
            <div className="offcanvas-wrapper container">
                <div className="primary-menu">
                    <ul>
                        <li
                            onClick={handleClickOnMenu}
                        >
                            <NavLink exact to="/">
                                <i className="home-icon">
                                    <HomeIcon />
                                </i>
                                <span>
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/about"}>
                                <i className="aboutus-icon">
                                    <AboutusIcon />
                                </i>
                                <span>
                                    About Us
                                </span>
                            </NavLink>

                            {/* <i
                                className="mobile-menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            >
                                <RightarrowIcon />
                            </i>

                            <ul className="sub-menu">
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/about"}
                                    >
                                        <span>
                                            About Us
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/pricing"}
                                    >
                                        <span>
                                            Pricing
                                        </span>
                                    </NavLink>
                                </li>
                            </ul> */}
                        </li>
                        <li>
                            <NavLink
                                to={process.env.PUBLIC_URL + "/pricing"}
                            >
                                <i className="pricing-icon">
                                    <PricingIcon />
                                </i>
                                <span>
                                    Pricing
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/services"}>
                                <i className="services-icon">
                                    <ServicesIcon />
                                </i>
                                <span>
                                    Our Services
                                </span>
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={process.env.PUBLIC_URL + "/project"}>
                                <span>
                                    Project
                                </span>
                            </NavLink>

                            <i
                                className="mobile-menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            >
                                <RightarrowIcon />
                            </i>

                            <ul className="sub-menu">
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/project"}
                                    >
                                        <span>
                                            Projects
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={
                                            process.env.PUBLIC_URL +
                                            "/project-detalis/1"
                                        }
                                    >
                                        <span>
                                            Project Details
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/blog"}>
                                <span>
                                    Blog
                                </span>
                            </NavLink>
                            <i
                                className="mobile-menu-expand"
                                onClick={onClickHandler}
                                aria-hidden="true"
                            >
                                <RightarrowIcon />
                            </i>

                            <ul className="sub-menu">
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/blog"}
                                    >
                                        <span>
                                            Blog
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={
                                            process.env.PUBLIC_URL +
                                            "/blog-details/1"
                                        }
                                    >
                                        <span>
                                            Blog Details
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>*/}
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/career"}>
                                <i className="services-icon">
                                    <CareersIcon />
                                </i>
                                <span>
                                    Career
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navigation-footer container">
                    <CopyrightSocial />
                </div>
            </div>
        </div>
    );
};

HamburgerMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default HamburgerMenu;
