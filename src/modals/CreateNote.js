import { useFormik } from 'formik';
import React, { useContext } from 'react'
import PrimaryButton from '../components/Button/PrimaryButton';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import { toggleContext } from '../context/toggleContext';
import Close from '../public/svgs/Close';
import { noteSchema } from '../validator';

const CreateNote = () => {

  const toggle = useContext(toggleContext);
  
  const handleClick = () => {
    return toggle.toggleCloseNote()
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      tag: '',
      note: ''
    },
    validationSchema: noteSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div>
      <div className='bg-overlaygray w-full h-full fixed top-0 left-0' />
      <div className='absolute w-full'>
        <div className='relative bg-white w-1/3 h-auto mx-auto rounded-md'>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex justify-between items-center h-14 border-b px-6'>
              <div className='text-lg font-bold font-roboto'>Write a Note</div>
              <button type='button' onClick={handleClick}>
                <Close />
              </button>
            </div>
            <div className='px-6 py-4'>
              <Input
                label='Title'
                className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
                input={{
                  name: 'title',
                  id: 'title',
                  placeholder: 'note title',
                  ...formik.getFieldProps('title')
                }}
              />
              {formik.touched.title && formik.errors.title ? (<span className='text-xs text-red-500'>title is required.</span>): null}
              <Input
                label='Tag'
                className='w-full h-11 mt-1 text-sm bg-shadowgray border px-3 border-nextgray rounded-md outline-none focus:border-nextgray'
                input={{
                  name: 'tag',
                  id: 'tag',
                  placeholder: 'note tag',
                  ...formik.getFieldProps('tag')
                }}
              />
              {formik.touched.tag && formik.errors.tag ? (<span className='text-xs text-red-500'>tag is required.</span>): null}
              <Textarea
                label='Note'
                className='w-full h-184px mt-1 text-sm bg-shadowgray border p-3 border-nextgray rounded-md outline-none focus:border-nextgray'
                textarea={{
                  name: 'note',
                  id: 'note',
                  placeholder: 'note body',
                  ...formik.getFieldProps('note')
                }}
              />
              {formik.touched.note && formik.errors.note ? (<span className='text-xs text-red-500'>note is required.</span>): null}
              <div className='my-4'>
                <PrimaryButton
                  type='submit'
                  color='text-white'
                  bg='bg-primaryblue'
                  w='w-36'
                  h='h-12'
                  name='Create'
                  topShape='rounded-full'
              />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateNote