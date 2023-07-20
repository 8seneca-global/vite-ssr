import { PageWrapper } from '#root/components/PageWrapper'
import { AMOUNT_QUERY_POSTS } from '#root/constants/blog'
import { useBlogList } from '#root/features/blog/api/useBlogList'
import { BlogLatestPosts } from '#root/features/blog/components/BlogLastestPosts'
import { BlogPopularPosts } from '#root/features/blog/components/BlogPopularPosts'
import * as _ from 'lodash'
import { useMemo } from 'react'

export const BlogPage = () => {
  const { data: blogList, isLoading } = useBlogList(AMOUNT_QUERY_POSTS)

  const latestPosts = useMemo(() => {
    if (!blogList) {
      return []
    }

    return _.orderBy(blogList, ['date'], ['asc']).slice(0, 6)
  }, [blogList])

  return (
    <PageWrapper customStyle={{ paddingLeft: '10%', paddingRight: '10%' }}>
      <BlogPopularPosts data={blogList?.slice(0, 4)} isLoading={isLoading} />
      <BlogLatestPosts data={latestPosts} isLoading={isLoading} />
    </PageWrapper>
  )
}
