import Footer from '~/src/components/Footer/Footer'
import { NavBar } from '~/src/components/Header/NavBar'
import { serverClient } from '~/src/trpc/serverClient'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await serverClient.SiteSettings.getSiteSettings()
  return (
    <>
      <NavBar data={data} />
      {children}
      <Footer data={data} />
    </>
  )
}
