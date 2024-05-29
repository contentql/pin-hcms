'use client'

import { env } from '@env'
import { Blog, Media, User } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import RichText from '@/payload/blocks/RichText'
import { trpc } from '@/trpc/client'

import { TracingBeam } from './TracingBeam'

export function TracingBeamDemo({ slug, data }: { slug: string; data: Blog }) {
  const { data: blog } = trpc.blog.getBlogBySlug.useQuery(
    { slug },
    { initialData: data },
  )

  // Fetch blog data for live preview
  const { data: livePreviewData } = useLivePreview<Blog | undefined>({
    initialData: undefined,
    serverURL: env.NEXT_PUBLIC_PUBLIC_URL,
    depth: 2,
  })

  // Determine which data to use based on whether live preview data is available
  const dataToUse = livePreviewData || blog

  const date = new Date(dataToUse?.createdAt || '')
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`

  const readingTime = require('reading-time')
  const blogReadTime = readingTime(dataToUse?.description_html || '')

  function formatDate(isoDateString: string) {
    const date = new Date(isoDateString)
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
  }

  return (
    <TracingBeam className='px-6 pt-20'>
      <div className='max-w-[71rem] mx-auto antialiased mt-10 relative flex justify-center'>
        <div key={`content-0`} className=''>
          {/* <h2 className='bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4'>
              {item.badge}
            </h2> */}

          <div className='text-sm  prose max-w-full prose-sm dark:prose-invert'>
            {dataToUse?.blog_image && (
              <Image
                src={(dataToUse?.blog_image as Media)?.url || ''}
                alt={(dataToUse?.blog_image as Media)?.alt || ''}
                height='1000'
                width='1030'
                className='rounded-lg mb-10 mx-auto'
              />
            )}
            <div className='flex justify-between border-b-[1px] border-black pb-10'>
              <div className='flex justify-between gap-x-3 flex-col md:flex-row md:gap-y-0 gap-y-3'>
                <div className='flex gap-2 '>
                  <Image
                    className='rounded-full hover:scale-95 ease-in duration-500'
                    width={60}
                    height={60}
                    src={(blog?.author?.value as User)?.imageUrl as string}
                    alt='Rounded avatar'></Image>
                  <div>
                    <p className='text-lg font-semibold'>
                      {(blog?.author?.value as User)?.name}
                    </p>
                    <p className='text-md md:-mt-4'>
                      {formatDate(blog?.createdAt as string)}
                    </p>
                  </div>
                </div>
              </div>
              <div>{blogReadTime.text}</div>
            </div>
            <p
              className={twMerge(
                'mb-4 text-5xl font-extrabold underline text-center',
              )}>
              {dataToUse?.title}
            </p>
            <div className='leading-7 text-xl w-full'>
              <RichText
                content={dataToUse?.description}
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
