// This is just to consolidate all the existing blocks and it's respective jsx
// Always prefer to individually import, the required block or jsx
import About from './About'
import { About_Block } from './About/block'
import Author from './AuthorDescription'
import { AuthorDescription_Block } from './AuthorDescription/block'
import { Cards } from './Cards'
import { Cards_Block } from './Cards/block'
import { Container } from './Container_Scroll'
import { Container_Scroll_Block } from './Container_Scroll/block'
import Cta from './Cta'
import { Cta_Block } from './Cta/block'
import Faqs from './Faqs'
import { Faqs_Block } from './Faqs/block'
import { StickyScrollRevealDemo } from './FeatureStickyScroll'
import { Feature_Sticky_Scroll_Block } from './FeatureStickyScroll/block'
import { Hero } from './Hero'
import { Hero_Block } from './Hero/block'
import { HeroParallax } from './HeroParallax'
import { HeroParallax_Block } from './HeroParallax/block'
import Hero_3 from './Hero_3'
import { Hero_3_Block } from './Hero_3/block'
import PopularBlogs from './PopularBlogs'
import { Popular_Blogs_Block } from './PopularBlogs/block'
import Pricing from './Pricing'
import { Pricing_Block } from './Pricing/block'
import RichText from './RichText'
import RichText_Block from './RichText/block'
import { StickyScrollReveal } from './StickyScrollReveal'
import { StickyScrollReveal_Block } from './StickyScrollReveal/block.'
import TagDescription from './TagDescription'
import { TagDescription_Block } from './TagDescription/block'
import Tags from './Tags'
import { Tags_Block } from './Tags/block'
import TeamSection from './TeamSection'
import { TeamSection_Block } from './TeamSection/block'
import TechnologiesUsed from './TechnologiesUsed'
import { Technologies_Used_Block } from './TechnologiesUsed/block'
import { Testimonials } from './Testimonials'
import { Testimonials_Block } from './Testimonials/block'
import { TopPicks } from './TopPicks'
import { Top_Picks_Block } from './TopPicks/block'
import TrendingBlogs from './TrendingBlogs'
import { Trending_Blogs_Block } from './TrendingBlogs/block'
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
  StickyScrollReveal: StickyScrollReveal,
  TagDescription: TagDescription,
  Tags: Tags,
  Hero3: Hero_3,
  PopularBlogs: PopularBlogs,
  TechnologiesUsed: TechnologiesUsed,
  TrendingBlogs: TrendingBlogs,
  AuthorDescription: Author,
  TopPicks: TopPicks,
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
  StickyScrollReveal_Block,
  TagDescription_Block,
  Tags_Block,
  Hero_3_Block,
  Popular_Blogs_Block,
  Top_Picks_Block,
  Technologies_Used_Block,
  Trending_Blogs_Block,
  AuthorDescription_Block,
]
