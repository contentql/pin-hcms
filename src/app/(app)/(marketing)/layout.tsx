import { FloatingNavDemo } from '~/src/components/Header/FloatingNavDemo'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FloatingNavDemo />
      {children}
    </>
  )
}
