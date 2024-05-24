'use client'

import { Blog } from '@payload-types'

import { BentoGridDemo } from '@/app/(app)/(marketing)/(non-protected)/blog/_components/BentoGridDemo'
import { trpc } from '@/trpc/client'

const AllBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  const { data: blogs } = trpc.blog.getAllBlogs.useQuery(undefined, {
    initialData: blogsData,
  })

  return (
    <>
      <BentoGridDemo blogsData={blogs} />
    </>
  )
}

export default AllBlogs
