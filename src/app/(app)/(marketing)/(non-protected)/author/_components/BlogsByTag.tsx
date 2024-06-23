import { Blog, Media } from '@payload-types'
import Link from 'next/link'

import { formatDate } from '@/utils/dateFormatter'

function BlogsByTag({ blogsData }: { blogsData: Blog[] }) {
  return (
    <section className='container max-w-5xl py-20'>
      <div className='flex flex-col  space-y-4 md:space-y-16'>
        {blogsData?.map((blog, index) => <BlogCard key={index} blog={blog} />)}
      </div>
    </section>
  )
}

export default BlogsByTag

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className=' mx-auto flex w-full flex-col justify-center  gap-y-4 text-white md:max-w-2xl '>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Link href={`/blog/${blog?.slug}`} className='group'>
        <div className='inline-flex items-center gap-x-2'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={(blog?.blog_image as Media)?.url || ''}
            alt='blog'
            className='h-12 w-12 rounded-lg object-cover'
          />
          <h2 className='line-clamp-1 text-2xl font-semibold'>{blog?.title}</h2>
        </div>
        <div className='space-y-2 rounded-lg bg-[#26304e] p-4 text-gray-400 transition-all duration-500 group-hover:scale-105'>
          <p className='text-lg leading-7 '>{blog?.sub_title}</p>
          <p>{formatDate(blog?.createdAt)}</p>
        </div>
      </Link>
    </div>
  )
}
