import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import Footer from '@/payload/blocks/Footer/Footer'
import { Navbar } from '@/payload/blocks/Header'

export const revalidate = 60000

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
      <Navbar initData={initData} />
      <div className='flex-grow'>{children}</div>
      <Footer initData={initData} />
    </div>
  )
}
