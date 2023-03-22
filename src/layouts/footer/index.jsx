import ArrowLink from "../../components/arrowlink";
import CopyrightSocial from "../../components/copyright-social";

const Footer = () => {
    return (
        <div className="footer section bg-dark">
            <div className="container">
                <div className="footer-info-box text-center">
                    <h4 className="title">Let's help you navigate your <ArrowLink text="Next" link="/contact" /></h4>
                    <h2 className="mail">
                        <a href="mailto:hello@brahmware.com">
                            <span>hello@brahm</span>ware<span>.com</span>
                        </a>
                    </h2>
                </div>
                <div className="footer-copyright-social">
                    <CopyrightSocial />
                </div>
            </div>
        </div>
    );
};

export default Footer;
