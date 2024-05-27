'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { cn } from '@/utils/cn'

import { Blog, Media } from '~/payload-types'

type Card = {
  id: number
  content: JSX.Element | React.ReactNode | string
  className: string
  thumbnail: string
  slug: string
}

export const PopularBlogs = ({ blogsData }: { blogsData: Blog[] }) => {
  const [selected, setSelected] = useState<Card | null>(null)
  const [lastSelected, setLastSelected] = useState<Card | null>(null)

  const handleClick = (card: Card) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }
  const blogs = blogsData.map((item, index) => ({
    id: index + 1,
    content: (
      <div>
        <p className='font-bold text-4xl text-white'>{item.title}</p>
        <p className='font-normal text-base text-white'></p>
        <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
          {item.sub_title}
        </p>
      </div>
    ),
    className: 'col-span-1',
    thumbnail: (item.blog_image as Media).url as string,
    slug: item?.slug as string,
  }))

  return (
    <div className='mt-[100px] text-center'>
      <h1 className='mb-[20px] text-4xl font-extrabold underline'>
        Popular Blogs
      </h1>
      <div className='w-screen h-[600px] p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative'>
        {blogs.map((card, i) => (
          <div key={i} className={cn(card.className, '')}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                'relative overflow-hidden',
                selected?.id === card.id
                  ? 'rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'
                  : lastSelected?.id === card.id
                    ? 'z-40 bg-white rounded-xl h-full w-full'
                    : 'bg-white rounded-xl h-full w-full',
              )}
              layout>
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <BlurImage card={card} />
            </motion.div>
          </div>
        ))}
        <motion.div
          onClick={handleOutsideClick}
          className={cn(
            'absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10',
            selected?.id ? 'pointer-events-auto' : 'pointer-events-none',
          )}
          // animate={{ opacity: selected?.id ? 0.3 : 0 }}
        />
      </div>
    </div>
  )
}

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <Image
      src={card.thumbnail}
      height='500'
      width='500'
      onLoad={() => setLoaded(true)}
      className={cn(
        'object-cover object-top absolute inset-0 h-full w-full transition duration-200',
        loaded ? 'blur-none' : 'blur-md',
      )}
      alt='thumbnail'
    />
  )
}

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push(`/blog/${selected?.slug}`)
      }}
      className='h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-10'>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className='absolute inset-0 h-full w-full bg-black opacity-60 z-10'
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className='relative px-8 pb-4 z-[70]'>
        {selected?.content}
      </motion.div>
    </div>
  )
}
