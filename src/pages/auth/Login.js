import React from 'react';
import Input from '../../components/Input';
import Logo from '../../public/svgs/Logo';

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
          <div className='text-center text-xs my-3'>Already have an account? <span className='text-primaryblue'>Sign up here</span></div>
        </div>
      </div>
    </div>
  )
}

export default Login