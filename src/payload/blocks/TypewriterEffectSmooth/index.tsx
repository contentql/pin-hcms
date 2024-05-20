'use client'

import { TypewriterEffect } from './TypewriterEffect'
import { TypewriterEffectSmoothType } from '~/payload-types'

export function TypewriterEffectSmooth(data: TypewriterEffectSmoothType) {
  const paragraph = data?.title
  const words = paragraph.split(' ')

  const splitWords = words.map((word, idx) => ({
    text: word,
    className:
      idx === words.length - 1 ? 'text-blue-500 dark:text-blue-500' : '',
  }))

  return (
    <div className='flex flex-col items-center justify-center h-[40rem]  '>
      <p className='text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-6'>
        {data?.sub_title}
      </p>
      <TypewriterEffect words={splitWords} />
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4'>
        <button className='w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm'>
          {data?.button_1}
        </button>
        <button className='w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm'>
          {data?.button_2}
        </button>
      </div>
    </div>
  )
}
