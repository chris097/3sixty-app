import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => (
    <div className='mt-2'>
        <label className='text-sm' htmlFor={props.label}>{props.label}</label>
        <textarea
            className={props.className}
            {...props.textarea}
        />
    </div>
);

Textarea.propTypes = {
    label: PropTypes.string,
    textarea: PropTypes.any,
    className: PropTypes.any,
}


export default Textarea