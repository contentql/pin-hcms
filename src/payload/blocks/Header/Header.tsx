'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import * as HiIcons from 'react-icons/hi2'

type HiIconKeys = keyof typeof HiIcons

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  path,
  index,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  path: string
  index: number
  children?: React.ReactNode
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      onMouseEnter={() => {
        setActive(item)
        setHoveredIndex(index)
      }}
      onMouseLeave={() => setHoveredIndex(null)}
      className='relative '>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer p-[10px] text-black hover:opacity-[0.9] dark:text-white'>
        <Link href={path}>{item}</Link>
      </motion.p>
      <AnimatePresence>
        {hoveredIndex === index && (
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
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className='absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black'>
                <motion.div
                  layout // layout ensures smooth animation
                  className='h-full w-max p-4'>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='flex'>
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className='flex space-x-2'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className='flex-shrink-0 rounded-md shadow-2xl'
      />
      <div>
        <h4 className='mb-1 text-xl font-bold text-black dark:text-white'>
          {title}
        </h4>
        <p className='max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300'>
          {description}
        </p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({
  href,
  icon,
  title,
  description,
  index,
}: {
  href: string
  icon: HiIconKeys
  title: string
  description: string
  index: number
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const IconComponent = HiIcons[icon] as any
  if (!IconComponent) {
    console.error(`Icon ${icon} does not exist in react-icons/hi2`)
    return null
  }

  return (
    <Link
      href={href}
      className='relative flex rounded-md p-1'
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}>
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className='absolute inset-0 block rounded-md bg-[#e779c11a]'
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
      <IconComponent size={'40px'} style={{ color: 'purple' }} />
      <div className='pl-4'>
        <h4 className='text-xl font-bold  text-black dark:text-white'>
          {title}
        </h4>
        <p className='line-clamp-2 max-w-[14rem] text-sm text-neutral-700 dark:text-neutral-300'>
          {description}
        </p>
      </div>
    </Link>
  )
}

export const SingleLink = ({
  index,
  item,
  path,
}: {
  index: number
  item: string
  path: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <Link
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className='relative cursor-pointer px-5 py-2 text-black hover:opacity-[0.9] dark:text-white'
      href={path}>
      {item}
      <AnimatePresence>
        {hoveredIndex === index && (
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
    </Link>
  )
}
