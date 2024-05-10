'use client'

import { HeroParallaxTypes } from '@payload-types'

import { HeroParallaxUI } from './hero-parallax'

export function HeroParallax(Hero: HeroParallaxTypes) {
  return <HeroParallaxUI products={Hero} />
}
