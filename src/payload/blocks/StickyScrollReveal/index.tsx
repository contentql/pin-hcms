'use client'

import React from 'react'

import { StickyScroll } from './StickyScroll'
import { StickyScrollRevealType } from '~/payload-types'

export const StickyScrollReveal: React.FC<StickyScrollRevealType> = data => {
  return (
    <div className='px-16'>
      <StickyScroll data={data} />
    </div>
  )
}
