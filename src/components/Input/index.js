import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div className='mt-2'>
            <label className='text-sm' htmlFor={props.label}>{props.label}</label>
            <input
                className={props.className}
                {...props.input}
            />
        </div>
    )
};

Input.propTypes = {
    label: PropTypes.string,
    input: PropTypes.any,
    className: PropTypes.any,
}

export default Input