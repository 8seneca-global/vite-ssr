import AppHeader from '#root/components/header/AppHeader'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export const ToolsLayout: FC<Props> = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}
