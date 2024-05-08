'use client'

import { HoverEffect } from './card-hover-effect'

export function Cards(cards: any) {
  return (
    <div className='w-full mx-auto px-8'>
      <HoverEffect items={cards?.cards} />
    </div>
  )
}
