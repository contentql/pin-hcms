'use client'

import { TextGenerateEffect } from '../ui/text-generate-effect'
import { Media } from '@payload-types'

import { ContainerScroll } from '@/payload/blocks/Container_Scroll/container-scroll-animation'

export function Container(data: any) {
  return (
    <div className='flex flex-col overflow-hidden'>
      <TextGenerateEffect words={data?.hero_data} />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>
              {data?.subtitle} <br />
              <span className='mt-1 text-4xl font-bold leading-none md:text-[6rem]'>
                {data?.title}
              </span>
            </h1>
          </>
        }>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={(data?.image as Media)?.url || ''}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto h-full rounded-2xl object-cover object-left-top'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
