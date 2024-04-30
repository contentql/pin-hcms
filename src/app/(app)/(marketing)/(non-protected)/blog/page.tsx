import BlogList from '@/app/(app)/(testing)/todo/_components/BlogList'
import { serverClient } from '@/trpc/serverClient'


const page = async () => {
  const blogsData = await serverClient.blog.getAllBlogs()

  return (
    <BlogList blogs={blogsData} />
  )
}

export default page
