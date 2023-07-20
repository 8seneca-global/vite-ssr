import storage from '#root/utils/storage'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {}

export const DashboardPage: FC<Props> = () => {
  const token = storage.getToken()

  if (!token) {
    return <Navigate to="/client/sign-in" />
  }
  return <></>
  // return <PaymentForm />
}
