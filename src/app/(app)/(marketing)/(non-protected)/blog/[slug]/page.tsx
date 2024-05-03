import { Blog } from '@payload-types'
import { Metadata } from 'next'

import AllPages from '@/components/AllPages'
import { serverClient } from '@/trpc/serverClient'
import { generateMeta } from '@/utils/generate-meta'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const blog = await serverClient.blog.getBlogBySlug({ slug })

  return <AllPages slug={slug} data={blog as Blog} />
}

export async function generateStaticParams() {
  const allBlogs = await serverClient.blog.getAllBlogs()

  const blogIdsArray = allBlogs.map(blog => ({ blogId: blog.id }))

  return blogIdsArray
}

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  let blog: Blog | null = null

  try {
    const result = await serverClient.blog.getBlogBySlug({ slug })

    blog = result as Blog
  } catch (error) {
    console.error('Error fetching blog:', error)
  }

  // ? collectionSlug is the name of the page eg.: http://localhost:3000/blog/[id] (`blog` is the collectionSlug)
  return generateMeta({ doc: blog, collectionSlug: 'blog' })
}

export default Page
