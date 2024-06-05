'use client'

import { useEffect, useState } from 'react'

const Nav_3 = () => {
  const [navSize, setNavSize] = useState('10rem')
  const [navColor, setNavColor] = useState('transparent')

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor('#111827') : setNavColor('transparent')
    window.scrollY > 10 ? setNavSize('5rem') : setNavSize('10rem')
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <nav
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: 'all 1s',
      }}
      className='fixed z-50 flex w-full items-center justify-center border-gray-200 bg-black px-16 dark:bg-gray-900'>
      <div className='mx-auto flex w-full flex-wrap items-center justify-between p-4'>
        <div className='flex items-center space-x-4'>
          <a href='#' className='flex items-center'>
            <svg
              className='mr-3 h-8 text-white'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              xmlSpace='preserve'>
              <path
                fill='currentColor'
                d='m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z'></path>
            </svg>
          </a>
          <div
            className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
            id='navbar-cta'>
            <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-black p-4 font-semibold md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-black'>
              <li>
                <a
                  href='#'
                  className='block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0'>
                  React JS
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-700 md:p-0 md:hover:bg-transparent'>
                  Next JS
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-700 md:p-0 md:hover:bg-transparent'>
                  Payload CMS
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-700 md:p-0 md:hover:bg-transparent'>
                  Auth JS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center'>
          <button
            type='button'
            className='mr-3 rounded-lg bg-gray-300 px-7 pb-4 pt-3 text-center text-base font-semibold text-gray-900 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300'>
            Log in
          </button>
          <button
            type='button'
            className='mr-3 rounded-lg bg-gray-900 px-7 pb-4 pt-3 text-center text-base font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300'>
            Sign up free
          </button>
          <button
            data-collapse-toggle='navbar-cta'
            type='button'
            id='open-menu-button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav_3
