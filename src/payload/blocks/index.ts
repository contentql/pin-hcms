// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import { Cards } from './Cards'
import { Cards_Block } from './Cards/block'
import { Container } from './Container_Scroll'
import { Container_Scroll_Block } from './Container_Scroll/block'
import { HeroParallax } from './HeroParallax'
import { HeroParallax_Block } from './HeroParallax/block'
import RichText from './RichText'
import RichText_Block from './RichText/block'
import { Testimonials } from './Testimonials'
import { Testimonials_Block } from './Testimonials/block'

export const blocksJSX = {
  Testimonials: Testimonials,
  Cards: Cards,
  ContainerScroll: Container,
  HeroParallax: HeroParallax,
  RichText: RichText,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = [
  Testimonials_Block,
  Cards_Block,
  Container_Scroll_Block,
  HeroParallax_Block,
  RichText_Block,
]
