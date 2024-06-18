'use client'

import { Media } from '@payload-types'

import { PinContainer } from '@/components/ui/3d-pin'
import { trpc } from '@/trpc/client'

const DisplayTags = () => {
  const { data } = trpc.tag.getAllTags.useQuery()
  return (
    <div className='relative flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-20'>
      {data?.map((tag, index) => (
        <PinContainer key={index} title={tag?.title} href={tag?.slug!}>
          <div className='flex h-[16rem] w-[14rem] basis-full flex-col items-center justify-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 '>
            {/* eslint-disable-next-line @next/next/no-img-element  */}
            <img
              className='w-18 h-18 mb-16 rounded-full'
              src={(tag?.tagImage as Media)?.url || ''}
              alt='tag'
              width={100}
              height={100}
            />
            <h3 className='!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100'>
              {tag?.title}
            </h3>
            <p className='pt-2'>
              {tag?.count} {tag?.count === 1 ? 'Blog' : 'Blogs'}
            </p>
          </div>
        </PinContainer>
      ))}
    </div>
  )
}

export default DisplayTags
