import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Footer from 'src/payload/blocks/Footer/Footer'


import { getCurrentUser } from '~/src/lib/payload'
import NavbarDemo from '~/src/payload/blocks/Header'


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
  const user = await getCurrentUser()

  return (
    <div className='flex min-h-screen flex-col'>
      <NavbarDemo user={user} initData={initData} />
      <div className='flex-grow'>{children}</div>
      <Footer initData={initData} />
    </div>
  )
}
