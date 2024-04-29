'use client'

import { Page } from '@payload-types'

import { SlugType, blocksJSX } from '@/blocks'

interface RenderBlocksProps {
  slug: string
  layout: Page['layout'] // layout should be an array of objects conforming to the Page["layout"] type
}

const RenderBlocks: React.FC<RenderBlocksProps> = ({ layout, slug }) => {
  return (
    <div>
      {layout?.map((block, index) => {
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}

export default RenderBlocks
