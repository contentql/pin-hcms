'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from './moving-border'

export function MovingBorderDemo({ buttonName }: { buttonName: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const handleRedirect = () => {
    buttonName === 'Create page' &&
      router.push(`/admin/collections/pages/create`)
    buttonName === 'show more' && router.push('/')
  }
  return (
    <div onClick={handleRedirect}>
      <Button
        borderRadius='1.75rem'
        className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'>
        {buttonName}
      </Button>
    </div>
  )
}
