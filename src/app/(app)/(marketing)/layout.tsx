import Footer from '~/src/components/Footer/Footer'
import { NavBar } from '~/src/components/Header/NavBar'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
