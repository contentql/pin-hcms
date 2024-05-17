'use client'

import { Blog, Media } from '@payload-types'
import Image from 'next/image'

import {
  BentoGrid,
  BentoGridItem,
} from '@/app/(app)/(marketing)/(non-protected)/blog/_components/Bento-grid'

export function BentoGridDemo({ blogsData }: { blogsData: Blog[] }) {
  return (
    <>
      {console.log('blogsData', blogsData)}

      <BentoGrid className='max-w-full mx-auto'>
        {blogsData?.map((blog, index) => (
          <BentoGridItem
            key={index}
            title={blog?.title}
            description={blog?.sub_title}
            header={
              <Skeleton image={blog?.blog_image as Media} index={index} />
            }
            // icon={item.icon}
            className={`${index === 3 || index === 6 ? 'md:col-span-2' : ''} min-h-[100px]`}
          />
        ))}
      </BentoGrid>
    </>
  )
}
const Skeleton = ({ image, index }: { image: Media; index: number }) => (
  <div className='flex flex-1 w-full rounded-15 h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
    <Image
      className='rounded-[15px]'
      style={{ objectFit: 'cover' }}
      src={
        index === 3 || index === 6
          ? image?.sizes?.blog_image?.url || ''
          : image?.url || ''
      }
      alt={image?.alt || ''}
      height={
        index === 3 || index === 6
          ? image?.sizes?.blog_image?.height!
          : image?.height!
      }
      width={
        index === 3 || index === 6
          ? image?.sizes?.blog_image?.width!
          : image?.width!
      }
    />
  </div>
)
