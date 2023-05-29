import { AppFooter, AppHeader } from '@hisabkitab/components'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <>
        <AppHeader />
        {children}
        <AppFooter />
      </>
    </html>
  )
}
