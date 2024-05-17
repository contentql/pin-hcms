'use client'

import { FeatureStickyScrollType } from '@payload-types'
import * as React from 'react'

import { StickyScroll } from '@/payload/blocks/ui/sticky-scroll-reveal'

export function StickyScrollRevealDemo(data: FeatureStickyScrollType) {
  const test = React.useState()
  return (
    <div className='p-10  mt-[200px]'>
      <StickyScroll content={data?.features} />
    </div>
  )
}
