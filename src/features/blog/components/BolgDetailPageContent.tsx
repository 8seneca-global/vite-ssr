import { BlogDetailLoading } from '#root/components/Loading/BlogDetailLoading'
import { useBlogDetail } from '#root/features/blog/api/useBlogDetail'
import { RelatedPosts } from '#root/features/blog/components/RelatedPosts'
import { Render } from '@9gustin/react-notion-render'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export const BlogDetailPageContent = () => {
  const { id } = useParams()
  if (!id) {
    return <></>
  }
  const { data, isLoading } = useBlogDetail(id)
  if (isLoading) {
    return <BlogDetailLoading />
  }
  return (
    <>
      <Box component="div">
        <Typography variant="h1" textAlign="center" paddingBottom="7%">
          {data?.metadata.properties.Name.title[0].plain_text}
        </Typography>
        {data?.results && <Render blocks={data?.results} classNames />}
      </Box>
      <RelatedPosts />
    </>
  )
}
