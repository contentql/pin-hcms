'use client'

import { Blog, Media } from '@payload-types'
import Image from 'next/image'

import {
  BentoGrid,
  BentoGridItem,
} from '@/app/(app)/(marketing)/(non-protected)/blog/_components/Bento-grid'

export function BentoGridDemo({ blogsData }: { blogsData: Blog[] }) {
  return (
    <BentoGrid className='max-w-full pb-5 mt-28 mx-20 overflow-hidden'>
      {blogsData?.map((blog, index) => {
        const colSpanClass = getColSpanClass(blog?.select_blog_size)
        const rowSpanClass =
          blog?.select_blog_size === '3' ? 'md:row-span-2' : 'md:row-span-1'

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
            className={`${colSpanClass} ${rowSpanClass} min-h-[100px] group`}
          />
        )
      })}
    </BentoGrid>
  )
}

const Skeleton = ({ image, size }: { image: Media; size: string }) => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-t-xl overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
    <Image
      className='transition-all duration-300 rounded-t-xl object-cover'
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
    case '3':
      return 'md:col-span-3'
    default:
      return ''
  }
}
