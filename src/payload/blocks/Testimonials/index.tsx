'use client'

import { TestimonialsTypes } from '@payload-types'

import { InfiniteMovingCards } from './infinite-moving-cards'

export function Testimonials(Testimonial: TestimonialsTypes) {
  return (
    <div className='relative flex flex-col justify-center overflow-hidden rounded-md py-[20px] antialiased md:pl-[6.9rem]'>
      <InfiniteMovingCards
        items={Testimonial?.testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  )
}
