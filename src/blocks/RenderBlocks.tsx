'use client'

import { env } from '@env'
import { Page } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { SlugType, blocksJSX } from '@/blocks'
import { trpc } from '@/trpc/client'

interface RenderBlocksProps {
  slug: string
  pageInitialData: Page // layout should be an array of objects conforming to the Page["layout"] type
}

const RenderBlocks: React.FC<RenderBlocksProps> = ({
  pageInitialData,
  slug,
}) => {
  // get the data using slug
  // use react query to fetch the data
  // the data from layout should act as the default value for react query
  const { data: pageData } = trpc.page.getPageData.useQuery(
    { slug },
    { initialData: pageInitialData },
  )

  // Fetch page data for live preview
  const { data: livePreviewData } = useLivePreview<Page | undefined>({
    initialData: undefined,
    serverURL: env.NEXT_PUBLIC_PUBLIC_URL,
    depth: 2,
  })

  // Determine which data to use based on whether live preview data is available
  const dataToUse = livePreviewData?.layout || pageData?.layout

  return (
    <div>
      {dataToUse?.map((block, index) => {
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return <h3 key={slug}>Block does not exist </h3>
      })}
    </div>
  )
}

export default RenderBlocks
