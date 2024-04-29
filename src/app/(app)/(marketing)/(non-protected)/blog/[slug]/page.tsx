import { getBlogBySlug } from '@/routers/blogs-router'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const blog = await getBlogBySlug(slug)

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: blog?.description_html!,
      }}
    ></div>
  )
}

export default Page
