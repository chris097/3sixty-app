import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Logo from '../../public/svgs/Logo';
import { PRIVATE_ROUTE } from '../../routes/url';

const Login = () => {
  return (
    <div className='mx-auto flex justify-center'>
      <div className='w-365px h-auto shadow-baseshadow bg-white px-6 py-8 mt-20 rounded-md'>
        <div className='flex justify-center mb-4'><Logo /></div>
        <div>
          <div className='text-xl text-primaryblue'>Hello</div>
          <div className='text-xl text-primaryblue'>welcome back</div>
          <div className='text-sm text-textgray my-3'>Enter your personal details to login in</div>
          <form>
            <Input
              label='Email'
              input={{
                type: 'email',
                placeholder: 'Email',
              }}
            />
            <Input
              label='Password'
              input={{
                type: 'password',
                placeholder: 'Password',
              }}
            />
            <button className='bg-primaryblue text-white w-full h-12 rounded-full mt-5' type='submit'>Login</button>
          </form>
          <Link to={PRIVATE_ROUTE.AUTH_RESET_PASSWORD}>
            <div className='flex justify-end text-sm text-primaryblue mt-2'>Forgot Password?</div>
          </Link>
          <div className='text-center text-sm mt-4'>Already have an account?
            <Link to={PRIVATE_ROUTE.AUTH_REGISTER}>
               <span className='text-primaryblue'>Sign up here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login