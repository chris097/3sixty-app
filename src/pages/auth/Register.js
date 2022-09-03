import React, {useContext} from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Logo from '../../public/svgs/Logo'
import { PRIVATE_ROUTE, PUBLIC_ROUTE } from '../../routes/url'
import { signupSchema } from '../../validator';
import { authContext } from '../../context/authContext';
import toast from 'react-hot-toast';
// import { useAuth } from '../../context/authContext';


const Register = () => {

  const auth = useContext(authContext);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: signupSchema,
    onSubmit: values => {
        // if(values) return <Link to='/user/notes' replace />
      return auth.register(values,
        responses => {
          if (responses.status === 201) {
            navigate(PUBLIC_ROUTE.DASHBOARD_NOTE, { replace: true })
            toast.success(responses.message)
          }
        }

      )
    }
  })
  return (
    <div className='mx-auto flex justify-center'>
      <div className='w-365px h-auto shadow-baseshadow bg-white px-6 py-8 mt-14 rounded-md'>
        <div className='flex justify-center mb-4'><Logo /></div>
        <div>
          <div className='text-xl text-primaryblue'>Create</div>
          <div className='text-xl text-primaryblue'>your account</div>
          <div className='text-sm text-textgray my-3'>Enter your personal details to start your journey today</div>
          <form onSubmit={formik.handleSubmit}>
            <Input
              label='Name'
              className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
              input={{
                type: 'text',
                name: 'name',
                id: 'name',
                placeholder: 'Name',
                ...formik.getFieldProps('name')
              }}
            />
            {formik.touched.name && formik.errors.name ? (<span className='text-xs text-red-500'>firstname is required.</span>) : null}
            <Input
              label='Username'
              className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
              input={{
                type: 'text',
                name: 'username',
                id: 'username',
                placeholder: 'Username',
                ...formik.getFieldProps('username')
              }}
            />
             {formik.touched.username && formik.errors.username ? (<span className='text-xs text-red-500'>username is optional.</span>) : null}
            <Input
              label='Email'
              className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
              input={{
                type: 'email',
                name: 'email',
                id: 'email',
                placeholder: 'Email',
                ...formik.getFieldProps('email')
              }}
            />
            {formik.touched.email && formik.errors.email ? (<span className='text-xs text-red-500'>email is required.</span>) : null}
            <Input
              label='Password'
              className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
              input={{
                type: 'password',
                name: 'password',
                id: 'password',
                placeholder: 'Password',
                ...formik.getFieldProps('password')
              }}
            />
            {formik.touched.password && formik.errors.password ? (<span className='text-xs text-red-500'>password is required.</span>) : null}
            <button className='bg-primaryblue text-white w-full h-12 rounded-full mt-5' type='submit'>
              {formik.isSubmitting ? 'Loading...' : 'Sign Up'}
            </button>
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