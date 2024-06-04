'use client'

import { Blog } from '@payload-types'

import { BentoGridDemo } from '@/app/(app)/(marketing)/(non-protected)/blog/_components/BentoGridDemo'
import { trpc } from '@/trpc/client'

import BlogHeroSection from './BlogHeroSection'

const AllBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  const { data: blogs } = trpc.blog.getAllBlogs.useQuery(undefined, {
    initialData: blogsData,
  })

  return (
    <div className='overflow-hidden'>
      <BlogHeroSection blogsData={blogsData} />
      <BentoGridDemo blogsData={blogs} />
    </div>
  )
}

export default AllBlogs
