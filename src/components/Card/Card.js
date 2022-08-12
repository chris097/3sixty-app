import React from 'react';
import PropTypes from 'prop-types';
import DotSquare from '../../public/svgs/DotSquare';


const Card = (props) => {
    return (
        <div>
            <DotSquare  />
            <div className='z-50 relative flex'>
                <div className='w-237px h-259px relative rounded-md bg-white shadow-baseshadow mt-7 ml-7'>
                    <div className='h-195px w-full border'>
                        <img src={props.img} alt="banner_image" />
                    </div>
                    <div className='flex items-center justify-center h-16 text-sm text-primarygray'>{props.title}</div>
                </div>
            </div>
        </div>
    )
};

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string
}

export default Card;