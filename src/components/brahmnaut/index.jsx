import React from 'react';
import { BrahmNautVector } from '../../assets/icons';

const BrahmNaut = ({ ...props }) => {
    return (
        <div {...props} className={`brahmnaut ${props?.className}`}>
            <BrahmNautVector />
        </div>
    )
}

export default BrahmNaut;