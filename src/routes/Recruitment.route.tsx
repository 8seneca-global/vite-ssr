import { Layout } from '#root/components/layout/Layout'
import { appPaths } from '#root/constants/appPaths'
import { RecruitmentPage } from '#root/pages/recruitment/RecruitmentPage'

export const recruitmentRoutes = [
  {
    path: appPaths.recruitment,
    element: <Layout />,
    children: [
      {
        path: appPaths.recruitment,
        element: <RecruitmentPage />,
      },
      {
        path: `${appPaths.recruitment}/:id`,
        element: <RecruitmentPage />,
      },
    ],
  },
]
