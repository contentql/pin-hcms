'use client'

import { env } from '@env'
import { Page } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import { SlugType, blocksJSX } from '@/payload/blocks'
import { trpc } from '@/trpc/client'

import Loading from './ui/Loading'
import { BackgroundBoxesDemo } from './ui/page-not-found'

interface RenderBlocksProps {
  slug: any
  pageInitialData: Page // layout should be an array of objects conforming to the Page["layout"] type
}

const RenderBlocks: React.FC<RenderBlocksProps> = ({
  pageInitialData,
  slug,
}) => {
  // get the data using slug
  // use react query to fetch the data
  // the data from layout should act as the default value for react query
  const { data: pageData, isLoading: isPageLoading } =
    trpc.page.getPageData.useQuery(
      { path: slug.route },
      { initialData: pageInitialData },
    )

  // Fetch page data for live preview
  const { data: livePreviewData } = useLivePreview<Page | undefined>({
    initialData: undefined,
    serverURL: env.NEXT_PUBLIC_PUBLIC_URL,
    depth: 2,
  })

  // Determine which data to use based on whether live preview data is available
  const dataToUse = livePreviewData?.blocks || pageData?.blocks

  if (isPageLoading) {
    return <Loading />
  } else {
    if (!pageData) {
      return <BackgroundBoxesDemo />
    }
  }
  console.log('blocks', dataToUse)
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
