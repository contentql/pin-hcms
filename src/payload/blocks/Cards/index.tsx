'use client'

import { CardsTypes } from '@payload-types'

import { HoverEffect } from './card-hover-effect'

export function Cards(cards: CardsTypes) {
  return (
    <div className='w-full mx-auto px-16'>
      <HoverEffect items={cards} />
    </div>
  )
}
