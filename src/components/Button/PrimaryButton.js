import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = (props) => {
    return (
        <button type={props.type} className={`
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
    w: PropTypes.string,
    h: PropTypes.string,
    bg: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    topShape: PropTypes.string,
    bottomShape: PropTypes.string,
    type: PropTypes.string
}

export default PrimaryButton