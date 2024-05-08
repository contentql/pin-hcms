// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import { Cards } from './Cards'
import { Cards_Block } from './Cards/block'
import { Container_Scroll } from './Container_Scroll'
import { Container_Scroll_Block } from './Container_Scroll/block'
import { HeroParallax } from './HeroParallax'
import { HeroParallax_Block } from './HeroParallax/block'
import Page1 from './Page1'
import { Page1_Block } from './Page1/block'
// import { StickyScrollReveal } from './StickyScrollBar'
// import { StickyScrollReveal_Block } from './StickyScrollReveal/block'
import Test1_1 from './Test1_1'
import { Test1_1_Block } from './Test1_1/block'
import { Testimonials } from './Testimonials'
import { Testimonials_Block } from './Testimonials/block'

export const blocksJSX = {
  Test1_1: Test1_1,
  Page1: Page1,
  Testimonials: Testimonials,
  Cards: Cards,
  Container_Scroll: Container_Scroll,
  HeroParallax: HeroParallax,
  // StickyScrollReveal: StickyScrollReveal,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = {
  Test1_1: Test1_1_Block,
  Page1_Block: Page1_Block,
  Testimonials_Block: Testimonials_Block,
  Cards_Block: Cards_Block,
  Container_Scroll_Block: Container_Scroll_Block,
  HeroParallax_Block: HeroParallax_Block,
  // StickyScrollReveal_Block: StickyScrollReveal_Block,
}
