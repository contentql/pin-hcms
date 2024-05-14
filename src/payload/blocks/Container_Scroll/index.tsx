'use client'

import { TextGenerateEffect } from '../ui/text-generate-effect'
import { Media } from '@payload-types'
import Image from 'next/image'

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
              <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                {data?.title}
              </span>
            </h1>
          </>
        }>
        <Image
          src={(data?.image as Media)?.url || ''}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto rounded-2xl object-cover h-full object-left-top'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
