'use client'

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className='h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20'
      ref={containerRef}>
      <div
        className='py-10 md:py-40 w-full relative'
        style={{
          perspective: '1000px',
        }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className='div max-w-5xl mx-auto text-center'>
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  children: React.ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className='-mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-1 border-[#130b2e] rounded-[30px] shadow-2xl'>
      <div className=' h-full w-full  overflow-hidden rounded-2xl bg-[#221551] md:rounded-2xl md:p-4 '>
        {children}
      </div>
    </motion.div>
  )
}
