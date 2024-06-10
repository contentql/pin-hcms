'use client'

import { trpc } from '@/trpc/client'
import { cn } from '@/utils/cn'

import { Boxes } from './background-boxes'
import { Button } from './moving-border'

export function BackgroundBoxesDemo() {
  const { mutate: seedMutate } = trpc.seed.startSeeding.useMutation()

  return (
    <div className='flex items-center justify-center'>
      <div className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent'>
        <div className='pointer-events-none absolute inset-0 z-20 h-full w-full bg-transparent [mask-image:radial-gradient(transparent,white)]' />

        <Boxes />
        <h1
          className={cn(
            'relative z-20 text-2xl font-extrabold text-gray-900 dark:text-gray-300  md:text-6xl',
          )}>
          The page your are searching for is not found
        </h1>
        <p className='relative z-20 mt-2 text-center text-lg text-sky-500'>
          Please create a page in admin panel first
        </p>
        <div className='mt-2 text-center'>
          {/* <MovingBorderDemo buttonName='Download Demo' /> */}
          <div>
            <Button
              borderRadius='1.75rem'
              className='border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white'
              onClick={() => seedMutate()}>
              Load Demo Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
