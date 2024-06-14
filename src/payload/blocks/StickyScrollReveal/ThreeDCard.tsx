'use client'

import { Media, StickyScrollRevealType } from '@payload-types'

import { CardBody, CardContainer, CardItem } from './CardContainer'

export function ThreeDCardDemo({
  data,
}: {
  data: NonNullable<StickyScrollRevealType['features']>[0] | undefined
}) {
  // console.log('ind card', data?title)
  return (
    <CardContainer className='inter-var'>
      <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  '>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-600 dark:text-white'>
          {data?.title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='mt-2 line-clamp-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300'>
          {data?.description}
        </CardItem>
        <CardItem translateZ='100' className='mt-4 w-full'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={(data?.image as Media)?.url || ''}
            height='1000'
            width='1000'
            className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        {/* <div className='flex justify-between items-center mt-20'>
          <CardItem
            translateZ={20}
            as={Link}
            href='https://twitter.com/mannupaaji'
            target='__blank'
            className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'>
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as='button'
            className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'>
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  )
}
