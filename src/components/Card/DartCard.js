import React from 'react';
import PropTypes from 'prop-types';
import Dot from '../../public/svgs/Dot';
import Dropdown from '../DropDown';


const DartCard = (props) => {
  return (
    <div onClick={props.clickHandler}
      className={`border-b cursor-pointer ${props.curIndx === props.activeIndx ? 'bg-skyblue' : 'bg-white'} 
      border-darkgray h-auto last:border-b-0 px-6 py-3`
    }>
          <div className='text-lg font-bold font-roboto text-primarygray'>{props.title}</div>
          <p className='text-sm text-textgray'>{props.description}</p>
        <div className='flex justify-between text-sm items-center mt-3'>
        <div
          className='text-primaryblue flex justify-center bg-secondaryblue capitalize h-8 items-center w-auto px-2 rounded-full'>
            {props.tag}
            </div>
            <div className='flex space-x-6 items-center'>
              <div className='text-sm text-dartgray'>{props.created_at}</div>
            <div className='border border-darkgray rounded-full p-2 cursor-pointer'>
            <Dot />
            {(props.curIndx === props.activeIndx && props.show) && <Dropdown />}
            </div>
            </div>
        </div>
    </div>
  )
}

DartCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.string,
  created_at: PropTypes.string,
  clickHandler: PropTypes.any,
  curIndx: PropTypes.number,
  activeIndx: PropTypes.number,
  show: PropTypes.bool
}

export default DartCard