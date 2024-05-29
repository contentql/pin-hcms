'use client'

import { HeroType, Media } from '@payload-types'

import { AnimatedTooltip } from '@/payload/blocks/ui/animated-tooltip'

import { BackgroundBeams } from './BackgroundBeams'
import { TypewriterEffectSmooth } from './TypewriterEffectSmooth'

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
      <div className='relative mb-14 flex h-screen  w-full flex-col items-center bg-neutral-950 pt-[15%] antialiased'>
        <div className='mx-auto mb-10 flex max-w-5xl flex-col items-center gap-3'>
          <TypewriterEffectSmooth data={data} />
        </div>
        <div className='z-50 flex w-full flex-row items-center justify-center'>
          <AnimatedTooltip items={data?.people} />
        </div>
        <BackgroundBeams />
      </div>
    </>
  )
}
