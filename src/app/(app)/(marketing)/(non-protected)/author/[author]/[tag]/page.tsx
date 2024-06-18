import AuthorTagDetails from '../../_components/AuthorTagDetails'
import BlogsByTag from '../../_components/BlogsByTag'
import { Blog, Tag } from '@payload-types'

import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    author: string
    tag: string
  }
}

async function page({ params }: PageProps) {
  console.log('params', params)
  const blogs = await serverClient.tag.getBlogs({
    tag: params?.tag,
  })
  return (
    <>
      <AuthorTagDetails data={blogs?.tagData.at(0) as Tag} />
      <BlogsByTag blogsData={blogs?.blogsData as Blog[]} />
    </>
  )
}

export default page
