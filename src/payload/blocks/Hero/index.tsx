'use client'

import { MovingBorderDemo } from '../ui/button'
import { HeroType, Media } from '@payload-types'

import { AnimatedTooltip } from '@/payload/blocks/ui/animated-tooltip'

import { BackgroundBeams } from './BackgroundBeams'

export const Hero = (data: HeroType) => {
  const people = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image: (data?.people?.at(0)?.image as Media)?.url as string,
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image: (data?.people?.at(0)?.image as Media)?.url as string,
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image: (data?.people?.at(0)?.image as Media)?.url as string,
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image: (data?.people?.at(0)?.image as Media)?.url as string,
    },
  ]
  return (
    <>
      {' '}
      <div className='relative  flex h-screen  w-full flex-col items-center rounded-md pt-[15%] antialiased'>
        <div className='mx-auto mb-10 flex max-w-5xl flex-col items-center gap-3'>
          <h1 className='relative z-10 mb-6 bg-black  bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-7xl'>
            {data?.title}
          </h1>
          <p></p>
          <p className='relative z-10 mx-auto my-2 max-w-4xl text-center text-sm leading-6  text-neutral-500'>
            {data?.subtitle}
          </p>
          <MovingBorderDemo buttonName={data?.buttonText as string} />
        </div>
        <div className='z-50 flex w-full flex-row items-center justify-center'>
          <AnimatedTooltip items={data?.people as any} />
        </div>
        <BackgroundBeams />
      </div>
    </>
  )
}
