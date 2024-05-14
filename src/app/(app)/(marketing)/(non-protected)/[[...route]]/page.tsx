import { Page as PageType } from '@payload-types'

import { SlugType } from '@/payload/blocks'
import RenderBlocks from '@/payload/blocks/RenderBlocks'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: { route: SlugType[] }
}

const Page = async ({ params }: PageProps) => {
  const slug = params.route?.at(0) || 'index'

  const pageData = await serverClient.page.getPageData({
    slug,
  })

  return (
    <div>
      <RenderBlocks pageInitialData={pageData as PageType} slug={slug} />
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
