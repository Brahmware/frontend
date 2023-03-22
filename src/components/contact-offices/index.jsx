import React from 'react'
import IconComponent from '../../utils/IconComponent'

const ContactOffice = (props) => {

    const delay = 600 + props.index * 300;

    return (
        <div
            className="office"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={`${delay}`}
        >
            <div className="icon-side">
                <IconComponent icon={props.office.icon} />
            </div>
            <div
                className='information-side'
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay={`${1200 + delay}`}
            >
                <div className="title">
                    @ <span>{props.office.country}</span>
                </div>
                <div className="phone">
                    <a href={`tel:${props.office.phonecode}+${props.office.phoneno}`}>
                        <span>&#9742; ({props.office.phonecode})</span> {props.office.phoneno}
                    </a>
                </div>
                <div
                    className="address"
                    dangerouslySetInnerHTML={
                        { __html: props.office.address }
                    }
                />
            </div>
        </div>
    )
}

export default ContactOffice