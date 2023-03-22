import React from 'react';
import { team_members } from '../../data/about-us.json';
import IconComponent from '../../utils/IconComponent';

const AboutTeamMembers = () => {
    return (
        <div className="section team_members-section bg-dark">
            <div className="container team_members-container">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay='0'
                    className="title"
                >
                    <span>First Brahmnauts Onboard</span>
                </div>
                <div className="members row row-cols-lg-3 row-cols-sm-2 row-cols-1 gx-3 gy-3">
                    {
                        team_members && team_members.map((eachMember, key) => {
                            return (
                                <div className="col" key={eachMember.id}>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-delay={`${600 + key * 300}`}
                                        className="member noselect"
                                    >
                                        <div className="image-part">
                                            <div className="icon-placeholder">
                                                <div className="icon">
                                                    <img src={eachMember.icon} alt={`photo_of_${eachMember.name}`} />
                                                </div>
                                            </div>
                                            <div className="socials-placeholder">
                                                <div className="socials">
                                                    {
                                                        eachMember.socials && eachMember.socials.map((eachSocial, key) => {
                                                            return (
                                                                <div className='social-icon' id={eachSocial.id} key={key}>
                                                                    {
                                                                        eachSocial.link &&
                                                                        <a
                                                                            href={eachSocial.link}
                                                                            target="_blank"
                                                                            rel='noreferrer'
                                                                        >
                                                                            <IconComponent icon={eachSocial.icon} />
                                                                        </a>
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="member-details">
                                            <div className="member-name"><span>{eachMember.name}</span></div>
                                            <div className="member-email">
                                                <a href={`mailto:${eachMember.email.address}`}>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: eachMember.email.toshow
                                                        }}
                                                    />
                                                </a>
                                            </div>
                                            <div className="member-designation"><span>{eachMember.designation}</span></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutTeamMembers