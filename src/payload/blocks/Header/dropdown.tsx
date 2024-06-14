'use client'

import { User } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { GoSignOut } from 'react-icons/go'

const ProfileDropdown = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const closeDropdown = (event: any) => {
      if (!event.target.closest('.profile-dropdown')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', closeDropdown)

    return () => {
      document.removeEventListener('mousedown', closeDropdown)
    }
  }, [])

  const handleImageClick = () => {
    setIsOpen(!isOpen)
  }

  const handleDropdownMouseEnter = () => {
    setIsHovered(true)
  }

  const handleDropdownMouseLeave = () => {
    setIsHovered(false)
  }

  const dropdownVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <div className='profile-dropdown relative inline-block text-left'>
      <div onClick={handleImageClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user?.imageUrl as string}
          alt='Profile'
          width={40}
          height={40}
          className='cursor-pointer rounded-full'
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial='closed'
            animate={isOpen || isHovered ? 'open' : 'closed'}
            variants={dropdownVariants}
            className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'>
              <div className='flex px-4 py-2 text-left'>
                <CgProfile />
                <Link
                  href='/profile'
                  passHref
                  className='block w-full px-2 text-sm text-gray-700 hover:bg-gray-100'
                  role='menuitem'>
                  Profile
                </Link>
              </div>

              {user?.role === 'admin' && (
                <Link
                  href='/admin'
                  passHref
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  role='menuitem'>
                  Admin
                </Link>
              )}

              <div className='flex px-4 py-2 hover:bg-[#D70040]'>
                <GoSignOut className='pt-1' />
                <button
                  onClick={() => signOut()}
                  className='block w-full rounded-sm  px-2 text-left text-sm text-gray-700'
                  role='menuitem'>
                  sign-out
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProfileDropdown
