'use client'

import { FeatureStickyScrollType, Media } from '@payload-types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export const StickyScrollRevealDemo = (data: FeatureStickyScrollType) => {
  return (
    <div className='bg-white py-10'>
      {data?.features?.map((feature, idx) => (
        <TextParallaxContent
          key={idx}
          imgUrl={(feature?.image as Media)?.url as string}
          subheading={feature?.subTitle}
          heading={feature?.title}>
          <ExampleContent {...feature} />
        </TextParallaxContent>
      ))}
    </div>
  )
}

const IMG_PADDING = 12

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: any) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}>
      <div className='relative h-[150vh]'>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

const StickyImage = ({ imgUrl }: any) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className='sticky z-0 overflow-hidden rounded-3xl'>
      <motion.div
        className='absolute inset-0 bg-neutral-950/70'
        style={{
          opacity,
        }}
      />
    </motion.div>
  )
}

const OverlayCopy = ({ subheading, heading }: any) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'>
      <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>
        {subheading}
      </p>
      <p className='text-center text-4xl font-bold md:text-7xl'>{heading}</p>
    </motion.div>
  )
}

const ExampleContent = (content: any) => (
  <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-12'>
    <h2 className='col-span-1 text-3xl font-bold md:col-span-4'>
      {content?.heading}
    </h2>
    <div className='col-span-1 md:col-span-8'>
      <p className='mb-4 text-lg text-neutral-600'>{content?.description}</p>

      <button className='w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit'>
        {content?.buttonText} <FiArrowUpRight className='inline' />
      </button>
    </div>
  </div>
)
