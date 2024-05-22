// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import About from './About'
import { About_Block } from './About/block'
import { Cards } from './Cards'
import { Cards_Block } from './Cards/block'
import { Container } from './Container_Scroll'
import { Container_Scroll_Block } from './Container_Scroll/block'
import Faqs from './Faqs'
import { Faqs_Block } from './Faqs/block'
import Cta from './Cta'
import { Cta_Block } from './Cta/block'
import { StickyScrollRevealDemo } from './FeatureStickyScroll'
import { Feature_Sticky_Scroll_Block } from './FeatureStickyScroll/block'
import { Hero } from './Hero'
import { Hero_Block } from './Hero/block'
import { HeroParallax } from './HeroParallax'
import { HeroParallax_Block } from './HeroParallax/block'
import Pricing from './Pricing'
import { Pricing_Block } from './Pricing/block'
import RichText from './RichText'
import RichText_Block from './RichText/block'
import TeamSection from './TeamSection'
import { TeamSection_Block } from './TeamSection/block'
import { Testimonials } from './Testimonials'
import { Testimonials_Block } from './Testimonials/block'
import { TypewriterEffectSmooth } from './TypewriterEffectSmooth'
import { TypewriterEffectSmooth_Block } from './TypewriterEffectSmooth/block'

export const blocksJSX = {
  Testimonials: Testimonials,
  Cards: Cards,
  ContainerScroll: Container,
  HeroParallax: HeroParallax,
  RichText: RichText,
  //FeatureTabs: FeatureTabs,
  Hero: Hero,
  FeatureStickyScroll: StickyScrollRevealDemo,
  TypewriterEffectSmooth: TypewriterEffectSmooth,
  TeamSection: TeamSection,
  Faqs: Faqs,
  About: About,
  Cta: Cta,
  Pricing: Pricing,
}

export type SlugType = keyof typeof blocksJSX

export const blocks = [
  Testimonials_Block,
  Cards_Block,
  Container_Scroll_Block,
  HeroParallax_Block,
  RichText_Block,
  //Feature_Block,
  Hero_Block,
  Feature_Sticky_Scroll_Block,
  TypewriterEffectSmooth_Block,
  TeamSection_Block,
  Faqs_Block,
  About_Block,
  Cta_Block,
  Pricing_Block,
]
