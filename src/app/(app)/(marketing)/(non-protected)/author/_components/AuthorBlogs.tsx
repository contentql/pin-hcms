'use client'

import { Blog, Media, Tag, User } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { IoCalendarOutline } from 'react-icons/io5'
import { LuAlarmCheck } from 'react-icons/lu'

import MobileViewBlogs from '@/components/ui/MoblieViewBlogs'
import { useResponsive } from '@/hooks/useResponsive'
import { formatDate } from '@/utils/dateFormatter'
import { getTagColors } from '@/utils/getColor'

import { GlareCard } from './BlogCard'
import { AnimatedButton } from './animatedButton'

export default function AuthorBlogs({
  blogsData,
  authorTags,
  totalBlogs,
}: {
  blogsData: Blog[]
  totalBlogs: number
  authorTags: any
}) {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()
  const { isMobile } = useResponsive()
  const [filter, setFilter] = useState({
    tag: searchParams.get('tag')
      ? searchParams?.get('tag')
      : authorTags?.at(0).slug,
    index: searchParams.get('index') ? searchParams.get('index') : 0,
  })
  useEffect(() => {
    if (pathName === '/author/cql' && !searchParams.has('tag')) {
      const search = new URLSearchParams(searchParams)
      search.set('tag', authorTags?.at(0)?.slug)
      router.push(`${pathName}?${search.toString()}`)
    }
  }, [authorTags, pathName, router, searchParams])
  return (
    <section className='container px-2 py-20 md:px-20' id='blog'>
      <div className='flex flex-col items-center justify-center  gap-y-8 pb-10 text-white'>
        <div className='flex flex-row items-center gap-x-4'>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src={(authorTags?.at(filter?.index).image as Media)?.url || ''}
            alt='tag'
            className='h-20 w-20 rounded-full'
          />
          <div className='gap-x-2'>
            <p className='text-2xl font-bold'>
              {authorTags?.at(filter?.index)?.title}
            </p>
            <p>
              A collection of {blogsData?.length}{' '}
              {blogsData?.length === 1 ? 'Post' : 'Posts'}
            </p>
          </div>
        </div>
        <div className='line-clamp-2 max-w-2xl text-gray-400'>
          {authorTags?.at(filter?.index)?.description}
        </div>
      </div>
      <div className='flex flex-col justify-center gap-x-4 gap-y-10 lg:flex-row'>
        <div className=' w-full lg:max-w-[20%]'>
          <Tags
            tags={authorTags as any}
            setFilter={setFilter}
            filter={filter}
          />
        </div>
        {isMobile ? (
          <MobileViewBlogs blogs={blogsData} />
        ) : (
          <Blogs blogsData={blogsData as Blog[]} />
        )}
      </div>
      <div
        className='mt-10  flex items-center justify-center'
        onClick={() => {
          router.push(`${pathName}/${filter?.tag}`)
        }}>
        <AnimatedButton
          buttonColor='#4f46e5'
          buttonTextColor='#ffffff'
          subscribeStatus={false}
          initialText={
            <span className='group inline-flex items-center'>
              View all
              <FaAngleRight className=' ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2' />
            </span>
          }
          changeText={
            <span className='group inline-flex items-center gap-x-4'>
              <svg
                aria-hidden='true'
                className='h-6 w-6 animate-spin fill-indigo-600 text-gray-200 dark:text-gray-200'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
              Loading...
            </span>
          }
        />
      </div>
    </section>
  )
}

const Tags = ({
  tags,
  filter,
  setFilter,
}: {
  tags: any
  filter: { tag: string }
  setFilter: Function
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)
  const handleSearchByTitle = (data: string, index: number) => {
    const search = new URLSearchParams(searchParams)
    search.set('tag', data)
    search.set('index', index.toString())
    router.push(`${pathname}?${search.toString()}#blog`)
    setFilter({ ...filter, tag: data, index: index })
  }
  return (
    <section className='text-md sticky top-24 w-full text-gray-900 dark:text-white'>
      <div className='grid-col-1 grid gap-y-1 md:grid-cols-2 lg:grid-cols-1'>
        {tags?.map((tag: any, index: number) => (
          <div key={index}>
            <div
              onMouseEnter={() => {
                if (clickedIndex !== index) {
                  setHoveredIndex(index)
                }
              }}
              onMouseLeave={() => {
                if (clickedIndex !== index) {
                  setHoveredIndex(null)
                }
              }}
              onClick={() => {
                setClickedIndex(index)
                handleSearchByTitle(tag?.slug, index)
              }}
              className='relative inline-flex cursor-pointer items-center gap-x-4 rounded-full px-4 py-2'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={(tag?.image as Media)?.url || ''}
                alt='tag'
                className='h-8 w-8 rounded-full'
              />
              <p>{tag?.title}</p>
              <AnimatePresence>
                {tag?.slug === filter?.tag && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.5 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    className='absolute left-0 top-0 h-full w-full rounded-full bg-[#e779c11a] font-bold text-white'
                  />
                )}
                {hoveredIndex === index && clickedIndex !== index && (
                  <motion.span
                    className='absolute inset-0 block h-full w-full rounded-full bg-[#e779c11a]'
                    layoutId='hoverBackground'
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Blogs = ({ blogsData }: { blogsData: Blog[] }) => {
  return (
    <div className='container grid w-full grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-8 lg:w-9/12'>
      {blogsData?.map((blog, index) => (
        <div key={index} className={`col-span-1 row-span-1 md:col-span-2`}>
          <BlogCard blogData={blog as Blog} index={index} />
        </div>
      ))}
    </div>
  )
}
const BlogCard = ({ blogData, index }: { blogData: Blog; index: number }) => {
  const readingTime = require('reading-time')

  return (
    <GlareCard>
      <div
        className={`flex h-full w-full flex-col  md:justify-between md:gap-x-8 ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} space-y-2 p-4 text-white`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={(blogData?.blog_image as Media)?.url || ''}
          alt='blog'
          className={`h-[60%] w-full rounded-xl md:h-[100%] md:w-[46%]`}
        />
        <div className='flex flex-col justify-between'>
          <h1 className={`line-clamp-2 text-2xl font-bold`}>
            {blogData?.title}
          </h1>
          <p className={`line-clamp-4`}>{blogData?.sub_title}</p>
          <div className='hidden md:block'>
            <div className='mb-2 mr-4 flex items-center gap-x-2'>
              <IoCalendarOutline size={20} />
              <p>{formatDate(blogData?.createdAt)}</p>
            </div>

            <div className='flex items-center gap-x-2'>
              <LuAlarmCheck size={24} />
              {readingTime(blogData?.description_html)?.text}
            </div>
          </div>
          <div className={`hidden flex-wrap gap-x-4 md:flex`}>
            {blogData?.author?.map((author, index) => (
              <div key={index} className='flex items-center gap-x-2'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={(author?.value as User)?.imageUrl || ''}
                  alt='author'
                  className='h-8 w-8 rounded-full'
                />
                <p className='capitalize'>{(author?.value as User)?.name}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap'>
            {blogData?.tags?.map((tag, index) => (
              <p
                className={`rounded-md  px-2 py-1 font-bold capitalize ${getTagColors({ color: (tag?.value as Tag)?.color || 'blue' })}`}
                key={index}>
                {(tag?.value as Tag)?.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </GlareCard>
  )
}
