import ArrowLink from "../../../components/arrowlink";
import StackGameComponent from "../../../components/stack-game";

const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section">
                <div className="container">
                    <div className="about-section-wrapper row">
                        <div
                            className="about-game col"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay='600'
                        >
                            <StackGameComponent />
                        </div>
                        <div
                            className="col"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay='600'
                        >

                            <div className="about-content">
                                <div className="section-title">
                                    <span className="title">A Bit About Us</span>
                                </div>
                                <p className="about-text">
                                    A proud Indian-born organization that revamps your business with emerging technologies.
                                </p>
                                <p>
                                    We use a wide range of technology as our Brahmastra to tackle specific challenging issues in every organization. We work with a variety of enterprises to help them develop efficient business plans. We concentrate on supplying excellent business solutions to you in order to increase your company's overall revenue. We personalize our solutions to your specific business demands, ensuring that they completely match your needs.
                                </p>
                                <p>
                                    Our expertise is in offering solutions for all types of organizations at all stages of development, from requirement research to final execution. We work on multi-disciplinary projects, so whether it's branding, social media services, marketing, corporate designs, website development, resolving complex business issues, or just a consultation on business analytics, our dedicated team will devise strategies that will propel your company to great success.
                                </p>
                                <ArrowLink text="More" link="/about" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
