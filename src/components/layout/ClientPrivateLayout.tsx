import { ClientHeader } from '#root/components/header/ClientHeader'
import { Container } from '@mui/system'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export const ClientPrivateLayout: FC<Props> = () => {
  return (
    <Container>
      <ClientHeader />
      <Outlet />
    </Container>
  )
}
