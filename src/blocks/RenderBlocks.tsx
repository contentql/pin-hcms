'use client'

import { Page } from '@payload-types'

import { SlugType, blocksJSX } from '@/blocks'
import { trpc } from '@/trpc/client'

interface RenderBlocksProps {
  slug: string
  layout: Page['layout'] // layout should be an array of objects conforming to the Page["layout"] type
}

const RenderBlocks: React.FC<RenderBlocksProps> = ({ layout, slug }) => {
  // get the data using slug
  // use react query to fetch the data
  // the data from layout should act as the default value for react query
  const { data: pageData } = trpc.page.getPageData.useQuery(
    { slug },
    { initialData: layout },
  )

  return (
    <div>
      {pageData?.map((block, index) => {
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return <h3 key={slug}>slug does not exist </h3>
      })}
    </div>
  )
}

export default RenderBlocks
