import configPromise from '@payload-config'
import { Blog } from '@payload-types'
import { Metadata } from 'next'
import { getPayload } from 'payload'

import AllPages from '@/components/AllPages'
import { serverClient } from '@/trpc/serverClient'
import { generateMeta } from '@/utils/generate-meta'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const blog = await serverClient.blog.getBlogBySlug({ slug })

  return <AllPages slug={slug} data={blog as Blog} />
}

export async function generateStaticParams() {
  const payload = await getPayload({
    config: configPromise,
  })

  const allBlogs = await payload.find({
    collection: 'blogs',
    pagination: false,
  })

  const blogIdsArray = allBlogs.docs.map(blog => ({ blogId: blog.id }))

  return blogIdsArray
}

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  let blog: Blog | null = null

  const payload = await getPayload({
    config: configPromise,
  })

  try {
    const result = await payload.findByID({
      collection: 'blogs',
      id: slug,
    })

    blog = result as Blog
  } catch (error) {
    console.error('Error fetching blog:', error)
  }

  return generateMeta({ doc: blog as Blog })
}

export default Page
