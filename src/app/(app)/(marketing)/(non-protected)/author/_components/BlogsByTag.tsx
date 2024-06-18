import { Blog, Media, Tag } from '@payload-types'

import { getTagColors } from '@/utils/getColor'

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
    <div className='flex flex-col items-start justify-start gap-y-4 text-white md:flex-row md:gap-x-10'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={(blog?.blog_image as Media)?.url || ''}
        alt='blog'
        className='h-full w-full rounded-lg object-cover md:h-40 md:w-40 md:rounded-full'
      />
      <div className='space-y-2'>
        <h3 className='text-2xl font-semibold'>{blog?.title}</h3>
        <p className='text-lg leading-7 text-gray-400'>{blog?.sub_title}</p>
        {/* <div className='flex items-center gap-x-2'>
          <div className='h-2 w-2 rounded-full bg-[#26304e]' />
          <p className='text-gray-400'>{formatDate(blog?.createdAt)}</p>
        </div> */}
        <div className='flex flex-wrap gap-x-4'>
          {blog?.tags?.map((tag, index) => (
            <div
              className={`rounded-lg  px-2 py-1 text-sm font-semibold uppercase ${getTagColors({ color: (tag?.value as Tag)?.color || 'blue' })}`}
              key={index}>
              {(tag?.value as Tag)?.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
