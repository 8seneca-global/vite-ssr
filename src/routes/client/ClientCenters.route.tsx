import { ClientCenterLayOut } from '#root/components/layout/ClientCenterLayOut'
import { Billing } from '#root/features/client-center/components/billing-invoice/Billing'
import { MainDashBoard } from '#root/features/client-center/components/main-dashboard/MainDashboard'
import { Project } from '#root/features/client-center/components/project/Project'

export const clientCenterRoutes = [
  {
    path: '/client-center',
    element: <ClientCenterLayOut />,
    children: [
      {
        path: '/client-center/main-dashboard',
        element: <MainDashBoard />,
      },
      {
        path: '/client-center/project',
        element: <Project />,
      },
      {
        path: '/client-center/billing-invoice',
        element: <Billing />,
      },
    ],
  },
]
