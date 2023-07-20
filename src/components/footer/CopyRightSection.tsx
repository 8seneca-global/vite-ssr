import FacebookIcon from '#root/assets/images/FacebookIcon.svg'
import LinkedInIcon from '#root/assets/images/LinkedInIcon.svg'
import TwitterIcon from '#root/assets/images/TwitterIcon.svg'
import YoutubeIcon from '#root/assets/images/YoutubeIcon.svg'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled('div')({
  paddingTop: '6%',
  paddingBottom: '4%',
  zIndex: '-1',
})

export const CopyRightSection = () => {
  return (
    <Wrapper>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} textAlign="left">
          <Typography sx={{ color: '#181E54' }} fontSize="16px" fontWeight="400">
            © 2023 8seneca. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} display="flex">
          <Grid container spacing="10px" sx={{ justifyContent: { sm: 'right', xs: 'left' } }}>
            <Grid item>
              <Link to="https://twitter.com/8SENECA_" target="_blank">
                <img src={TwitterIcon} />
              </Link>
            </Grid>
            <Grid item>
              <Link to="https://www.youtube.com/@8senecaIT" target="_blank">
                <img src={YoutubeIcon} />
              </Link>
            </Grid>
            <Grid item>
              <Link to="https://www.linkedin.com/company/8seneca/" target="_blank">
                <img src={LinkedInIcon} />
              </Link>
            </Grid>
            <Grid item>
              <Link to="https://www.facebook.com/8seneca" target="_blank">
                <img src={FacebookIcon} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
