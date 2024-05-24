'use client'

import { Blog } from '@payload-types'
import { useRouter } from 'next/navigation'

import { cn } from '@/utils/cn'

import { BorderBeam } from './BorderBeam'

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
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto grid-flow-row-dense',
        className,
      )}>
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

  return (
    <div
      className={cn(
        'relative row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border  border-slate-300 justify-between flex flex-col cursor-pointer',
        className,
      )}
      onClick={() => {
        router.push(`/blog/${slug}`)
      }}>
      <BorderBeam className='hidden group-hover:block' />
      {header}
      <div className='transition duration-200 p-4'>
        {icon}
        <div className='text-xl font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
          {title}
        </div>
        <div className='text-sm font-sans font-normal text-neutral-600 dark:text-neutral-300'>
          {sub_title}
        </div>
      </div>
    </div>
  )
}
