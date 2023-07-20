import { Layout } from '#root/components/layout/Layout'
import { BlogDetailPage } from '#root/pages/blog/BlogDetailPage'
import { BlogPage } from '#root/pages/blog/BlogPage'

export const blogRoutes = [
  {
    path: '/blog',
    element: <Layout />,
    children: [
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/blog/:id',
        element: <BlogDetailPage />,
      },
    ],
  },
]
