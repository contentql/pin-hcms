'use client'

import { Button } from './moving-border'

export function MovingBorderDemo({
  buttonName,
  className,
}: {
  buttonName: string
  className: string
}) {
  return (
    <div>
      <Button
        borderRadius='1.75rem'
        className={`border-neutral-200 ${className}  dark:border-slate-800 dark:bg-slate-900 dark:text-white`}>
        {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
      </Button>
    </div>
  )
}
