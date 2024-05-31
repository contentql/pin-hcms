import { Blog } from '@payload-types'
import { Metadata } from 'next'
import { PopularBlogs } from '../_components/PopularBlogs'
import { TracingBeamDemo } from '../_components/TracingBeamDemo'

import { serverClient } from '@/trpc/serverClient'
import { generateMeta } from '@/utils/generate-meta'
import { ThreeDCardDemo } from '../_components/ThreeDCard'

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
  const blogsData = await serverClient.blog.getAllBlogs()

  return (
    <div>
      <TracingBeamDemo slug={decodedSlug} data={blog as Blog} />
      <PopularBlogs blogsData={blogsData.slice(0, 4)} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-screen max-w-7xl mx-auto'>
        {blogsData?.map((item, index) => (
          <div key={index}>
            <ThreeDCardDemo item={ item} />
         </div>
        )) }
      </div>
    </div>
  )
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
