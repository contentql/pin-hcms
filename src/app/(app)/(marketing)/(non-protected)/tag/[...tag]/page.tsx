import { BlogPostsGrid } from '../../blog/_components/BlogPostsGrid'
import TagDetails from '../_components/TagDetails'
import { Blog } from '@payload-types'

import { PageNotFound } from '@/components/404'
import { serverClient } from '@/trpc/serverClient'

const page = async ({
  params: {
    tag: [tagId],
  },
}: {
  params: { tag: string[] }
}) => {
  try {
    const blogs = await serverClient.tag.getBlogs({ tag: tagId })
    if (!blogs) return <PageNotFound />

    return (
      <div>
        <TagDetails data={blogs?.tagData.at(0) as any} />

        {blogs?.blogsData?.length !== 0 ? (
          <BlogPostsGrid blogsData={blogs?.blogsData as Blog[]} />
        ) : (
          <p>Tag is not present</p>
        )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}

export default page
