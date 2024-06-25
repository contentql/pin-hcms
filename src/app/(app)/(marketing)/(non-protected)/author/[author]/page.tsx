import AuthorBlogs from '../_components/AuthorBlogs'
import AuthorDetails from '../_components/AuthorDetails'
import { User } from '@payload-types'

import { PageNotFound } from '@/components/404'
import { serverClient } from '@/trpc/serverClient'

interface PageProps {
  params: {
    author: string
  }
  searchParams: {
    tag: string
  }
}

const Author = async ({ params, searchParams }: PageProps) => {
  try {
    const author = await serverClient.author.getAuthorByName({
      author: params?.author,
    })
    if (!author) {
      return <PageNotFound />
    }
    const authorTags = await serverClient.author.getAllTagsByAuthorName({
      author: params?.author,
    })
    const tag = searchParams?.tag ? searchParams?.tag : authorTags?.at(0)?.slug
    const blogs = await serverClient.author.getBlogsByAuthorNameAndTag({
      authorName: params?.author,
      tagSlug: tag!,
    })
    return (
      <>
        <AuthorDetails author={author as User} />
        <AuthorBlogs
          blogsData={blogs?.blogs}
          totalBlogs={blogs?.totalBlogs}
          authorTags={authorTags as any}
        />
      </>
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}

export default Author
