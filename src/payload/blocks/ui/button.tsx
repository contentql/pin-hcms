'use client'

import { usePathname, useRouter } from 'next/navigation'

import { trpc } from '@/trpc/client'

import { Button } from './moving-border'

export function MovingBorderDemo({ buttonName }: { buttonName: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const handleRedirect = () => {
    const { mutate: seedMutate } = trpc.seed.startSeeding.useMutation()

    buttonName === 'Create page' &&
      router.push(`/admin/collections/pages/create`)
    buttonName === 'show more' && router.push('/')
    buttonName === 'Download Demo' && seedMutate()
  }
  return (
    <div onClick={handleRedirect}>
      <Button
        borderRadius='1.75rem'
        className='border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white'
      >
        {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
      </Button>
    </div>
  )
}
