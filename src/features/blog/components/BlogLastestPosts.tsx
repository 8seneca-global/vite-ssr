import { BlogItemType } from '#root/features/blog/api/useBlogList'
import { mainRed } from '#root/themes/theme'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'

import { Link } from 'react-router-dom'

const LinkStyle = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'left',
})

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
})

type Props = {
  data: BlogItemType[]
  isLoading: boolean
}

export const BlogLatestPosts: FC<Props> = ({ data, isLoading }) => {
  if (!data) {
    return null
  }

  return (
    <>
      <Typography variant="h1" marginTop="24px">
        Latest Blog Posts
      </Typography>
      <Grid container spacing="32px" marginTop="1%">
        {data.map((item: BlogItemType) => (
          <Grid key={item.title} item xs={12} sm={4}>
            <LinkStyle
              to={`${item.slug}`}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }}>
              <Box component="img" src={item.img} style={{ borderRadius: 10 }} />
              <Typography variant="body1" color="#5F6D7E" marginTop="16px">
                {item.date}
              </Typography>
              <StyledTypography variant="h6" paddingTop="8px">
                {item.title}
              </StyledTypography>
              <Box component="div" marginTop="16px" display="flex" justifyContent="flex-start">
                <Typography fontWeight={700} fontSize="15px" color="#EB1933" marginRight="8px">
                  Read More
                </Typography>
                <ArrowForwardIcon sx={{ color: mainRed, fontSize: '20px', marginTop: '1px' }} />
              </Box>
            </LinkStyle>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
