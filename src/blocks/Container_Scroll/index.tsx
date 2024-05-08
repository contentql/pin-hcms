'use client'

import Image from 'next/image'

import { ContainerScroll } from '@/blocks/Container_Scroll/container-scroll-animation'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

export function Container_Scroll(data: any) {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`
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
          src={data?.image?.url || ''}
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
