'use client'

import { Blog, Tag } from '@payload-types'

import { trpc } from '@/trpc/client'

import BlogHeroSection from './BlogHeroSection'
import { BlogPostsGrid } from './BlogPostsGrid'

interface TagsDetails extends Tag {
  count: number
}

const AllBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  const { data: blogs } = trpc.blog.getAllBlogs.useQuery(undefined, {
    initialData: blogsData,
  })

  const { data: tagsDetails } = trpc.tag.getAllTags.useQuery()

  return (
    <div className='overflow-hidden'>
      <BlogHeroSection
        blogsData={blogsData}
        tagsDetails={tagsDetails as TagsDetails[]}
      />
      <BlogPostsGrid blogsData={blogs} />
    </div>
  )
}

export default AllBlogs
