import IconComponent from '../../utils/IconComponent';
import React, { useEffect, useRef, useState } from 'react';

const LocationComponent = (props) => {

    const [placeholderDimension, setPlaceholderDimension] = useState({ height: null, width: null, transform: null });
    const placeholderRef = useRef();

    useEffect(() => {
        if (placeholderRef.current) {
            let boundingCircle = placeholderRef.current;
            let circleRadius = boundingCircle["r"].baseVal.value;
            let circleCenter = {
                cx: boundingCircle['cx'].baseVal.value,
                cy: boundingCircle['cy'].baseVal.value
            }
            let centeringParameter = {
                translateX: circleCenter['cx'] - circleRadius,
                translateY: circleCenter['cy'] - circleRadius
            }
            setPlaceholderDimension({
                height: circleRadius * 2,
                width: circleRadius * 2,
                transform: `translate(${centeringParameter.translateX}px, ${centeringParameter.translateY}px)`
            })
        }
    }, [props.toShow])

    const innerIconToShow = () => {
        if (props.isContactPage) {
            return "/images/nav-menu/contactus.svg"
        } else if (props.isProjectDetailsPage) {
            return "/images/nav-menu/projectdetails.svg"
        } else {
            return props.toShow
        }
    }

    return (
        <div className="location-component">
            <div className="location-pin">
                <svg className='location-image' data-name="e913e13c-5cdc-42f8-b71b-b563bd181b5d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 488">
                    <path className='pin' d="M297.5,149.3C297.5,67.6,231,1,149.2,1S.9,67.6.9,149.3a147.6,147.6,0,0,0,15.9,66.8l132.4,273L281.7,215.9A145.4,145.4,0,0,0,297.5,149.3ZM149.2,275.1A125.8,125.8,0,1,1,275,149.3,125.8,125.8,0,0,1,149.2,275.1Z" />
                    <g className='inner-entry-location'>
                        <circle id="inner-location-holder" className="circle" cx="149.2" cy="149.3" r="125.8" fill="none" box-sizing="border-box" ref={placeholderRef} />
                        <foreignObject style={placeholderDimension}>
                            {
                                <IconComponent icon={innerIconToShow()}
                                    class='inner-location'
                                />
                            }
                        </foreignObject>
                    </g>
                </svg>
            </div>
            <svg className="road" data-name="e913e13c-5cdc-42f8-b71b-b563bd181b5d" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 488">
                <path d="M469.8,322.9c-8.7.9-17.1,1.9-25.4,3a533.6,533.6,0,0,0-56,9.9c-16.7,4-32.6,9-43.3,14.7s-16.3,12.1-16.5,18.5c-.3,3.3,1.2,6.4,3.4,9.6s7.4,7.2,10.1,9.4,7.1,4.3,10.1,6.4a24,24,0,0,1,4.6,4.4,4,4,0,0,1,.8,4.3c-.6,1.3-2.1,2.4-4.7,3.7a46.7,46.7,0,0,1-10.4,3.3c-4.1,1-8.3,1.9-12.8,2.7-19.1,3.6-117.1,12.3-138.9,14.3l-2,.2-10.6,22.1,1.8-.2c10.8-.9,63.5-4.7,74-5.9l13.7-1.3,1.3-.2.8.5,6.9,4.4,2.8,1.8.5.3-3.9.5H276c-17.8,2.2-36.1,4.2-54.4,6.1l-48.3,4.5-13.1,27,12.2-1.5c21.4-2.3,42.5-4.7,63.3-7.4,42.2-5.5,83.4-11.6,121.2-19.2s70.3-15.9,92.8-26.8c11.3-5.4,19.5-11.4,22.6-17.8s1-12.9-6.1-19c-4.8-4.1-11.5-7.9-19.9-11.5-3.7-1.6-7.7-3.1-11.8-4.6l-7.4-2.4c-3.7-1.3-7-2.6-10-4-5.3-2.3-8.7-4.2-11.1-7.5s-1.4-6.6,1.6-9.8c6-6.2,20.1-11.7,35.5-16.3,9.5-2.9,19.9-5.5,31-7.9l6.6-1.3h.3l1.6-.4c2.9-.7,4.7-.7,4.7-2.8S479.2,323,469.8,322.9Zm-62.5,98.5-.6.3h-.1a245.2,245.2,0,0,1-35.3,11.2c-12.8,3.1-26.8,5.7-41.3,8.3l-12.6-6.1c18-2.8,35.5-6,50.7-10a158,158,0,0,0,20.2-6.4l1.5-.5,17.5,3.2Zm-.7-33c10.3,5.2,17.3,10.9,17.3,16.9H405.2c.8-4.4-3.3-8.8-9.7-12.9-3.7-2.2-7.8-4.3-12.3-6.4a99.6,99.6,0,0,1-10.1-5.6l7.2-.9,5.9-.7.4.2c2.9,1.5,5.8,3,9.1,4.5s7.5,3.2,10.9,4.9Zm4.3-47.5c-10.8,3.5-20.5,7.1-27.3,11.3s-9.8,8.2-9.7,12.6H361.8c.6-5.8,7.1-11.4,17.8-16.3a134.1,134.1,0,0,1,18.6-7l5.1-1.6,2.6-.7,5.7,1.5ZM463.6,329l-7.7,1.3-3.3.7-3.1-1.3,3.3-.6,8.2-1.3,13.2-2,1.9,1.1Z" />
            </svg>
        </div>
    )
}

export default LocationComponent;