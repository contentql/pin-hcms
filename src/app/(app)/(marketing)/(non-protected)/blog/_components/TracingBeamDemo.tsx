'use client'

import { env } from '@env'
import { Blog, Media, Tag, User } from '@payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import RichText from '@/payload/blocks/RichText'
import { trpc } from '@/trpc/client'

import TagsCard from './tagsCard'

interface Tags extends Tag {
  count: number
}
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

  //fetch tags

  const { data: tagsDetails } = trpc.tag.getAllTags.useQuery()

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

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  }

  return (
    <div>
      <div className='relative mx-auto mt-32 flex w-full justify-center antialiased'>
        <div key={`content-0`} className=''>
          <div className='prose prose-sm mx-auto max-w-full text-sm dark:prose-invert'>
            <div className='mx-auto max-w-[71rem]'>
              <div className='text-center text-gray-500'>
                <span className='mr-1 text-2xl '>&#8226;</span>{' '}
                {blogReadTime?.text}
              </div>

              <h2
                className={twMerge(
                  ' mb-10 text-center text-5xl font-extrabold underline-offset-1 md:mb-20',
                )}>
                <span>{dataToUse?.title}</span>
              </h2>

              {dataToUse?.blog_image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={(dataToUse?.blog_image as Media)?.url || ''}
                  alt={(dataToUse?.blog_image as Media)?.alt || ''}
                  height='1000'
                  width='1030'
                  className='mx-auto mb-10 rounded-lg'
                />
              )}
              <div className='scroll-reveal'>
                <p>
                  <span>{dataToUse?.sub_title}</span>
                </p>
              </div>
            </div>

            <div className='mt-10 flex items-center justify-between'>
              <div className='flex items-center justify-center space-x-2'>
                {/* {(blog?.author?.value as User)?.imageUrl ? (
                  <img
                    className='rounded-full duration-500 ease-in hover:scale-95'
                    width={60}
                    height={60}
                    src={(blog?.author?.value as User)?.imageUrl as string}
                    alt='Rounded avatar'></i>
                ) : (
                  <div className='h-14 w-14 rounded-full bg-gray-200 dark:bg-white'></div>
                )} */}
                <div className='mb-10 flex w-full flex-row items-center justify-center'>
                  <AnimatedTooltip items={dataToUse?.author as any} />
                </div>

                {/* <div>
                  <p className='text-lg font-semibold'>
                    {(blog?.author?.value as User)?.name}
                  </p>
                  {/* <p className='text-md md:-mt-4'>
                    {formatDate(blog?.createdAt as string)}
                  </p> */}
                {/* </div> */}
              </div>
              <p className='text-md '>
                {formatDate(blog?.createdAt as string)}
              </p>
              {/* <div>{blogReadTime?.text}</div> */}
            </div>
            <div className='mx-auto flex justify-end gap-4 border-b-[1px] border-black dark:border-white'>
              {dataToUse?.tags?.map((tag, index) => (
                <motion.p
                  key={index}
                  className='cursor-pointer rounded-md border-2 border-gray-500  px-4 py-1 hover:border-gray-100 '
                  variants={fadeInAnimationVariants}
                  initial='initial'
                  whileInView='animate'
                  viewport={{
                    once: true,
                  }}
                  custom={index}>
                  {(tag?.value as Tag)?.title}
                </motion.p>
              ))}
            </div>
            <div className='flex w-[100%] flex-col justify-between md:flex-row'>
              <div className='w-full text-xl leading-7 md:w-[90%]'>
                <RichText
                  content={dataToUse?.description}
                  blockType={'RichText'}
                  locale={''}
                  blockIndex={0}
                />
              </div>
              <div className='w-full md:w-[20%]'>
                <TagsCard tags={tagsDetails as Tags[]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const AnimatedTooltip = ({
  items,
}: {
  items: { relationTo: 'users'; value: User }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  )
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  )
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <>
      {items?.map((item, idx) => (
        <div
          className='group  relative -mr-4'
          key={item?.value?.name}
          onMouseEnter={() => setHoveredIndex(item?.value?.id!)}
          onMouseLeave={() => setHoveredIndex(null)}>
          {hoveredIndex === item?.value?.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: 'nowrap',
              }}
              className='absolute -left-1/2 -top-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl'>
              <div className='absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent ' />
              <div className='absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent ' />
              <div className='relative z-30 text-base font-bold text-white'>
                {item?.value?.name}
              </div>
              <div className='text-xs text-white'>{item?.value?.email}</div>
            </motion.div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item?.value?.imageUrl as string}
            alt={item?.value?.name as string}
            className='relative !m-0 h-10 w-10 rounded-full border-2 border-white object-cover object-top !p-0 transition  duration-500 group-hover:z-30 group-hover:scale-105'
          />
        </div>
      ))}
    </>
  )
}
