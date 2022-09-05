import React, { useContext } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import PrimaryButton from '../components/Button/PrimaryButton';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import { toggleContext } from '../context/toggleContext';
import Close from '../public/svgs/Close';
import { editNote } from '../services';
import PropTypes from 'prop-types';
import { CONSTANT_TEXT } from '../helpers/constant';

const EditNote = (props) => {

  const toggle = useContext(toggleContext);
  
  const handleClick = () => {
    return toggle.toggleCloseNote()
  };

  const queryClient = useQueryClient()

  const formik = useFormik({
    initialValues: {
      title: props.title,
      tag: props.tag,
      description: props.description
    },
    onSubmit: values => {
      return editNote(values, props.id,
        responses => {
          if (responses) {
            toast.success(responses.message)
            toggle.toggleCloseNote()
            queryClient.invalidateQueries('notes')
          } else {
            toast.error(responses.message)
          }
        }
      )
    }
  })

  return (
    <div>
      <div className='bg-overlaygray w-full h-full fixed top-0 left-0' />
      <div className='absolute w-full'>
        <div className='relative bg-white w-1/3 h-auto mx-auto rounded-md'>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex justify-between items-center h-14 border-b px-6'>
              <div className='text-lg font-bold font-roboto'>Edit a Note</div>
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
              <Textarea
                label='Note'
                className='w-full h-184px mt-1 text-sm bg-shadowgray border p-3 border-nextgray rounded-md outline-none focus:border-nextgray'
                textarea={{
                  name: 'description',
                  id: 'description',
                  placeholder: 'description',
                  ...formik.getFieldProps('description')
                }}
              />
              <div className='my-4'>
                <PrimaryButton
                  type='submit'
                  color='text-white'
                  bg='bg-primaryblue'
                  w='w-36'
                  h='h-12'
                  name= {formik.isSubmitting ? CONSTANT_TEXT.LOADING : 'Edit'}
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

EditNote.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  tag: PropTypes.string,
  description: PropTypes.string
}

export default EditNote;