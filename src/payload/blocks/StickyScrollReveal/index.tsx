'use client'

import { StickyScrollRevealType } from '@payload-types'
import React from 'react'

import { StickyScroll } from './StickyScroll'

export const StickyScrollReveal: React.FC<StickyScrollRevealType> = data => {
  return (
    <div className='px-16'>
      <StickyScroll data={data} />
    </div>
  )
}
