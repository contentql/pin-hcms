'use client'

import { Blog, Media, Tag, TrendingBlogsTypes } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { BsCalendar } from 'react-icons/bs'
import { IoAlarmOutline } from 'react-icons/io5'

import { trpc } from '@/trpc/client'
import { formatDate } from '@/utils/dateFormatter'

const getTagColors = ({ color }: { color: String }) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-white dark:bg-blue-900 dark:text-white'
    case 'gray':
      return 'bg-gray-100 text-white dark:bg-gray-700 dark:text-white'
    case 'red':
      return 'bg-red-100 text-white dark:bg-red-900 dark:text-white'
    case 'green':
      return 'bg-green-100 text-white dark:bg-green-900 dark:text-white'
    case 'yellow':
      return 'bg-yellow-100 text-white dark:bg-yellow-900 dark:text-white'
    case 'indigo':
      return 'bg-indigo-100 text-white dark:bg-indigo-900 dark:text-white'
    case 'purple':
      return 'bg-purple-100 text-white dark:bg-purple-900 dark:text-white'
    case 'pink':
      return 'bg-pink-100 text-white dark:bg-pink-900 dark:text-white'
    default:
      return 'bg-blue-100 text-white dark:bg-blue-900 dark:text-white'
  }
}

export default function TrendingBlogs(TrendingBlogs: TrendingBlogsTypes) {
  const { data: tags } = trpc.tag.getAllTags.useQuery()
  const { data: blogsData } = trpc.blog.getAllBlogs.useQuery()
  return (
    <section className='mx-2  mt-20 md:mx-20'>
      <div className='mx-auto mb-20 w-full px-4 text-center text-white lg:w-6/12'>
        <h1 className='text-3xl font-bold'>{TrendingBlogs?.title}</h1>
        <p className='text-md mt-4'>{TrendingBlogs?.sub_title}</p>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row'>
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
            <Image
              src={(tag?.tagImage as Media)?.url || ''}
              width={30}
              height={30}
              alt='image'
              className='rounded-full'
            />
            <div className='cursor-pointer hover:underline'>{tag?.title}</div>
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
    </div>
  )
}
const BlogCard = ({ blogData }: { blogData: Blog }) => {
  const readingTime = require('reading-time')

  return (
    <section className='flex min-h-56 w-full flex-col gap-4 overflow-hidden rounded-xl border-[1px] border-gray-500 p-5 text-gray-900 shadow-md dark:text-white lg:flex-row'>
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
                  className={`h-2 w-2 rounded-full transition-all duration-300 ease-in group-hover:pr-4 ${getTagColors({ color: (tag?.value as Tag)?.color || 'blue' })}`}
                />
                <p>{(tag?.value as Tag)?.title}</p>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}