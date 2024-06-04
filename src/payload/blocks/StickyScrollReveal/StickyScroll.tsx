'use client'

import { StickyScrollRevealType } from '@payload-types'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

import { cn } from '@/utils/cn'

import { ThreeDCardDemo } from './ThreeDCard'

export const StickyScroll = ({
  data,
  contentClassName,
}: {
  data?: StickyScrollRevealType
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = data?.features?.length

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const cardsBreakpoints = data?.features?.map(
      (_, index) => index / cardLength!,
    )
    const closestBreakpointIndex = cardsBreakpoints?.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0,
    )
    setActiveCard(closestBreakpointIndex!)
  })

  const backgroundColors = [
    'var(--slate-900)',
    'var(--black)',
    'var(--neutral-900)',
  ]
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ]
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className='no-scrollbar relative mb-14 flex h-[35rem] justify-around space-x-10 overflow-y-auto rounded-xl p-10'
      ref={ref}>
      <div className='div relative flex items-start px-4'>
        <div className='max-w-2xl'>
          {data?.features?.map((item, index) => (
            <div key={item?.title! + index} className='my-20'>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-2xl font-bold text-slate-100'>
                {item?.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-kg mt-10 max-w-sm text-slate-300'>
                {item?.description}
              </motion.p>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
      <motion.div
        // animate={{
        //   background: linearGradients[activeCard % linearGradients.length],
        // }}
        className={cn(
          'sticky top-12  hidden overflow-hidden rounded-md bg-transparent lg:block',
          contentClassName,
        )}>
        {/* {content[activeCard].content ?? null} */}
        <ThreeDCardDemo data={data?.features?.at(activeCard)} />
      </motion.div>
    </motion.div>
  )
}
