import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { SlugType } from '@/blocks'
import RenderBlocks from '@/blocks/RenderBlocks'

const Page = async ({ params }: { params: { route: SlugType[] } }) => {
  const payload = await getPayload({
    config: configPromise,
  })
  // const { slug } = params

  const slug = params.route?.at(0) || 'index'

  const { docs: pageData } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return (
    <div>
      <RenderBlocks layout={pageData[0]?.layout} slug={slug} />
    </div>
  )
}

export const generateStaticParams = async () => {
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs: pageData } = await payload.find({
    collection: 'pages',
    pagination: false,
  })

  const arrayOfPageSlugs = pageData?.map(page => {
    return page.slug
  })

  return arrayOfPageSlugs
}

export default Page
