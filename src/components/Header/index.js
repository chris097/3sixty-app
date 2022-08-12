import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../public/svgs/Logo'
import PrimaryButton from './../Button/PrimaryButton'

const Header = () => {
  return (
    <div>
      <div className="flex justify-between h-16 items-center px-14">
        <Logo />
        <div className="flex text-sm">
          <Link to='/login'>
            <PrimaryButton
              h="h-10"
              w="w-20"
              name="Login"
              color="text-white"
              bg="bg-lightblue"
              topShape="rounded-tl-full"
              bottomShape="rounded-bl-full"
            />
          </Link>
          <Link to="/register">
            <PrimaryButton
              h="h-10"
              w="w-20"
              name="Sign Up"
              color="text-white"
              bg="bg-primaryblue"
              topShape="rounded-tr-full"
              bottomShape="rounded-br-full"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;