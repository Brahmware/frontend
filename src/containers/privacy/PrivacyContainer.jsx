import React from 'react'
import PrivacyData from '../../data/privacy.json';

const PrivacyContainer = () => {

    return (
        <div className="privacy-section">
            <div className='container'>
                <div
                    className="section-title"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="0"
                >
                    <h2 className="title">Privacy Policy</h2>
                </div>
                <div className="privacy-information-wrapper">
                    <div className="privacy-information">
                        <div id="intro" className='policies'>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.intro
                                }}
                            />
                        </div>
                        <div id="consent" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.consent.title
                                }}
                            />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.consent.content
                                }}
                            />
                        </div>
                        <div id="information_we_collect" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.information_we_collect.title
                                }}
                            />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.information_we_collect.content
                                }}
                            />
                        </div>
                        <div id="how_we_use_your_information" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.how_we_use_your_information.title
                                }}
                            />
                            <span
                                className='desc'
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.how_we_use_your_information.content.desc
                                }}
                            />
                            <ul>
                                {
                                    PrivacyData.how_we_use_your_information.content.list &&
                                    PrivacyData.how_we_use_your_information.content.list.map((eachItem, itemKey) => {
                                        return (
                                            <li key={itemKey}>{eachItem}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div id="log_files" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.log_files.title
                                }}
                            />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.log_files.content
                                }}
                            />
                        </div>
                        <div id="advertising_partners_privacy_policy" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.advertising_partners_privacy_policy.title
                                }}
                            />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.advertising_partners_privacy_policy.content
                                }}
                            />
                        </div>
                        <div id="third_party_privacy_policies" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.third_party_privacy_policies.title
                                }}
                            />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.third_party_privacy_policies.content
                                }}
                            />
                        </div>
                        <div id="cppa_privacy_rights" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.cppa_privacy_rights.title
                                }}
                            />
                            <span
                                className='desc'
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.cppa_privacy_rights.content.desc
                                }}
                            />
                            <ul>
                                {
                                    PrivacyData.cppa_privacy_rights.content.list &&
                                    PrivacyData.cppa_privacy_rights.content.list.map((eachItem, itemKey) => {
                                        return (
                                            <li key={itemKey}>{eachItem}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div id="gdpr_data_protection_rights" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.gdpr_data_protection_rights.title
                                }}
                            />
                            <span
                                className='desc'
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.gdpr_data_protection_rights.content.desc
                                }}
                            />
                            <ul>
                                {
                                    PrivacyData.gdpr_data_protection_rights.content.list &&
                                    PrivacyData.gdpr_data_protection_rights.content.list.map((eachItem, itemKey) => {
                                        return (
                                            <li key={itemKey}>{eachItem}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div id="children_s_information" className='policies'>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.children_s_information.title
                                }}
                            />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: PrivacyData.children_s_information.content
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyContainer