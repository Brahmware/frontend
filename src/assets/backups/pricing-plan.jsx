import PriceData from "../../data/pricing.json";
import Pricing from "../../components/pricing";

const PricingContainer = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="pricing-table-wrapper">
                    <div
                        className='section-title'
                        data-aos='fade-up'
                        data-aos-duration='1200'
                    >
                        <h2 className="title">
                            Floor Pricing
                        </h2>
                    </div>
                    <div
                        className="row row-cols-md-4 gx-0"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {PriceData.packages &&
                            PriceData.packages.map((single, i) => {
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
