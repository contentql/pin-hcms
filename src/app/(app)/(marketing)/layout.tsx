import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Footer from 'src/payload/blocks/Footer/Footer'

import NavbarDemo from '@/payload/blocks/Header'

import Hero_4 from '~/src/payload/blocks/heroes/Hero_4'

export const revalidate = 1000

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const payload = await getPayloadHMR({ config: configPromise })
  const initData = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })

  return (
    <div className='flex min-h-screen flex-col'>
      <NavbarDemo initData={initData} />
      <div className='flex-grow'>
        <Hero_4 />
        {children}
      </div>
      <Footer initData={initData} />
    </div>
  )
}
