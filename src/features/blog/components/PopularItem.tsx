import { BlogItemType } from '#root/features/blog/api/useBlogList'
import { Box, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  data?: BlogItemType[]
}

const BlogItemLink = styled(Link)({
  display: 'flex',
  marginBottom: '40px',
})

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
})

export const PopularItem: FC<Props> = ({ data }) => {
  if (!data) {
    return null
  }

  return (
    <>
      {data.map(item => (
        <BlogItemLink
          key={item.title}
          to={`${item.slug}`}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}>
          <Grid container spacing={['24px']} key={item.id}>
            <Grid item xs={5}>
              <Box component="img" src={item.img} style={{ borderRadius: 10 }} />
            </Grid>
            <Grid item xs={7}>
              <Box component="div" className="text-left">
                <StyledTypography variant="h6">{item.title}</StyledTypography>
                <StyledTypography variant="body2" marginTop="2%">
                  {item.content}
                </StyledTypography>
                <Box display="flex" marginTop="2%">
                  <Typography variant="body2" fontSize="14px">
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </BlogItemLink>
      ))}
    </>
  )
}
