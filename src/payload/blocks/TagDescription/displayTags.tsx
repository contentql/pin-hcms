'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Media } from '~/payload-types'
import { trpc } from '~/src/trpc/client'

const DisplayTags = () => {
  const { data } = trpc.tag.getAllTags.useQuery()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <div className='mt-3 flex flex-row flex-wrap justify-center'>
      {data?.map((ele, idx) => (
        <Link
          href={`/tag/${ele?.slug}`}
          onMouseEnter={() => {
            setHoveredIndex(idx)
          }}
          onMouseLeave={() => {
            setHoveredIndex(null)
          }}
          key={idx}
          className='relative m-8 flex cursor-pointer flex-col justify-center p-10 text-center'>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 block h-full w-full rounded-md  bg-[#e779c11a]'
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
          <Image
            height={96}
            width={96}
            alt=''
            className='mb-4 h-24 w-24 flex-shrink-0 self-center rounded-full bg-cover bg-center '
            src={(ele?.tagImage as Media)?.url as string}
          />
          <div className='text-xl font-semibold leading-tight'>
            {ele?.title}
          </div>
          <p className='dark:text-gray-600'>{ele?.count} Blogs</p>
        </Link>
      ))}
    </div>
  )
}

export default DisplayTags
