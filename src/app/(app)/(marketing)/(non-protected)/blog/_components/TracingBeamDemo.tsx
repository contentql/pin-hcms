'use client'

import RichText from '@/payload/blocks/RichText'
import { trpc } from '@/trpc/client'
import { env } from '@env'
import { Blog, Media, User } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'
import Image from 'next/image'

import { twMerge } from 'tailwind-merge'
import TagsCard from './tagsCard'

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
      <div className='relative mx-auto mt-40 flex w-full justify-center antialiased'>
        <div key={`content-0`} className=''>
          <div className='prose prose-sm max-w-full mx-auto text-sm dark:prose-invert'>
          <div className='mx-auto max-w-[71rem]'>
              {dataToUse?.blog_image && (
              <Image
                src={(dataToUse?.blog_image as Media)?.url || ''}
                alt={(dataToUse?.blog_image as Media)?.alt || ''}
                height='1000'
                width='1030'
                className='mx-auto mb-10 rounded-lg'
              />
            )}
            <div className='scroll-reveal'>
              <h2
              className={twMerge(
                'mb-4 text-center font-extrabold ',
              )}
            >
              <span>{dataToUse?.title}</span>
            </h2>
             <p className='font-600'><span>Testing data for scrolling animation to read blogs more efficiently and obtain more relevant information. This approach enhances user experience by making content more engaging and easier to consume. Keep working, stay positive, and have a great day. Embrace a positive mindset and keep pushing forward!</span></p>
            </div>
          </div>
            <div className='flex justify-between border-b-[1px] border-black pb-10'>
              <div className='flex flex-col justify-between gap-x-3 gap-y-3 md:flex-row md:gap-y-0'>
                <div className='flex gap-2 '>
                  <Image
                    className='rounded-full duration-500 ease-in hover:scale-95'
                    width={60}
                    height={60}
                    src={(blog?.author?.value as User)?.imageUrl as string}
                    alt='Rounded avatar'
                  ></Image>
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
            <div className='flex w-[100%] flex-col md:flex-row justify-between'>
              <div className='w-full md:w-[60%] text-xl leading-7'>
              <RichText
                content={dataToUse?.description}
                blockType={'RichText'}
                locale={''}
                blockIndex={0}
              />
            </div>
            <div className='w-full md:w-[30%]'>
              <TagsCard/>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}
