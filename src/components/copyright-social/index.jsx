import React from 'react';
import { NavLink } from "react-router-dom";
import ArrowLink from '../arrowlink';

const CopyrightSocial = () => {
    return (
        <>
            <div className="footer-copyright">
                <p>
                    &copy; {new Date().getFullYear()}{" "}
                    <NavLink to="/">
                        Brahm<span>ware</span>
                    </NavLink>
                    . All Rights Reserved.
                </p>
            </div>
            <div className="footer-privacy-policy">
                Privacy <ArrowLink text={"Policy"} link={"/privacy-policy"} />
            </div>
            <div className="footer-social">
                <ul className="social">
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="twitter"
                            href="https://twitter.com/brahmware"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="linkedin"
                            href="https://www.linkedin.com/company/brahmware"
                        >
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="facebook"
                            href="https://www.facebook.com/brahmware"
                        >
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CopyrightSocial;
