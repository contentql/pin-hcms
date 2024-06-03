import AllBlogs from '@/app/(app)/(marketing)/(non-protected)/blog/_components/AllBlogs'
import { serverClient } from '@/trpc/serverClient'

const page = async () => {
  const blogsData = await serverClient.blog.getAllBlogs()

  return (
    <div>
      <AllBlogs blogsData={blogsData} />
    </div>
  )
}
export default page
