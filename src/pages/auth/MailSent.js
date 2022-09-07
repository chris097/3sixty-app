import React from 'react'
import Success from '../../public/svgs/success'

const MailSent = () => {
  return (
    <div className='mx-auto flex justify-center'>
      <div className='w-365px h-auto shadow-baseshadow bg-white px-6 py-8 mt-20 rounded-md'>
        <div className='flex justify-center mb-4'>
          <Success />
        </div>
        <div className='text-center'>
          <div className='text-xl text-primarygray'>Mail Sent Successfully</div>
          <div className='text-sm text-textgray my-3'>Please Kindly check your mail, a link has been sent to you to reset your password</div>
          </div>
        </div>
    </div>
  )
}

export default MailSent