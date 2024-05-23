'use client'

import { Blog, Media } from '@payload-types'
import Image from 'next/image'

import {
  BentoGrid,
  BentoGridItem,
} from '@/app/(app)/(marketing)/(non-protected)/blog/_components/Bento-grid'

export function BentoGridDemo({ blogsData }: { blogsData: Blog[] }) {
  console.log('first blog', blogsData)
  return (
    <BentoGrid className='max-w-full mx-auto my-7 pt-20 px-6'>
      {blogsData?.map((blog, index) => (
        <BentoGridItem
          key={index}
          id={blog.id}
          title={blog?.title}
          description={blog?.sub_title}
          header={
            <Skeleton
              image={blog?.blog_image as Media}
              size={blog?.select_blog_size?.at(0)}
            />
          }
          // icon={item.icon}
          className={`md:col-span-${blog?.select_blog_size?.at(0)} ${blog?.select_blog_size?.at(0) === '3' ? 'md:row-span-2' : 'md:row-span-1'} min-h-[100px]`}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = ({
  image,
  size,
}: {
  image: Media
  index: number
  size: string
}) => (
  <div className='flex flex-1 w-full rounded-15 h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
    <Image
      className='rounded-[15px]'
      style={{ objectFit: 'cover' }}
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
            : 480
      }
    />
  </div>
)
