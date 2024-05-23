import { TracingBeamDemo } from '../_components/TracingBeamDemo'
import { Blog } from '@payload-types'
import { Metadata } from 'next'

import { serverClient } from '@/trpc/serverClient'
import { generateMeta } from '@/utils/generate-meta'

interface PageProps {
  params: { slug: string }
  searchParams: {
    draft: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params

  const decodedSlug = decodeURIComponent(slug)

  const blog = await serverClient.blog.getBlogBySlug({ slug: decodedSlug })

  return <TracingBeamDemo slug={slug} data={blog as Blog} />
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
