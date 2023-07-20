import { ClientPrivateLayout } from '#root/components/layout/ClientPrivateLayout'
import { ClientPublicLayout } from '#root/components/layout/ClientPublicLayout'
import { DashboardPage } from '#root/pages/clients/DashboardPage'
import { SignInPage } from '#root/pages/clients/SignInPage'
import { SignUpPage } from '#root/pages/clients/SignUpPage'

export const clientRoutes = [
  {
    path: '/client',
    element: <ClientPublicLayout />,
    children: [
      {
        path: '/client/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/client/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/client/office',
        element: <ClientPrivateLayout />,
        children: [
          {
            path: '/client/office',
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]
