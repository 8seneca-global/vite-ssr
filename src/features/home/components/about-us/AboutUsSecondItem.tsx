import BusinessAnimation from '#root/assets/lottie/BussinessAnimation.json'
import { useIsMobile } from '#root/hooks/useIsMobile'
import { Box, Grid, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import { FC } from 'react'

type Props = {}

export const AboutUsSecondItem: FC<Props> = () => {
  const isMobile = useIsMobile()
  return (
    <Grid container columnSpacing="6%" marginBottom="80px">
      <Grid item xs={12} sm={7} sx={{ textAlign: { xs: 'center', sm: 'left' }, display: 'flex', alignItems: 'center' }}>
        <Box>
          <Typography variant="h1" fontSize="30px">
            Your Business Goals, Our Technological Excellence
          </Typography>
          <Box component="div" marginTop="2%" textAlign="left">
            <Typography variant="subtitle1">
              Our mission is to transform your business vision into reality by delivering tailored IT solutions. With
              our extensive experience in IT software development and IT outsourcing, we're your strategic partner in
              navigating the fast-paced digital landscape.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} textAlign="left" display="flex" justifyContent="center" alignItems="center">
        <Lottie animationData={BusinessAnimation} loop={true} style={isMobile ? { width: '100%' } : { width: '80%' }} />
      </Grid>
    </Grid>
  )
}
