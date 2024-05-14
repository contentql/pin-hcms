'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from './moving-border'

export function MovingBorderDemo() {
  const router = useRouter()
  const pathname = usePathname()
  const handleRedirect = () => {
    router.push(`/admin/collections/pages/create`)
  }
  return (
    <div onClick={handleRedirect}>
      <Button
        borderRadius='1.75rem'
        className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'>
        Create page
      </Button>
    </div>
  )
}
