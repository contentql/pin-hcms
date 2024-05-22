import Footer from '~/src/components/Footer/Footer'
import { FloatingNavDemo } from '~/src/components/Header/FloatingNavDemo'
import { serverClient } from '~/src/trpc/serverClient'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await serverClient.SiteSettings.getSiteSettings()
  return (
    <>
      <FloatingNavDemo data={data} />
      {children}
      <Footer data={data} />
    </>
  )
}
