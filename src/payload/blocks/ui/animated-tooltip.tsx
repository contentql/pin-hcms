'use client'

import { User } from '@payload-types'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'

export const AnimatedTooltip = ({
  items,
}: {
  items:
    | {
        relationTo: 'users'
        value: User
      }[]
    | null
    | undefined
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
      {items?.slice(0, 4)?.map((item, idx) => (
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
            className='relative !m-0 h-10 w-10 rounded-full object-cover object-top !p-0 transition  duration-500 group-hover:z-30 group-hover:scale-105'
          />
        </div>
      ))}
    </>
  )
}
