import { Cards } from './Cards'
import { Container } from './Container_Scroll'
import { HeroParallax } from './HeroParallax'
import RichText from './RichText'
import { Testimonials } from './Testimonials'

// const HeroBanner = dynamic(() => import('./Cards') as Promise<any>)
// const FeaturedGrid = dynamic(() => import('./Container_Scroll') as Promise<any>)
// const LogoMarquee = dynamic(() => import('./HeroParallax') as Promise<any>)
// const Faq = dynamic(() => import('./Testimonials') as Promise<any>)

export type AdditionalBlockProps = {
  blockIndex: number
  locale: string
}

const blockComponents = {
  Cards: Cards,
  Container: Container,
  HeroParallax: HeroParallax,
  Testimonials: Testimonials,
  RichText: RichText,
}

const Blocks = ({ blocks, locale }: any) => {
  return (
    <>
      {blocks
        ?.filter(
          (block: any) =>
            block &&
            block.blockType &&
            blockComponents.hasOwnProperty(block.blockType),
        )
        .map((block: any, ix: number) => {
          // @ts-ignore
          const BlockComponent = blockComponents[block.blockType] ?? null
          return BlockComponent ? (
            <BlockComponent
              key={ix}
              {...block}
              blockIndex={ix}
              locale={locale}
            />
          ) : null
        })}
    </>
  )
}

export default Blocks
