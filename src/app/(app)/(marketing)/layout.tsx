import { FloatingNavDemo } from '~/src/components/Header/FloatingNavDemo'
import { serverClient } from '~/src/trpc/serverClient'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const headerData = await serverClient.SiteSettings.getSiteSettings()
  return (
    <>
      <FloatingNavDemo headerData={headerData} />
      {children}
    </>
  )
}
