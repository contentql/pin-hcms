'use client'
import { trpc } from '@/trpc/client'
import { Blog } from '@payload-types'

const AllPages = ({ slug,data }: { slug: string,data:Blog }) => {
    const {data:blog}=trpc.blog.getBlogBySlug.useQuery({slug},{initialData:data})
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: blog?.description_html!,
      }}
    ></div>
  )
}

export default AllPages
