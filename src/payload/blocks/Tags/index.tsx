'use client'

import { Media, Tag, TagsType } from '@payload-types'

import { PinContainer } from '@/components/ui/3d-pin'

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
              title={(tag?.value as Tag)?.title}
              href={(tag?.value as Tag)?.slug!}>
              <div className='flex h-[16rem] w-[14rem] basis-full flex-col items-center justify-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 '>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className='w-18 h-18 mb-16 rounded-full'
                  src={((tag?.value as Tag)?.tagImage as Media)?.url || ''}
                  alt='tag'
                  width={100}
                  height={100}
                />
                <h3 className='!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100'>
                  {(tag?.value as Tag)?.title}
                </h3>
                <div className='!m-0 !p-0 text-base font-normal'>
                  <span className='line-clamp-1 text-slate-500'>
                    {(tag?.value as Tag)?.description}
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
