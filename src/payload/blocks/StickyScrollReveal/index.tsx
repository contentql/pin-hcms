'use client'

import React from 'react'

import { StickyScroll } from './StickyScroll'
import { StickyScrollRevealType } from '~/payload-types'

export const StickyScrollReveal: React.FC<StickyScrollRevealType> = data => {
  return (
    <div className='p-10'>
      <StickyScroll data={data} />
    </div>
  )
}
