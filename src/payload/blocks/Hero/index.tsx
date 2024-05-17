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
      <div className='h-screen  w-full rounded-md  relative flex flex-col items-center pt-[15%] antialiased'>
        <div className='max-w-5xl mx-auto flex items-center flex-col gap-3 mb-10'>
          <h1 className='relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-black text-center font-sans font-bold mb-6'>
            {data?.title}
          </h1>
          <p></p>
          <p className='text-neutral-500 max-w-4xl mx-auto my-2 text-sm text-center relative z-10  leading-6'>
            {data?.subtitle}
          </p>
          <MovingBorderDemo buttonName={data?.buttonText as string} />
        </div>
        <div className='flex flex-row items-center justify-center mb-10 w-full z-50'>
          <AnimatedTooltip items={data?.people} />
        </div>
        <BackgroundBeams />
      </div>
    </>
  )
}
