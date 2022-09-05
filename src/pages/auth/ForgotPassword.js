import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Logo from '../../public/svgs/Logo'
import { PRIVATE_ROUTE } from '../../routes/url'
import { forgotPasswordSchema } from '../../validator'

const ForgotPassword = () => {

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: value => {
      console.log(value)
    }
  });


  return (
    <div className='mx-auto flex justify-center'>
      <div className='w-365px h-auto shadow-baseshadow bg-white px-6 py-8 mt-20 rounded-md'>
        <div className='flex justify-center mb-4'><Logo /></div>
        <div>
          <div className='text-xl text-primaryblue'>Hello</div>
          <div className='text-xl text-primaryblue'>we got your back</div>
          <div className='text-sm text-textgray my-3'>Email has been sent to you, click on the link to update your password</div>
          <form onSubmit={formik.handleSubmit}>
            <Input
              label='Email'
              className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
              input={{
                type: 'email',
                placeHolder: 'Email',
                id:'email',
                name: 'email',
                ...formik.getFieldProps('email')
              }}
            />
            {formik.touched.email && formik.errors.email ? (<span className='text-xs text-red-500'>{formik.errors.email}</span>): null}
            <button className='bg-primaryblue text-white w-full h-12 rounded-full mt-5' type='submit'>
              {formik.isSubmitting ? 'Loading...' : 'Send'}
            </button>
          </form>
          <div className='text-center text-xs mt-5'>Go go back to
            <Link to={PRIVATE_ROUTE.AUTH_LOGIN}>
              <span className='text-primaryblue ml-1'>Sign in page</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword