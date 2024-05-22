'use client'

import { FloatingNav } from './FloatingNav'
import { SiteSetting } from '~/payload-types'

export function FloatingNavDemo({ data }: { data: SiteSetting }) {
  return (
    <div className='relative  w-full'>
      <FloatingNav navItems={data?.header?.menuItems} />
    </div>
  )
}
