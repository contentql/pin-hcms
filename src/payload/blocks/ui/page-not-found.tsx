'use client'

import { cn } from '@/utils/cn'

import { Boxes } from './background-boxes'
import { MovingBorderDemo } from './button'

export function BackgroundBoxesDemo() {
  return (
    <div className='flex items-center justify-center'>
      <div className='h-screen relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg'>
        <div className='absolute inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />

        <Boxes />
        <h1 className={cn('md:text-4xl text-xl text-white relative z-20')}>
          The page your are searching for is not found
        </h1>
        <p className='text-center mt-2 text-neutral-300 relative z-20'>
          Please create a page in admin panel first
        </p>
        <div className='text-center mt-2'>
          <MovingBorderDemo />
        </div>
      </div>
    </div>
  )
}
