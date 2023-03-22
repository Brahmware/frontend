import PricingTable from '../../../components/pricing';
import { pricing as PricingData } from '../../../data/pricing.json';

const PricingContainer = () => {

    return (
        <div className="section pricing-table-section section-padding-2">
            <div className="container">
                {/* <div
                        className='section-title'
                        data-aos='fade-up'
                        data-aos-duration='1200'
                    >
                        <h2 className="title">
                            Floor Pricing
                        </h2>
                    </div> */}
                <div
                    className="pricing-table-wrapper"
                    data-aos='fade-up'
                    data-aos-duration='1200'
                >
                    <PricingTable
                        pricingData={PricingData}
                    />
                    <div
                        className="floor-pricing-explained"
                        data-aos='fade-left'
                        data-aos-duration='1200'

                    >
                        * The price charged could be more than or less than the price mentioned depending upon project.
                        Contact us for details.
                    </div>
                    <div
                        className="do-more-section row"
                        data-aos='fade-up'
                        data-aos-duration='1200'

                    >
                        {/* <div className="download-catalogue col-md-2">
                            <button className="download-button">
                                Get Catalogue
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingContainer;