'use client'

import { Blog, Media } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

import {
  BentoGrid,
  BentoGridItem,
} from '@/app/(app)/(marketing)/(non-protected)/blog/_components/Bento-grid'
import { cn } from '@/utils/cn'

export function BentoGridDemo({ blogsData }: { blogsData: Blog[] }) {
  const readingTime = require('reading-time')

  return (
    <BentoGrid className='mx-2 mt-28 max-w-full overflow-hidden pb-5 md:mx-10 lg:mx-20'>
      {blogsData?.map((blog, index, allBlogs) => {
        const colSpanClass = getColSpanClass(blog?.select_blog_size)
        return (
          <BentoGridItem
            key={index}
            blog={blog}
            header={
              <DirectionAwareHover
                imageUrl={(blog?.blog_image as Media)?.url || ''}>
                <p>{readingTime(blog?.description_html)?.text}</p>
              </DirectionAwareHover>
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
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1)
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        'group/card relative flex h-full min-h-[10rem] w-full flex-1 overflow-hidden rounded-t-xl bg-transparent bg-white dark:bg-black',
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
            <Image
              alt='image'
              className={cn(
                'h-full w-full scale-[1.15] object-cover',
                imageClassName,
              )}
              width={10000}
              height={10000}
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
