'use client'

import { Media, Tag, TagsType } from '@payload-types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { cn } from '@/utils/cn'

export default function Tags(tagsData: TagsType) {
  return (
    <section className='pb-40 pt-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-24 flex flex-wrap justify-center text-center'>
          <div className='w-full px-4 lg:w-6/12'>
            <h2 className='text-4xl font-semibold text-white'>
              {tagsData?.title}
            </h2>
            <p className='m-4 text-lg leading-relaxed text-gray-300'>
              {tagsData?.sub_title}
            </p>
          </div>
        </div>
        <div className='relative flex flex-wrap items-center justify-center gap-x-12 gap-y-4'>
          {tagsData?.tags?.map((tag, index) => (
            <PinContainer
              key={index}
              title={(tag as Tag)?.title}
              href={(tag as Tag)?.slug!}>
              <div className='flex h-[16rem] w-[14rem] basis-full flex-col items-center justify-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 '>
                <Image
                  className='w-18 h-18 mb-16 rounded-full'
                  src={((tag as Tag)?.tagImage as Media)?.url || ''}
                  alt='tag'
                  width={100}
                  height={100}
                />
                <h3 className='!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100'>
                  {(tag as Tag)?.title}
                </h3>
                <div className='!m-0 !p-0 text-base font-normal'>
                  <span className='line-clamp-1 text-slate-500'>
                    {(tag as Tag)?.description}
                  </span>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  )
}

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  title?: string
  href?: string
  className?: string
  containerClassName?: string
}) => {
  const [transform, setTransform] = useState(
    'translate(-50%,-50%) rotateX(0deg)',
  )

  const onMouseEnter = () => {
    setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)')
  }
  const onMouseLeave = () => {
    setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)')
  }

  return (
    <div>
      <div
        className={cn(
          'group/pin relative z-50  mx-auto h-[20rem] w-[16rem] cursor-pointer',
          containerClassName,
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <div
          style={{
            perspective: '1000px',
            transform: 'rotateX(70deg) translateZ(0deg)',
          }}
          className='absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2'>
          <div
            style={{
              transform: transform,
            }}
            className='absolute left-1/2 top-1/2 flex  items-start justify-start overflow-hidden  rounded-2xl  border border-white p-4 transition duration-700 group-hover/pin:border-white'>
            <div className={cn(' relative z-50 ', className)}>{children}</div>
          </div>
        </div>
        <PinPerspective title={title} href={href} />
      </div>
    </div>
  )
}

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string
  href?: string
}) => {
  const router = useRouter()
  return (
    <motion.div className='z-30 flex h-80 w-full items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100'>
      <div className=' inset-0 -mt-7 h-full w-full  flex-none'>
        <div className='absolute inset-x-0 top-0  flex justify-center'>
          <div
            onClick={() => {
              router.push(`/tag/${href}`)
            }}
            className='relative z-10 flex items-center space-x-2 rounded-full bg-transparent px-4 py-0.5 ring-1 ring-white/10 '>
            <span className='relative z-20 inline-block py-0.5 text-xs font-bold text-white'>
              {title}
            </span>

            <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40'></span>
          </div>
        </div>

        <div
          style={{
            perspective: '1000px',
            transform: 'rotateX(70deg) translateZ(0)',
          }}
          className='absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2'>
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className='absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className='absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className='absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'></motion.div>
          </>
        </div>

        <>
          <motion.div className='absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40' />
          <motion.div className='absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40  ' />
          <motion.div className='absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]' />
          <motion.div className='absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300 ' />
        </>
      </div>
    </motion.div>
  )
}
