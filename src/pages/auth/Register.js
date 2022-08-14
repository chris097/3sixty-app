import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Logo from '../../public/svgs/Logo'
import { PRIVATE_ROUTE } from '../../routes/url'

const Register = () => {
  return (
    <div className='mx-auto flex justify-center'>
      <div className='w-365px h-auto shadow-baseshadow bg-white px-6 py-8 mt-14 rounded-md'>
        <div className='flex justify-center mb-4'><Logo /></div>
        <div>
          <div className='text-xl text-primaryblue'>Create</div>
          <div className='text-xl text-primaryblue'>your account</div>
          <div className='text-sm text-textgray my-3'>Enter your personal details to start your journey today</div>
          <form>
            <Input
              label='Name'
              input={{
                type: 'text',
                placeHolder: 'Name',
                value: ""
              }}
            />
            <Input
              label='Username'
              input={{
                type: 'text',
                placeHolder: 'Username',
                value: ""
              }}
            />
            <Input
              label='Email'
              input={{
                type: 'email',
                placeHolder: 'Email',
                value: ""
              }}
            />
            <Input
              label='Password'
              input={{
                type: 'password',
                placeHolder: 'Password',
                value: ""
              }}
            />
            <button className='bg-primaryblue text-white w-full h-12 rounded-full mt-5' type='submit'>Sign Up</button>
          </form>
          <div className='text-center text-xs my-3'>Already have an account?
            <Link to={PRIVATE_ROUTE.AUTH_LOGIN}>
              <span className='text-primaryblue ml-1'>Sign in here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register