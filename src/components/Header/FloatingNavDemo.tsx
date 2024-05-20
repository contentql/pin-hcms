'use client'

import { FloatingNav } from './FloatingNav'
import { SiteSetting } from '~/payload-types'

export function FloatingNavDemo({ headerData }: { headerData: SiteSetting }) {
  return (
    <div className='relative  w-full'>
      <FloatingNav navItems={headerData?.header?.menuItems} />
    </div>
  )
}
