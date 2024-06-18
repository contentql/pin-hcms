'use client'

import { Media, User } from '@payload-types'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import { trpc } from '@/trpc/client'
import { formatDate } from '@/utils/dateFormatter'

function BlogsSlider() {
  const readingTime = require('reading-time')
  const { data: blogsData } = trpc.blog.getAllBlogs.useQuery()
  const settings = {
    autoplay: true,
    speed: 700,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  }
  return (
    <div className='grid grid-cols-1 gap-x-4 gap-y-4 px-2  py-20 md:grid-cols-2 md:px-20 lg:grid-cols-4'>
      <div className='col-span-1 row-span-1 space-x-2 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2'>
        <Slider {...settings}>
          {blogsData?.map((blog, i) => (
            <div
              key={i}
              className='flex flex-col space-y-4 rounded-3xl border-none bg-[#1e2846] p-4 text-white'>
              <div className='flex gap-x-4'>
                <p>{readingTime(blog?.description_html)?.text}</p>
                <span>-</span>
                <p>{formatDate(blog?.createdAt)}</p>
              </div>
              <Link
                href={`/blog/${blog?.slug}`}
                className='line-clamp-1 text-3xl font-bold transition-all duration-300 hover:underline'>
                {blog?.title}
              </Link>
              {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
              <img
                className='mx-auto h-[20rem] w-full rounded-2xl'
                src={(blog?.blog_image as Media)?.url || ''}
                width={400}
                height={400}
                alt='blog'
              />
              <p className='line-clamp-3 text-lg font-normal text-gray-300'>
                {blog?.sub_title}
              </p>

              <div className='flex space-x-4'>
                <p> By</p>
                {blog?.author?.map((author, index) => (
                  <p key={index}>{(author?.value as User)?.name}</p>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {blogsData?.slice(0, 4)?.map((blog, i) => (
        <div className='col-span-1 row-span-1 ' key={i}>
          <div className='group relative h-full w-full text-white  transition-all duration-500 hover:scale-105 '>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={(blog?.blog_image as Media)?.url || ''}
              alt='blog'
              height={1000}
              className='h-[100%] w-[100%] rounded-3xl object-cover  brightness-50 group-hover:brightness-100'
            />
            <Link
              href={`/blog/${blog?.slug}`}
              className='absolute bottom-4 left-4 line-clamp-2 text-xl font-extrabold'>
              {blog?.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogsSlider
