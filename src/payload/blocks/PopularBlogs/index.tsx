import { Blog, Media, PopularBlogsTypes } from '@payload-types'
import Link from 'next/link'
import { ReactNode } from 'react'

import { cn } from '@/utils/cn'
import { formatDate } from '@/utils/dateFormatter'

/* eslint-disable @next/next/no-img-element */
const PopularBlogs = (popularBlogs: PopularBlogsTypes) => {
  return (
    <div className='flex items-center justify-center pb-40 pt-20'>
      <div className='w-96 px-4 2xl:container sm:w-auto md:px-6 lg:px-20 2xl:mx-auto'>
        <div role='main' className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-4xl font-semibold leading-9 text-gray-50'>
            {popularBlogs?.title}
          </h1>
          <p className='mt-4 w-11/12 text-center text-base leading-normal text-white md:w-10/12 lg:w-1/2'>
            {popularBlogs?.sub_title}
          </p>
        </div>
        <div className='mt-10 md:mt-20'>
          <BlogsGrid>
            {popularBlogs?.popular_blogs?.map((blog, idx) => (
              <BlogCard key={idx} index={idx} blog={blog?.value as Blog} />
            ))}
          </BlogsGrid>
        </div>
      </div>
    </div>
  )
}

export default PopularBlogs

const BlogsGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-4 gap-4',
        className,
      )}>
      {children}
    </div>
  )
}

const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  const readingTime = require('reading-time')
  return (
    <div
      key={blog?.id}
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-xl',
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        'transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        (index === 2 || index === 3) && 'col-span-2 row-span-2',
      )}>
      <div
        className='transition-all duration-300 ease-in-out group-hover:blur-sm group-hover:filter'
        style={{
          backgroundImage: `url(${(blog?.blog_image as Media)?.url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      />
      <div className='pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
        <div className='flex  origin-left transform-gpu gap-2 text-white transition-all duration-300 ease-in-out group-hover:scale-75'>
          {/* {(blog?.author?.value as User)?.imageUrl! ? (
            <Image
              className='rounded-full duration-500 ease-in hover:scale-75'
              width={45}
              height={45}
              src={(blog?.author?.value as User)?.imageUrl as string}
              alt='Rounded avatar'></Image>
          ) : (
            <div className='h-10 w-10 rounded-full bg-gray-400 dark:bg-gray-400'></div>
          )} */}
          {/* <AnimatedTooltip items={blog?.author as any} /> */}
          <div>
            {/* <p className='font-semibold'>
              {(blog?.author?.value as User)?.name}
            </p> */}
            <p className='text-xs text-gray-400'>
              {formatDate(blog?.createdAt)}
            </p>
          </div>
        </div>
        <h3 className='line-clamp-1 text-xl font-semibold text-neutral-700 dark:text-neutral-300'>
          {blog?.title}
        </h3>
        <p className='line-clamp-1 max-w-lg text-gray-400'>{blog?.sub_title}</p>
      </div>

      <div
        className={cn(
          'absolute -bottom-2 flex w-full translate-y-10 transform-gpu flex-row items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
        )}>
        <div className='font-bold text-white'>
          {readingTime(blog?.description_html)?.text}
        </div>
        <Link
          href={`/blog/${blog?.slug}`}
          className='rounded-lg p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
          View More
        </Link>
      </div>
      <div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10' />
    </div>
  )
}
