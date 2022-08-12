import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div className='mt-2'>
            <label className='text-sm' htmlFor={props.label}>{props.label}</label>
            <input
                className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
                {...props.input}
            />
        </div>
    )
};

Input.propTypes = {
    label: PropTypes.string,
    input: PropTypes.any
}

export default Input