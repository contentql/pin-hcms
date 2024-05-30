'use client'

import { TypewriterEffect } from './TypewriterEffect'
import { HeroType } from '~/payload-types'

export function TypewriterEffectSmooth({ data }: { data: HeroType }) {
  const paragraph = data?.title!
  const words = paragraph?.split(' ')

  const splitWords = words?.map((word, idx) => ({
    text: word,
    className:
      idx === words.length - 1 ? 'text-blue-500 dark:text-blue-500' : '',
  }))

  return (
    <div className='flex flex-col items-center justify-center  '>
      <p className='mb-6 text-lg text-neutral-400 dark:text-neutral-200'>
        {data?.subtitle}
      </p>
      <TypewriterEffect words={splitWords} />
    </div>
  )
}
