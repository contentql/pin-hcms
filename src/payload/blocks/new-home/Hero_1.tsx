/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero_1: React.FC = () => {
  return (
    <div className='container mx-auto flex min-h-screen flex-col space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16'>
      <div className='w-full lg:w-1/2'>
        <div className='lg:max-w-lg'>
          <h1 className='text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl'>
            Easiest way to create your website
          </h1>

          <div className='mt-8 space-y-5'>
            <p className='-mx-2 flex items-center text-gray-700 dark:text-gray-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-2 h-6 w-6 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <span className='mx-2'>Clean and Simple Layout</span>
            </p>

            <p className='-mx-2 flex items-center text-gray-700 dark:text-gray-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-2 h-6 w-6 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <span className='mx-2'>Just Copy Paste Codeing</span>
            </p>

            <p className='-mx-2 flex items-center text-gray-700 dark:text-gray-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-2 h-6 w-6 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <span className='mx-2'>Easy to Use</span>
            </p>
          </div>
        </div>

        <div className='mt-8 w-full rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-blue-400 lg:max-w-sm'>
          <form className='flex flex-col lg:flex-row'>
            <input
              type='email'
              placeholder='Enter your email address'
              className='m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-0 dark:text-gray-200'
            />

            <button
              type='button'
              className='m-1 h-10 w-fit transform rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none'>
              Join Us
            </button>
          </form>
        </div>
      </div>

      <div className='flex h-96 w-full items-center justify-center lg:w-1/2'>
        <img
          className='mx-auto h-full w-full rounded-md object-cover lg:max-w-2xl'
          src='https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='glasses photo'
        />
      </div>
    </div>
  )
}

export default Hero_1
