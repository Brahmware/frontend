import React from 'react';
import { Link } from 'react-router-dom';
import { RightarrowIcon } from '../../assets/icons';

const ArrowLink = (props) => {
    return (
        <>
            {
                props.withoutComponent ?
                    <a
                        href={props.link}
                        className='arrow-link'
                        target={props.blank_target && "_blank"}
                        rel={props.blank_target && "noreferrer"}
                    >
                        <div className="arrow-link__box">
                            <span className='text'>
                                {props.text}
                            </span>
                            <div className='right-arrow-icon'><RightarrowIcon /></div>
                        </div>
                    </a>
                    :
                    <Link
                        to={props.link}
                        className='arrow-link'
                    >
                        <div className={`arrow-link__box ${props.back && 'reverse'}`} id={props.itemID ? `box_${props.itemID}` : null}>
                            <span className='text' id={props.itemID ? `text_${props.itemID}` : null} >
                                {props.text}
                            </span>
                            <div className={'right-arrow-icon'} id={props.itemID ? `arrow_${props.itemID}` : null}><RightarrowIcon /></div>
                        </div>
                    </Link>
            }
        </>

    )
}

export default ArrowLink;