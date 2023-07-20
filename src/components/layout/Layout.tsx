import { AppFooter } from '#root/components/footer/AppFooter'
import AppHeader from '#root/components/header/AppHeader'
import { CalendarWidget } from '#root/features/contact-us/components/CalendarWidget'
import { useIsMobile } from '#root/hooks/useIsMobile'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export const Layout: FC<Props> = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <AppHeader />
      <Outlet />
      {!isMobile && <CalendarWidget />}
      <AppFooter />
    </>
  )
}
