'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { TracingBeam } from './TracingBeam'
import { Blog, Media } from '~/payload-types'
import RichText from '~/src/payload/blocks/RichText'

export function TracingBeamDemo({ slug, data }: { slug: string; data: Blog }) {
  const date = new Date(data?.createdAt)
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`

  const readingTime = require('reading-time')
  const blogReadTime = readingTime(data?.description_html || '')

  return (
    <TracingBeam className='px-6 pt-20'>
      <div className='max-w-[71rem] mx-auto antialiased mt-10 relative flex justify-center'>
        <div key={`content-0`} className='mb-10'>
          {/* <h2 className='bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4'>
              {item.badge}
            </h2> */}

          <div className='text-sm  prose max-w-full prose-sm dark:prose-invert'>
            {data?.blog_image && (
              <Image
                src={(data?.blog_image as Media)?.url || ''}
                alt={(data?.blog_image as Media)?.alt || ''}
                height='1000'
                width='1030'
                className='rounded-lg mb-10 mx-auto'
              />
            )}
            <div className='flex justify-between border-b-[1px] border-black pb-10'>
              <div>
                <div>Author {data?.author_name}</div>
                <div>Created on {formattedDate}</div>
              </div>
              <div>{blogReadTime.text}</div>
            </div>
            <p className={twMerge('mb-10 text-5xl font-extrabold underline')}>
              {data?.title}
            </p>
            <div className='leading-7 text-xl w-full'>
              <RichText
                content={data?.description}
                blockType={'RichText'}
                locale={''}
                blockIndex={0}
              />
            </div>

            {/* <div
              className='leading-7 text-xl'
              dangerouslySetInnerHTML={{
                __html: data?.description_html!,
              }}></div> */}
          </div>
        </div>
      </div>
    </TracingBeam>
  )
}
