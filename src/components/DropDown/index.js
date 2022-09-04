import React, { useContext } from 'react'
import { toggleContext } from '../../context/toggleContext'
import { DROP_DOWNS } from '../../DUMMY_DATA'

const Dropdown = () => {

    const toggle = useContext(toggleContext);

    const handleClick = (current ) => {
        if (current === 0) return toggle.toggleEditNote();
        if (current === 1) return toggle.toggleDeleteNote();
    }

    return (
        <div className='fixed mt-5 -ml-32 w-146px bg-white shadow-baseshadow'>
            {DROP_DOWNS.map((detail, index) => (
                <button onClick={() => handleClick(index)} key={detail.id} className='h-9 text-dartgray flex space-x-2 items-center hover:text-primaryblue hover:bg-dropdownblue w-full px-3' type='button'>
                    <span>{detail.icon}</span>
                    <span>{detail.name}</span>
                </button>
            ))}
        </div>
  )
}

export default Dropdown