'use client'

import { Blog } from '@payload-types'

import { ThreeDCardDemo } from './ThreeDCard'

export const PopularBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  return (
    <div className='mt-[100px] text-center'>
      <h1 className='mb-[20px] text-4xl font-extrabold underline'>
        Popular Blogs
      </h1>
      <div className='relative mx-auto grid h-screen w-screen max-w-7xl  grid-cols-1 gap-4 p-10 md:grid-cols-3'>
        <div className='mx-auto grid w-screen max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {blogsData?.map((item, index) => (
            <div key={index}>
              <ThreeDCardDemo item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
