import { serverClient } from '@/trpc/serverClient'

const page = async () => {
  const blogsData = await serverClient.blog.getAllBlogs()

  return ''
  // <BlogList blogs={blogsData} />
}

export default page
