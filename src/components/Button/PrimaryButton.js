import React from 'react';
import PropsTypes from 'prop-types';

const PrimaryButton = (props) => {
    return (
        <button className={`
            ${props.color} 
            ${props.bg} 
            ${props.h} 
            ${props.w} 
            ${props.topShape} 
            ${props.bottomShape}`
        }>
            {props.name}
        </button>
    )
};

PrimaryButton.propTypes = {
    w: PropsTypes.string,
    h: PropsTypes.string,
    bg: PropsTypes.string,
    color: PropsTypes.string,
    name: PropsTypes.string,
    topShape: PropsTypes.string,
    bottomShape: PropsTypes.string
}

export default PrimaryButton