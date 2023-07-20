import { AMOUNT_QUERY_POSTS } from '#root/constants/blog'
import { useBlogList } from '#root/features/blog/api/useBlogList'
import { Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
})

export const RelatedPosts = () => {
  const { data } = useBlogList(AMOUNT_QUERY_POSTS)

  if (!data) {
    return null
  }
  return (
    <Box component="div" textAlign="center" marginTop="7%" width="100%">
      <Typography variant="h1"> Related Blog Posts</Typography>
      <Grid container spacing="32px" paddingTop="6%">
        {data.slice(0, 3).map((blogLastestPostItem, index) => (
          <Grid key={blogLastestPostItem.title} item xs={12} sm={4} md={4}>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }}
              to={`/blog/${blogLastestPostItem.slug}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'left',
              }}>
              <Box component="img" src={blogLastestPostItem.img} borderRadius="10px" />
              <Typography variant="body1" color="#5F6D7E" marginTop="4%">
                {blogLastestPostItem.date}
              </Typography>
              <StyledTypography variant="h6" marginTop="2%">
                {blogLastestPostItem.title}
              </StyledTypography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
