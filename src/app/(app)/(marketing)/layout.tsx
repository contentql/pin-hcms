import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import Footer from '~/src/components/Footer/Footer'
import { NavBar } from '~/src/components/Header/NavBar'

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
    <>
      <NavBar initData={initData} />
      {children}
      <Footer initData={initData} />
    </>
  )
}
