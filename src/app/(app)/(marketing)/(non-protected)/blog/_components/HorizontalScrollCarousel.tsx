'use client'

import { Blog } from '@payload-types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { ThreeDCardDemo } from './ThreeDCard'

export const HorizontalScrollCarousel = ({
  blogsData,
}: {
  blogsData: Blog[]
}) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

  return (
    <section
      ref={targetRef}
      className='relative mx-auto -mt-20 h-[300vh] w-full max-w-7xl'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-4'>
          {blogsData?.map((card, index) => {
            return <ThreeDCardDemo key={index} item={card} />
          })}
        </motion.div>
      </div>
    </section>
  )
}
