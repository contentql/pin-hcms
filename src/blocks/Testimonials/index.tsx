'use client'

import { TestimonialsTypes } from '@payload-types'

import { InfiniteMovingCards } from './infinite-moving-cards'

export function Testimonials(Testimonial: TestimonialsTypes) {
  return (
    <div className='pt-[120px] rounded-md flex flex-col antialiased justify-center relative overflow-hidden'>
      <InfiniteMovingCards
        items={Testimonial?.testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  )
}
