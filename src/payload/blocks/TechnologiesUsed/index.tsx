import { TechnologiesTypes } from '@payload-types'
import React from 'react'
import { FaNode } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress } from 'react-icons/si'
import { TbBrandFramerMotion, TbBrandNextjs } from 'react-icons/tb'

import { cn } from '@/utils/cn'

function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
}) {
  return (
    <>
      {path && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          className='pointer-events-none absolute inset-0 h-full w-full'>
          <circle
            className='stroke-black/10 stroke-1 dark:stroke-white/10'
            cx='50%'
            cy='50%'
            r={radius}
            fill='none'
            strokeDasharray={'4 4'}
          />
        </svg>
      )}

      <div
        style={
          {
            '--duration': duration,
            '--radius': radius,
            '--delay': -delay,
          } as React.CSSProperties
        }
        className={cn(
          'animate-orbit absolute flex h-full w-full transform-gpu items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10',
          { '[animation-direction:reverse]': reverse },
          className,
        )}>
        {children}
      </div>
    </>
  )
}
export function OrbitingCirclesDemo() {
  return (
    <div className=' relative flex h-[40rem] w-full max-w-[40%] items-center justify-center overflow-hidden'>
      {/* Inner Circles */}
      <OrbitingCircles
        className='h-[40px] w-[40px] border-none bg-transparent'
        duration={20}
        radius={90}>
        <TbBrandFramerMotion size={28} style={{ color: 'white' }} />
      </OrbitingCircles>
      <OrbitingCircles
        className='h-[40px] w-[40px] border-none bg-transparent'
        duration={20}
        delay={20}
        radius={90}>
        <RiTailwindCssFill size={28} style={{ color: '#0ea5e9' }} />
      </OrbitingCircles>

      {/* center */}
      <OrbitingCircles
        className='h-[50px] w-[50px] border-none bg-transparent'
        reverse
        duration={20}
        delay={20}
        radius={170}>
        <IoLogoJavascript size={38} style={{ color: 'yellow' }} />
      </OrbitingCircles>
      <OrbitingCircles
        className='h-[50px] w-[50px] border-none bg-transparent'
        reverse
        duration={20}
        radius={170}>
        <TbBrandNextjs size={38} style={{ color: 'white' }} />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className='h-[60px] w-[60px] border-none bg-transparent'
        radius={240}
        duration={20}>
        <FaNode style={{ color: 'green' }} size={48} />
      </OrbitingCircles>
      <OrbitingCircles
        className='h-[60px] w-[60px] border-none bg-transparent'
        radius={240}
        duration={20}
        delay={20}>
        <SiExpress size={40} style={{ color: 'black' }} />
      </OrbitingCircles>
    </div>
  )
}

/* eslint-disable @next/next/no-img-element */

const Hero_1 = ({
  technologiesUsed,
}: {
  technologiesUsed: TechnologiesTypes
}) => {
  return (
    <div className='container '>
      <div className='w-full'>
        <div className='lg:max-w-lg'>
          <h1 className='text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl'>
            {technologiesUsed?.title}
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
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function TechnologiesUsed(technologiesUsed: TechnologiesTypes) {
  return (
    <div className=' mb-20 flex w-full items-center justify-center gap-x-6'>
      <div className='w-[50%]'>
        <Hero_1 technologiesUsed={technologiesUsed as TechnologiesTypes} />
      </div>
      <OrbitingCirclesDemo />
    </div>
  )
}
