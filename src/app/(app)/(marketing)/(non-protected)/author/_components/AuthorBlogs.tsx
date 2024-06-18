'use client'

import { Blog, Tag } from '@payload-types'
import Link from 'next/link'
import { BsCalendar } from 'react-icons/bs'
import { IoAlarmOutline } from 'react-icons/io5'

import { trpc } from '@/trpc/client'
import { formatDate } from '@/utils/dateFormatter'
import { getTagColors } from '@/utils/getColor'

export default function AuthorBlogs({ blogs }: { blogs: Blog[] }) {
  const { data: tags } = trpc.tag.getAllTags.useQuery()
  const blogsData = blogs
  return (
    <section className='px-2 py-20 md:px-20'>
      <div className='flex flex-col justify-center gap-4 lg:flex-row'>
        <div className='w-full md:max-w-[20%]'>
          <Tags tags={tags as Tag[]} />
        </div>
        <Blogs blogsData={blogsData as Blog[]} />
      </div>
    </section>
  )
}

const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <section className='text-md sticky top-24 w-full text-gray-900 dark:text-white '>
      <div className='flex flex-col gap-y-4'>
        {tags?.map((tag, index) => (
          <div className='flex flex-row items-center gap-x-4' key={index}>
            <div
              className={`h-6 w-6 rounded-md bg-green-500 text-center ${getTagColors({ color: tag?.color || 'blue' })}`}>
              {index + 1}
            </div>
            <div className='cursor-pointer'>{tag?.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Blogs = ({ blogsData }: { blogsData: Blog[] }) => {
  return (
    <div className='space-y-8'>
      {blogsData?.map((blog, index) => (
        <BlogCard key={index} blogData={blog as Blog} />
      ))}
      <Link
        href='cql/welcome'
        className='mt-10 rounded-full bg-indigo-600 px-4 py-2 text-center text-white hover:bg-indigo-500'>
        View All
      </Link>
    </div>
  )
}
const BlogCard = ({ blogData }: { blogData: Blog }) => {
  const readingTime = require('reading-time')

  return (
    <section className='flex min-h-56 w-full flex-col gap-4 overflow-hidden rounded-3xl  border-[1px] p-5 text-gray-900 shadow-md dark:text-white lg:flex-row'>
      <div className='relative flex w-[10rem] flex-row justify-center gap-y-4 md:flex-col'>
        <div
          className={`${getTagColors({ color: (blogData?.tags?.at(0)?.value as Tag)?.color || 'blue' })} absolute -left-6 top-0 cursor-pointer rounded-r-full py-2 pl-6 pr-2 font-bold transition-all duration-300 ease-in hover:pl-8`}>
          {(blogData?.tags?.at(-1)?.value as Tag)?.title}
        </div>
        <div className='flex items-center space-x-4 text-gray-400'>
          <BsCalendar size={22} style={{ color: '#4f46e5' }} />
          <p>{formatDate(blogData?.createdAt)}</p>
        </div>
        <div className='flex items-center space-x-4 text-gray-400'>
          <IoAlarmOutline
            size={24}
            style={{ color: '#4f46e5', fontWeight: 'bolder' }}
          />
          <p>{readingTime(blogData?.description_html)?.text}</p>
        </div>
      </div>
      <div className='flex w-full flex-col justify-between gap-y-6 text-left md:w-[45rem]'>
        <Link
          href={`/blog/${blogData?.slug}`}
          className='line-clamp-1 text-2xl font-extrabold hover:underline '>
          {blogData?.title}
        </Link>
        <div className='text-md line-clamp-3'>{blogData?.sub_title}</div>
        <div className='flex justify-between'>
          <div className='flex gap-x-4'>
            {blogData?.tags?.map((tag, index) => (
              <div
                className='group flex cursor-pointer items-center justify-center space-x-2'
                key={index}>
                <div
                  className={`h-2 w-2 rounded-full ${getTagColors({ color: (tag?.value as Tag)?.color || 'blue' })}`}
                />
                <p className='underline-from-left'>
                  {(tag?.value as Tag)?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
