'use client'

import { HeroParallaxUI } from './hero-parallax'

export function HeroParallax(Hero: any) {
  return <HeroParallaxUI products={Hero?.hero} />
}
export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '',
  },
]
