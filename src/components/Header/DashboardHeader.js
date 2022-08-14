import React from 'react'
import { Link } from 'react-router-dom'
import { NOTE_LINKS } from '../../DUMMY_DATA'
import Logo from '../../public/svgs/Logo'
import Plus from '../../public/svgs/Plus'
import Search from '../../public/svgs/Search'
import PrimaryButton from '../Button/PrimaryButton'

const DashboardHeader = () => {
  return (
    <>
      <div className='h-16 w-full items-center flex px-14 space-x-28'>
        <Link to="/">
          <Logo />
        </Link>
        <div className='flex'>
          <Search />
          <input className='ml-2 border-0 outline-none text-textgray focus:border-white' type='text' placeholder='Search notes' />
        </div>
      </div>
      <div className='h-16 px-14 w-full flex justify-between items-center border-t border-darkgray bg-skyblue shadow-baseshadow'>
        <div className='flex space-x-10'>
          {
            NOTE_LINKS.map((link, index) => (
              <div className='flex space-x-2 text-sm items-center text-grayshade' key={index}>
                <span>{link.icon}</span>
                <span>{link.name}</span>
                <span>{link.size('10')}</span>
              </div>
            ))
          }
        </div>
        <div className='flex'>
          <PrimaryButton
            w='w-16'
            bg='bg-lightblue'
            h='h-11'
            color='text-white'
            name={<Plus color='white' />}
            topShape='rounded-tl-full'
            bottomShape='rounded-bl-full'
        />
        <PrimaryButton
            w='w-111px'
            bg='bg-primaryblue'
            h='h-11' color='text-white'
            name='Create Note'
            topShape='rounded-tr-full'
            bottomShape='rounded-br-full'
        />
        </div>
      </div>
    </>
  )
}

export default DashboardHeader