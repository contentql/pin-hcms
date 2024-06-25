import { BLogPost } from '../_components/BlogPost'
import { PopularBlogs } from '../_components/PopularBlogs'
import { env } from '@env'
import { Blog } from '@payload-types'
import { Metadata } from 'next'

import { PageNotFound } from '@/components/404'
import DisqusComments from '@/components/DisqusComment'
import { serverClient } from '@/trpc/serverClient'
import { generateMeta } from '@/utils/generate-meta'

interface PageProps {
  params: { slug: string }
  searchParams: {
    draft: string
  }
}

export const revalidate = 0

const Page = async ({ params }: PageProps) => {
  const { slug } = params

  const decodedSlug = decodeURIComponent(slug)

  const blog = await serverClient.blog.getBlogBySlug({ slug: decodedSlug })
  const blogsData = await serverClient.blog.getAllBlogs()
  if (!blog) return <PageNotFound />

  return (
    <div className='px-2'>
      <BLogPost slug={decodedSlug} data={blog as Blog} />
      {env.NEXT_PUBLIC_DISQUS_SHORTNAME_ENV && (
        <div className='md:px-40'>
          <DisqusComments blog={blog as Blog} />
        </div>
      )}
      <h1 className='mt-20 text-center text-4xl font-extrabold text-white'>
        Popular Blogs
      </h1>
      <p className='mt-2 text-center text-gray-500'>scroll to see more blogs</p>
      <PopularBlogs blogsData={blogsData} />
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
