'use client'

import { CardsTypes } from '@payload-types'

import { HoverEffect } from './card-hover-effect'

export function Cards(cards: CardsTypes) {
  return (
    <div className='mx-auto w-full px-16'>
      <HoverEffect items={cards} />
    </div>
  )
}
