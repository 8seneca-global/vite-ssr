import { Layout } from '#root/components/layout/Layout'
import { AMOUNT_QUERY_POSTS } from '#root/constants/blog'
import { useBlogList } from '#root/features/blog/api/useBlogList'
import { useGetCurrencyRate } from '#root/features/tools/calculator/api/useGetCurrencyRate'
import { ContactPage } from '#root/pages/contact/ContactPage'
import { Page } from '#root/pages/index.page'
import { NotFoundPage } from '#root/pages/NotFoundPage'
import { Page as CalculatorPage } from '#root/pages/tools/CalculatorPage'
import { blogRoutes } from '#root/routes/Blog.Route'
import { clientCenterRoutes } from '#root/routes/client/ClientCenters.route'
import { clientRoutes } from '#root/routes/client/ClientRoutes.route'
import { recruitmentRoutes } from '#root/routes/Recruitment.route'
import { useRoutes } from 'react-router-dom'

export const AppRoutes = () => {
  useBlogList(AMOUNT_QUERY_POSTS)
  useGetCurrencyRate()
  const commonRoutes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Page />,
        },
        // {
        //   path: '/guidance',
        //   element: <GuidancePage />,
        // },
        {
          path: '/tools',
          element: <CalculatorPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]

  const element = useRoutes([
    ...commonRoutes,
    ...clientRoutes,
    ...recruitmentRoutes,
    ...blogRoutes,
    ...clientCenterRoutes,
  ])

  return (
    <>
      {element}
      {/* <Helmet>
        <title>{`${isHome ? '8seneca Pure Play Company' : '8seneca'}`}</title>
        <meta
          name="image"
          content={`${
            isHome ? 'https://8seneca.com/assets/logo-2794db0f.png' : 'https://8seneca.com/assets/Desc-216a7184.png'
          }`}
        />
      </Helmet> */}
    </>
  )
}
