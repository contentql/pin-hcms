'use client'

import { useRouter } from 'next/navigation'

import { PinContainer } from '@/components/ui/3d-pin'
import { trpc } from '@/trpc/client'

const DisplayAuthors = () => {
  const router = useRouter()
  const { data: authorsWithCount } =
    trpc.author.getAllAuthorsWithCount.useQuery()

  return (
    <div className='relative flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-20 py-20 md:px-2'>
      {authorsWithCount?.map((author, index) => (
        <PinContainer
          key={index}
          title={author?.name || ''}
          href={`/author/${author?.name}`}>
          <div className='flex h-[16rem] w-[14rem] basis-full flex-col items-center justify-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 '>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='w-18 h-18 mb-16 rounded-full'
              src={author?.imageUrl || ''}
              alt='author'
              width={100}
              height={100}
            />
            <h3 className='!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100'>
              {author?.name}
            </h3>
            <div className='!m-0 !p-0 text-base font-normal'>
              <span className='line-clamp-1 text-slate-500'>
                {author?.totalDocs} {author?.totalDocs === 1 ? 'Blog' : 'Blogs'}
              </span>
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  )
}

export default DisplayAuthors
