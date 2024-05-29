import { BentoGridDemo } from '../../blog/_components/BentoGridDemo'

import { Blog } from '~/payload-types'
import { serverClient } from '~/src/trpc/serverClient'

const page = async ({
  params: {
    tag: [tagId],
  },
}: {
  params: { tag: string[] }
}) => {
  try {
    const blogs = await serverClient.tag.getBlogs({ tag: tagId })
    console.log('trpccccccccccccccccccccccccc', blogs)
    return blogs?.length !== 0 ? (
      <BentoGridDemo blogsData={blogs as Blog[]} />
    ) : (
      <p>Tag is not present</p>
    )
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}

export default page
