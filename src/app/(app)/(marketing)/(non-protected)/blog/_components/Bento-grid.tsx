'use client'

import { Blog, Tag, User } from '@payload-types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { cn } from '@/utils/cn'

import { BorderBeam } from './BorderBeam'

const getTagColors = ({ color }: { color: String }) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    case 'gray':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    case 'red':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    case 'green':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    case 'yellow':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    case 'indigo':
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
    case 'purple':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
    case 'pink':
      return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    default:
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
  }
}
const getColSpanClass = (size: number | undefined | null) => {
  switch (size) {
    case 1:
      return 'grid-cols-1'
    case 2:
      return 'grid-cols-2'
    case 3:
      return 'grid-cols-3'
    default:
      return 'grid-cols-4'
  }
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-flow-row-dense grid-cols-1 gap-4 md:auto-rows-[23rem] md:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  blog,
  header,
  icon,
}: {
  className?: string
  blog: Blog
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  const { slug, title, sub_title } = blog

  const router = useRouter()

  function formatDate(isoDateString: string) {
    const date = new Date(isoDateString)
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
  }

  return (
    <div
      className={cn(
        'group/bento relative row-span-1 flex cursor-pointer flex-col justify-between rounded-xl border  border-slate-300 bg-white transition duration-200  hover:shadow-md hover:shadow-gray-500 dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className,
      )}
      onClick={() => {
        router.push(`/blog/${slug}`)
      }}
    >
      <BorderBeam className='hidden group-hover:block' />
      {header}
      <div className='p-4 transition duration-200'>
        {icon}
        <div className='flex flex-col justify-between gap-x-3 gap-y-3 md:flex-row md:gap-y-0'>
          <div className='flex gap-2 '>
            <Image
              className='rounded-full duration-500 ease-in hover:scale-75'
              width={50}
              height={50}
              src={(blog?.author?.value as User)?.imageUrl as string}
              alt='Rounded avatar'
            ></Image>
            <div>
              <p>{(blog?.author?.value as User)?.name}</p>
              <p className='text-xs'>{formatDate(blog?.createdAt)}</p>
            </div>
          </div>
          <div
            className={`${blog?.select_blog_size === '1' ? `grid grid-rows-2 gap-y-2 ${getColSpanClass(blog?.tags?.length)}` : 'flex h-fit flex-wrap gap-y-2'}`}
          >
            {blog?.tags?.slice(0, 8)?.map((tag, idx) => (
              <span
                key={idx}
                className={`${getTagColors({ color: (tag?.value as Tag)?.color || 'blue' })} me-2 rounded px-2.5 py-0.5 text-xs font-medium`}
              >
                {(tag?.value as Tag)?.title}
              </span>
            ))}
          </div>
        </div>
        <div className='mb-2 mt-2 font-sans text-xl font-bold text-neutral-600 dark:text-neutral-200'>
          {title}
        </div>
        <div className='font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300'>
          {sub_title}
        </div>
      </div>
    </div>
  )
}
