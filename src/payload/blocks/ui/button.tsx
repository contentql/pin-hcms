'use client'

import { useRouter } from 'next/navigation'

import { Button } from './moving-border'

export function MovingBorderDemo({
  buttonName,
  className,
  buttonPath,
}: {
  buttonName: string
  className: string
  buttonPath: string
}) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(buttonPath)}>
      <Button
        borderRadius='1.75rem'
        className={`z-50 border-neutral-200 ${className}  dark:border-slate-800 dark:bg-slate-900 dark:text-white`}>
        {buttonName?.charAt(0).toUpperCase() + buttonName?.slice(1)}
      </Button>
    </div>
  )
}
