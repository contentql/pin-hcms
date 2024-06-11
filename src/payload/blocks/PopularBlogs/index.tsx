import { Blog, Media, PopularBlogsTypes } from '@payload-types'
import Image from 'next/image'

import { formatDate } from '@/utils/dateFormatter'

/* eslint-disable @next/next/no-img-element */
const PopularBlogs = (popularBlogs: PopularBlogsTypes) => {
  console.log('popular blogs', popularBlogs)
  return (
    <div className='flex items-center justify-center bg-gray-900 pb-40 pt-20'>
      <div className='w-96 px-4 2xl:container sm:w-auto md:px-6 lg:px-20 2xl:mx-auto'>
        <div role='main' className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-4xl font-semibold leading-9 text-gray-50'>
            {popularBlogs?.title}
          </h1>
          <p className='mt-4 w-11/12 text-center text-base leading-normal text-white md:w-10/12 lg:w-1/2'>
            {popularBlogs?.sub_title}
          </p>
        </div>
        <div className='mt-10 grid grid-cols-1 place-content-center gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-4'>
          {popularBlogs?.popular_blogs?.map((blog, index) => (
            <div
              key={index}
              className={`relative ${(index === 2 || index === 3) && 'md:col-span-2 lg:row-span-2'}`}>
              <div>
                <p className='absolute right-0 top-0 p-6 text-xs font-medium leading-3 text-white'>
                  {formatDate((blog?.value as Blog)?.createdAt)}
                </p>
                <div className='absolute bottom-0 left-0 p-6'>
                  <h2 className='5 line-clamp-1 text-xl font-semibold text-white'>
                    {(blog?.value as Blog)?.title}
                  </h2>
                  <p className='mt-2 line-clamp-2 text-base leading-4 text-white'>
                    {(blog?.value as Blog)?.sub_title}
                  </p>
                  <a
                    href='javascript:void(0)'
                    className='mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none'>
                    <p className='pr-2 text-sm font-medium leading-none'>
                      Read More
                    </p>
                    <svg
                      className='fill-stroke'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M5.75 12.5L10.25 8L5.75 3.5'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <Image
                src={((blog?.value as Blog)?.blog_image as Media)?.url || ''}
                width={1000}
                height={1000}
                className='min-h-[250px] w-full object-cover'
                alt='image'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularBlogs
