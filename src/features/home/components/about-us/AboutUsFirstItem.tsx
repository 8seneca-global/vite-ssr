import InnovationAnimation from '#root/assets/lottie/InnovationAnimation.json'
import { useIsMobile } from '#root/hooks/useIsMobile'
import { Box, Grid, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import { FC } from 'react'

type Props = {}
const textColumn = (
  <Box>
    <Typography variant="h1" fontSize="30px">
      Driving Digital Innovation Through Global IT Talent
    </Typography>
    <Box component="div" marginTop="2%" textAlign="left">
      <Typography variant="subtitle1">
        At 8Seneca, we specialize in global B2B IT outsourcing, connecting your business with top-tier IT professionals
        from Vietnam. Leveraging our unique Pure Play model, we offer unparalleled flexibility and high expertise to
        startups and enterprises alike.
      </Typography>
    </Box>
  </Box>
)

export const AboutUsFirstItem: FC<Props> = () => {
  const isMobile = useIsMobile()
  const imageColumn = (
    <Lottie animationData={InnovationAnimation} loop={true} style={isMobile ? { width: '100%' } : { width: '80%' }} />
  )

  const gridItems = isMobile ? [textColumn, imageColumn] : [imageColumn, textColumn]
  return (
    <div>
      <Grid
        container
        columnSpacing="6%"
        marginTop="2%"
        display="flex"
        justifyContent="center"
        style={isMobile ? { marginBottom: '24px' } : {}}>
        <Grid item xs={12} sm={5}>
          {gridItems[0]}
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{ textAlign: { xs: 'center', sm: 'left' }, display: 'flex', alignItems: 'center' }}>
          {gridItems[1]}
        </Grid>
      </Grid>
    </div>
  )
}
