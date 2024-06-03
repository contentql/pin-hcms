import AllBlogs from '@/app/(app)/(marketing)/(non-protected)/blog/_components/AllBlogs'
import { serverClient } from '@/trpc/serverClient'

import { HorizontalScrollCarousel } from './_components/HorizontalScrollCarousel'

const page = async () => {
  const blogsData = await serverClient.blog.getAllBlogs()

  return (
    <div>
      <HorizontalScrollCarousel blogsData={blogsData} />
      <AllBlogs blogsData={blogsData} />
    </div>
  )
}
export default page
