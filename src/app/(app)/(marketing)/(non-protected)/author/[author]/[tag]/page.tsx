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
  const blogs = await serverClient.tag.getBlogs({
    tag: params?.tag,
  })
  const blogsData = await serverClient.author.getBlogsByAuthorNameAndTag({
    authorName: params?.author,
    tagSlug: params?.tag,
  })
  return (
    <>
      <AuthorTagDetails data={blogs?.tagData.at(0) as Tag} />
      <BlogsByTag blogsData={blogsData as Blog[]} />
    </>
  )
}

export default page
