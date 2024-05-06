import { Page as PageType } from '@payload-types'

import { SlugType } from '@/blocks'
import RenderBlocks from '@/blocks/RenderBlocks'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: { route: SlugType[] }
  searchParams: {
    draft: string
  }
}

const Page = async ({ params, searchParams }: PageProps) => {
  const slug = params.route?.at(0) || 'index'

  const { draft } = searchParams

  const isDraftMode = JSON.parse(draft || 'false')

  console.log(isDraftMode)

  const pageData = await serverClient.page.getPageData({ slug, isDraftMode })

  return (
    <div>
      <RenderBlocks pageData={pageData as PageType} slug={slug} />
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
