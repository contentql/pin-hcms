'use client'

import { MovingBorderDemo } from '../ui/button'

import { TypewriterEffect } from './TypewriterEffect'

export function TypewriterEffectSmooth() {
  const paragraph = 'hell this testing purpose'
  const words = paragraph.split(' ')

  const splitWords = words.map((word, idx) => ({
    text: word,
    className:
      idx === words.length - 1 ? 'text-blue-500 dark:text-blue-500' : '',
  }))

  return (
    <div className='flex flex-col items-center justify-center  '>
      <p className='mb-6 text-lg text-neutral-600 dark:text-neutral-200'>
        {/* {data?.sub_title} */}
        jhbcah ascjbc asskcjcbasjk
      </p>
      <TypewriterEffect words={splitWords} />
      <div className='flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
        <MovingBorderDemo
          className={'bg-neutral-950 text-white'}
          buttonName={'button'}
        />
        <MovingBorderDemo
          className={'bg-white text-black'}
          buttonName={'button'}
        />
      </div>
    </div>
  )
}
