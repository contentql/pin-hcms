'use client'

import { Blog, BlogsCarouselTypes, Media, User } from '@payload-types'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

import MobileCard from '@/components/ui/MobileCard'
import { useResponsive } from '@/hooks/useResponsive'
import { formatDate } from '@/utils/dateFormatter'

function BlogsCarousel(blogsData: BlogsCarouselTypes) {
  const { isMobile } = useResponsive()
  const readingTime = require('reading-time')
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
    <div className='container px-2 py-20 text-white md:px-20'>
      <h1 className='pb-4 text-3xl font-bold'>{blogsData?.title}</h1>
      {isMobile ? (
        <MobileCard blogs={blogsData?.latest_blogs} />
      ) : (
        <div className='grid grid-cols-1 gap-x-4 gap-y-4  md:grid-cols-2  lg:grid-cols-4'>
          <div className='col-span-1 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2'>
            <Slider {...settings}>
              {blogsData?.latest_blogs?.map((blog, i) => (
                <div
                  key={i}
                  className='flex flex-col space-y-4 rounded-3xl border-none bg-[#1e2846] p-4 text-white'>
                  <div className='flex gap-x-4 text-gray-400'>
                    <p>
                      {
                        readingTime((blog?.value as Blog)?.description_html)
                          ?.text
                      }
                    </p>
                    <span>-</span>
                    <p>{formatDate((blog?.value as Blog)?.createdAt)}</p>
                  </div>
                  <Link
                    href={`/blog/${(blog?.value as Blog)?.slug}`}
                    className='line-clamp-1 text-3xl font-bold transition-all duration-300 hover:underline'>
                    {(blog?.value as Blog)?.title}
                  </Link>
                  {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
                  <img
                    className='mx-auto h-[20rem] w-full rounded-2xl'
                    src={
                      ((blog?.value as Blog)?.blog_image as Media)?.url || ''
                    }
                    width={400}
                    height={400}
                    alt='blog'
                  />
                  <p className='line-clamp-3 text-lg font-normal text-gray-300'>
                    {(blog?.value as Blog)?.sub_title}
                  </p>

                  <div className='flex flex-wrap space-x-5 '>
                    {(blog?.value as Blog)?.author?.map((author, index) => (
                      <div
                        className='group flex items-center space-x-2'
                        key={index}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className='h-5 w-5 rounded-full'
                          src={(author?.value as User)?.imageUrl || ''}
                          alt='user'
                        />
                        <p className='group-hover:text-indigo-600'>
                          {(author?.value as User)?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {blogsData?.latest_blogs?.slice(0, 4)?.map((blog, i) => (
            <div className='col-span-1 row-span-1 ' key={i}>
              <div className='group relative h-full w-full text-white  transition-all duration-500 hover:scale-105 '>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={((blog?.value as Blog)?.blog_image as Media)?.url || ''}
                  alt='blog'
                  height={1000}
                  className='h-[100%] w-[100%] rounded-3xl object-cover  brightness-50 group-hover:brightness-100'
                />
                <Link
                  href={`/blog/${(blog?.value as Blog)?.slug}`}
                  className='absolute bottom-4 left-4 line-clamp-2 text-xl font-extrabold'>
                  {(blog?.value as Blog)?.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogsCarousel
