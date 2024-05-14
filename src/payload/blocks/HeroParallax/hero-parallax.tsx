'use client'

import { TextGenerateEffect } from '../ui/text-generate-effect'
import { HeroParallaxTypes } from '@payload-types'
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroParallaxUI = ({
  products,
}: {
  products: HeroParallaxTypes
}) => {
  const firstRow = products?.hero?.slice(0, 5)
  const secondRow = products?.hero?.slice(0, 5)
  const thirdRow = products?.hero?.slice(0, 5)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  )
  return (
    <div
      ref={ref}
      className='h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'>
      <Header data={products as HeroParallaxTypes} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''>
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-20 mb-20'>
          {firstRow?.map((product: any) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row  mb-20 space-x-20 '>
          {secondRow?.map((product: any) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row  mb-20 space-x-20 '>
          {secondRow?.map((product: any) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = ({ data }: { data: HeroParallaxTypes }) => {
  return (
    <div className='max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0'>
      <h1 className='text-2xl md:text-7xl font-bold dark:text-white'>
        {data?.hero_title}
      </h1>
      <TextGenerateEffect words={data?.hero_description as string} />
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: any
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className='group/product h-96 w-[30rem] relative flex-shrink-0'>
      <Link
        href={product.link}
        className='block group-hover/product:shadow-2xl '>
        <Image
          src={product?.thumbnail?.url}
          height='600'
          width='600'
          className='object-cover object-left-top absolute h-full w-full inset-0'
          alt={product.title}
        />
      </Link>
      <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
      <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>
        {product.title}
      </h2>
    </motion.div>
  )
}
