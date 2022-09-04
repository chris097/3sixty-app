import React, { useContext } from 'react'
import { toggleContext } from '../context/toggleContext'
import Close from '../public/svgs/Close'
import DeleteIcon from '../public/svgs/DeleteIcon'

const DeleteNote = () => {

    const toggle = useContext(toggleContext);

    const closeHandler = () => {
        toggle.toggleCloseNote()
    }

  return (
    <div>
         <div className='bg-overlaygray w-full h-full fixed top-0 left-0' />
        <div className='absolute w-full'>
              <div className='relative bg-white w-1/3 h-auto mx-auto rounded-md px-6 py-5 text-primarygray'>
                  <div onClick={closeHandler} className='flex justify-end'><Close /></div>
                  <div className='flex justify-center flex-col items-center mt-4'>
                    <DeleteIcon />
                    <p className='text-sm mt-3'>
                        Are you sure you want to delete this note?
                      </p>
                      <div className='flex space-x-6 mt-12'>
                        <button onClick={closeHandler} className='border h-12 w-111px rounded-full hover:border-0 hover:bg-primaryblue hover:text-white'>Close</button>
                        <button className='h-12 w-111px rounded-full bg-shadowred text-primaryred'>Delete</button>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default DeleteNote