'use client'

import { TypewriterEffectSmoothType } from '@payload-types'

import { TypewriterEffect } from './TypewriterEffect'

export function TypewriterEffectSmooth(data: TypewriterEffectSmoothType) {
  const paragraph = data?.title
  const words = paragraph.split(' ')

  const splitWords = words.map((word, idx) => ({
    text: word,
    className:
      idx === words.length - 1 ? 'text-blue-500 dark:text-blue-500' : '',
  }))

  return (
    <div className='flex h-[40rem] flex-col items-center justify-center  '>
      <p className='mb-6 text-lg text-neutral-600 dark:text-neutral-200'>
        {data?.sub_title}
      </p>
      <TypewriterEffect words={splitWords} />
      <div className='flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
        <button className='h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white'>
          {data?.button_1}
        </button>
        <button className='h-10 w-40 rounded-xl border border-black bg-white text-sm  text-black'>
          {data?.button_2}
        </button>
      </div>
    </div>
  )
}
