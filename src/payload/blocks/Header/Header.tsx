'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  path: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative '>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-black hover:opacity-[0.9] dark:text-white'>
        <Link href={path}>{item}</Link>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className='absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4'>
              <motion.div
                transition={transition}
                layoutId='active' // layoutId ensures smooth animation
                className='bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl'>
                <motion.div
                  layout // layout ensures smooth animation
                  className='w-max h-full p-4'>
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
      className='flex space-x-4 px-8 py-6 '>
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
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className='flex-shrink-0 rounded-md shadow-2xl'
      />
      <div>
        <h4 className='text-xl font-bold mb-1 text-black dark:text-white'>
          {title}
        </h4>
        <p className='text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300'>
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
}: {
  href: string
  icon: HiIconKeys
  title: string
  description: string
}) => {
  const IconComponent = HiIcons[icon] as any

  if (!IconComponent) {
    console.error(`Icon ${icon} does not exist in react-icons/hi2`)
    return null
  }

  return (
    <Link href={href} className='flex space-x-2'>
      <IconComponent size={'40px'} style={{ color: 'purple' }} />
      <div>
        <h4 className='text-xl font-bold mb-1 text-black dark:text-white'>
          {title}
        </h4>
        <p className='text-neutral-700 text-sm line-clamp-2 max-w-[14rem] dark:text-neutral-300'>
          {description}
        </p>
      </div>
    </Link>
  )
}

export const SingleLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className='text-black '>
      {children}
    </Link>
  )
}
