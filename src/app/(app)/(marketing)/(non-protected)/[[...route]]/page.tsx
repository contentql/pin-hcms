import { Page as PageType } from '@payload-types'

import { SlugType } from '@/blocks'
import RenderBlocks from '@/blocks/RenderBlocks'
import { serverClient } from '@/trpc/serverClient'

const Page = async ({ params }: { params: { route: SlugType[] } }) => {
  const slug = params.route?.at(0) || 'index'

  const pageData = await serverClient.page.getPageData({ slug })

  return (
    <div>
      <RenderBlocks layout={pageData as PageType} slug={slug} />
    </div>
  )
}

export const generateStaticParams = async () => {
  const pageData = await serverClient.page.getAllPages()

  const arrayOfPageSlugs = pageData?.map(page => {
    return page.slug
  })

  return arrayOfPageSlugs
}

export default Page
