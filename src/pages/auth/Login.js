import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Logo from '../../public/svgs/Logo';
import { PRIVATE_ROUTE } from '../../routes/url';
import { loginSchema } from '../../validator';

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      console.log(values)
    }
  });

  return (
    <div className='mx-auto flex justify-center'>
      <div className='w-365px h-auto shadow-baseshadow bg-white px-6 py-8 mt-20 rounded-md'>
        <div className='flex justify-center mb-4'><Logo /></div>
        <div>
          <div className='text-xl text-primaryblue'>Hello</div>
          <div className='text-xl text-primaryblue'>welcome back</div>
          <div className='text-sm text-textgray my-3'>Enter your personal details to login in</div>
          <form onSubmit={formik.handleSubmit}>
            <Input
              label='Email'
              input={{
                type: 'email',
                placeholder: 'Email',
                id: 'email',
                name: 'email',
                ...formik.getFieldProps('email')
              }}
            />
            {formik.touched.email && formik.errors.email ? (<span className='text-xs text-red-500'>email is required.</span>): null}
            <Input
              label='Password'
              input={{
                type: 'password',
                placeholder: 'Password',
                name: 'password',
                id: 'password',
                ...formik.getFieldProps('password')
              }}
            />
            {formik.touched.password && formik.errors.password ? (<span className='text-xs text-red-500'>firstname is required.</span>):null}
            <button className='bg-primaryblue text-white w-full h-12 rounded-full mt-5' type='submit'>
              {formik.isSubmitting ? 'Loading...' : 'Login'}
            </button>
          </form>
          <Link to={PRIVATE_ROUTE.AUTH_FORGOT_PASSWORD}>
            <div className='flex justify-end text-sm text-primaryblue mt-2'>Forgot Password?</div>
          </Link>
          <div className='text-center text-xs mt-4'>Already have an account?
            <Link to={PRIVATE_ROUTE.AUTH_REGISTER}>
               <span className='text-primaryblue ml-1'>Sign up here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login