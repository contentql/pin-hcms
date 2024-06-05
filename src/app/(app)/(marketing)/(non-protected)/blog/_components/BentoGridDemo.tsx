'use client'

import { Blog, Media } from '@payload-types'
import Image from 'next/image'

import {
  BentoGrid,
  BentoGridItem,
} from '@/app/(app)/(marketing)/(non-protected)/blog/_components/Bento-grid'

export function BentoGridDemo({ blogsData }: { blogsData: Blog[] }) {
  return (
    <BentoGrid className='mx-2 mt-28 max-w-full overflow-hidden pb-5 md:mx-10 lg:mx-20'>
      {blogsData?.map((blog, index) => {
        const colSpanClass = getColSpanClass(blog?.select_blog_size)
        return (
          <BentoGridItem
            key={index}
            blog={blog}
            header={
              <Skeleton
                image={blog?.blog_image as Media}
                size={blog?.select_blog_size as string}
              />
            }
            className={`${colSpanClass} group min-h-[100px]`}
          />
        )
      })}
    </BentoGrid>
  )
}

const Skeleton = ({ image, size }: { image: Media; size: string }) => (
  <div className='flex h-full min-h-[10rem] w-full flex-1 overflow-hidden rounded-t-xl bg-white dark:bg-black'>
    <Image
      className='w-full rounded-t-xl object-cover transition-all duration-300'
      src={
        size === '3'
          ? image?.sizes?.blog_image_size3?.url || ''
          : size === '2'
            ? image?.sizes?.blog_image_size2?.url || ''
            : image?.url || ''
      }
      alt={image?.alt || ''}
      height={
        size === '3'
          ? image?.sizes?.blog_image_size3?.height!
          : size === '2'
            ? image?.sizes?.blog_image_size2?.height!
            : 185
      }
      width={
        size === '3'
          ? image?.sizes?.blog_image_size3?.width!
          : size === '2'
            ? image?.sizes?.blog_image_size2?.width!
            : 485
      }
    />
  </div>
)

const getColSpanClass = (size: string | undefined | null) => {
  switch (size) {
    case '1':
      return 'md:col-span-1'
    case '2':
      return 'md:col-span-2'
    // case '3':
    //   return 'md:col-span-3'
    default:
      return ''
  }
}
