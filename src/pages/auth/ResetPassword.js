import React,{useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Logo from '../../public/svgs/Logo';
import { PRIVATE_ROUTE } from '../../routes/url';

const ResetPassword = () => {
  const { token } = useParams()
  console.log(token)
  useEffect(() => {
    localStorage.setItem("3xity_App", JSON.stringify(token))
    return () => {
      true
    };
  }, []);
  return (
    <div className='mx-auto flex justify-center'>
      <div className='w-365px h-auto shadow-baseshadow bg-white px-6 py-8 mt-20 rounded-md'>
        <div className='flex justify-center mb-4'><Logo /></div>
        <div>
          <div className='text-xl text-primaryblue'>Hello</div>
          <div className='text-xl text-primaryblue'>welcome back</div>
          <div className='text-sm text-textgray my-3'>Enter your OTP and new Password</div>
          <form>
            <Input
              label='New Password'
              className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
              input={{
                type: 'password',
                placeHolder: 'Password',
                value: ""
              }}
            />
            <Input
              label='Confirm Password'
              className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
              input={{
                type: 'password',
                placeHolder: 'New Password',
                value: ""
              }}
            />
            <button className='bg-primaryblue text-white w-full h-12 rounded-full mt-5' type='submit'>Update</button>
          </form>
          <div className='text-center text-xs mt-5'>Go back to
            <Link to={PRIVATE_ROUTE.AUTH_LOGIN}>
              <span className='text-primaryblue ml-1'>Sign in page</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword