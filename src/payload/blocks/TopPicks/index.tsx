'use client'

import { AnimatedTooltip } from '../ui/animated-tooltip'
import { Blog, Media, Tag, TopPicksTypes } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { cn } from '@/utils/cn'
import { formatDate } from '@/utils/dateFormatter'
import { getTagColors } from '@/utils/getColor'

export const TopPicks = (topPicks: TopPicksTypes) => {
  return (
    <section className='px-2 py-20 md:px-20'>
      <h1 className='pb-10 text-4xl font-bold text-white'>{topPicks?.title}</h1>
      <div className='space-y-20'>
        {topPicks?.top_picks?.map((blog, index) => (
          <BlogCard key={index} index={index} blogData={blog?.value as Blog} />
        ))}
      </div>
    </section>
  )
}

export function DirectionAwareHoverDemo({
  imageUrl,
  readTime,
}: {
  imageUrl: string
  readTime: string
}) {
  return (
    <div className='relative flex'>
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className='text-xl font-bold'>{readTime}</p>
      </DirectionAwareHover>
    </div>
  )
}

const BlogCard = ({ blogData, index }: { blogData: Blog; index: number }) => {
  const readingTime = require('reading-time')
  return (
    <section
      className={`mx-auto flex flex-col-reverse items-center justify-around gap-y-8 text-white md:gap-8 lg:gap-20  ${index % 2 !== 0 ? ' md:flex-row' : 'md:flex-row-reverse'} `}>
      <div className='w-full space-y-4 md:w-[50%] md:space-y-10'>
        <h1 className='line-clamp-2  text-3xl font-bold capitalize'>
          {blogData?.title}
        </h1>
        <p className='line-clamp-3'>{blogData?.sub_title}</p>
        <div className='flex flex-col gap-x-10 gap-y-4 xl:flex-row'>
          <AnimatedTooltip items={blogData?.author as any} />
          <div className='flex items-center gap-x-4 text-sm text-gray-300'>
            <div className='h-2 w-2 rounded-full bg-gray-500' />
            <p>{formatDate(blogData?.createdAt)}</p>
          </div>
          <div className=' flex items-center gap-x-4 text-sm text-gray-300'>
            <div className='h-2 w-2 rounded-full bg-gray-500' />
            <p>{readingTime(blogData?.description_html)?.text}</p>
          </div>
        </div>
        <div>
          {blogData?.tags?.map((tag, index) => (
            <Link
              href={'#'}
              key={index}
              className='flex flex-wrap items-center gap-x-2'>
              <div
                className={`rounded-md bg-gray-800 px-2 py-1 transition-all duration-300 hover:bg-gray-700 ${getTagColors({ color: (tag?.value as Tag)?.color || 'blue' })}`}>
                {(tag?.value as Tag)?.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='w-full md:max-w-[50%]'>
        <DirectionAwareHoverDemo
          imageUrl={(blogData?.blog_image as Media)?.url!}
          readTime={readingTime(blogData?.description_html)?.text}
        />
      </div>
    </section>
  )
}

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string
  children: React.ReactNode | string
  childrenClassName?: string
  imageClassName?: string
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [direction, setDirection] = useState<
    'top' | 'bottom' | 'left' | 'right' | string
  >('left')

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!ref.current) return

    const direction = getDirection(event, ref.current)
    console.log('direction', direction)
    switch (direction) {
      case 0:
        setDirection('top')
        break
      case 1:
        setDirection('right')
        break
      case 2:
        setDirection('bottom')
        break
      case 3:
        setDirection('left')
        break
      default:
        setDirection('left')
        break
    }
  }

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement,
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = ev.clientX - left - w / 2
    const y = ev.clientY - top - h / 2

    const dx = Math.abs(x / w)
    const dy = Math.abs(y / h)

    if (dx > dy) {
      return x < 0 ? 3 : 1
    } else {
      return y < 0 ? 0 : 2
    }
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        'group/card relative h-60 w-full overflow-hidden rounded-lg bg-transparent md:h-96 ',
        className,
      )}>
      <AnimatePresence mode='wait'>
        <motion.div
          className='relative h-full w-full'
          initial='initial'
          whileHover={direction}
          exit='exit'>
          <motion.div className='absolute inset-0 z-10 hidden h-full w-full bg-black/40 transition duration-500 group-hover/card:block' />
          <motion.div
            variants={variants}
            className='relative h-full w-full bg-gray-50 dark:bg-black'
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt='image'
              className={cn(
                'h-full w-full scale-[1.15] object-cover',
                imageClassName,
              )}
              width='1000'
              height='1000'
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className={cn(
              'absolute bottom-4 left-4 z-40 text-white',
              childrenClassName,
            )}>
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
}

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
}
