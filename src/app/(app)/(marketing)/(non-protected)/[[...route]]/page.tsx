import Blocks from '@/payload/blocks/Blocks'
import { serverClient } from '@/trpc/serverClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const Page = async ({ params }: { params: { route: string[] } }) => {
  console.log('params', params)
  const page = await serverClient.page.getPageData({
    path: params?.route,
  })

  return <Blocks blocks={page?.blocks} locale='en' />
}

export default Page
