import AuthorTagDetails from '../../_components/AuthorTagDetails'
import BlogsByTag from '../../_components/BlogsByTag'
import { Blog, Tag, User } from '@payload-types'

import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    author: string
    tag: string
  }
}

async function page({ params }: PageProps) {
  const tagData = await serverClient.tag.getTagBySlug({
    slug: params?.tag,
  })

  const authorData = await serverClient.author.getAuthorByName({
    author: params?.author,
  })
  const blogsData = await serverClient.author.getBlogsByAuthorNameAndTag({
    authorName: params?.author,
    tagSlug: params?.tag,
  })
  return (
    <>
      <AuthorTagDetails
        tagDetails={tagData as Tag}
        authorDetails={authorData as User}
      />
      <BlogsByTag blogsData={blogsData?.blogs as Blog[]} />
    </>
  )
}

export default page
