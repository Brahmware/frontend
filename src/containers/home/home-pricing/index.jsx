import HomeData from "../../../data/home.json";
import Pricing from "../../../components/home-pricing-table";

const PricingContainer = () => {
    return (
        <div className="home-pricing-section section bg-dark">
            <div className="container">
                <div
                    className='section-title'
                    data-aos='fade-up'
                    data-aos-duration='1200'
                >
                    <h2 className="title">
                        Floor Pricing
                    </h2>
                </div>
                <div className="container-fluid home-pricing-table-wrapper">
                    <div
                        className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gx-2 gy-2"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {HomeData[5].packages &&
                            HomeData[5].packages.map((single, i) => {
                                return (
                                    <div key={i} className="col">
                                        <Pricing key={i} data={single} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingContainer;
