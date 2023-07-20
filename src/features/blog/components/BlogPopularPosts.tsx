import { BlogLoading } from '#root/components/Loading/BlogLoading'
import { BlogItemType } from '#root/features/blog/api/useBlogList'
import { PopularItem } from '#root/features/blog/components/PopularItem'
import { Box, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

type Props = {
  isLoading: boolean
  data?: BlogItemType[]
}

export const BlogPopularPosts: FC<Props> = ({ data, isLoading }) => {
  if (isLoading) {
    return <BlogLoading />
  }

  if (!data) {
    return null
  }

  const [firstItem, ...remainingItems] = data

  return (
    <Box maxWidth="100%">
      <Grid container spacing="64px">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {firstItem && (
            <Box component="div" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Link to={`${firstItem.slug}`}>
                <Box component="img" src={firstItem.img} borderRadius="10px" />
                <Box component="div" textAlign="left">
                  <Typography variant="h6" marginTop="1%">
                    {firstItem.title}
                  </Typography>
                  <Typography variant="body2" marginTop="2%">
                    {firstItem.content}
                  </Typography>
                  <Typography variant="body2" fontSize="14px" marginTop="2%">
                    {firstItem.date}
                  </Typography>
                </Box>
              </Link>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <PopularItem data={remainingItems} />
        </Grid>
      </Grid>
    </Box>
  )
}
