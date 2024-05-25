import { Page as PageType } from '@payload-types'

import RenderBlocks from '@/payload/blocks/RenderBlocks'
import { serverClient } from '@/trpc/serverClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const Page = async ({ params }: { params: { route: string[] } }) => {
  const pageData = await serverClient.page.getPageData({
    path: params?.route,
  })

  return <RenderBlocks pageInitialData={pageData as PageType} slug={params} />
}

export default Page
