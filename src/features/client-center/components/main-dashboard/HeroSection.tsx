import HeroSectionImg from '#root/assets/images/MainDashboardHeroSectionImg.svg'
import { linearGradientColor, theme } from '#root/themes/theme'
import { Box, Button, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled('div')({
  marginTop: '7%',
  fill: 'var(--white, #FFF)',
  boxShadow: '1px 5px 23px rgba(229, 229, 229, 0.50)',
})

const StyledButton = styled(Button)({
  width: '100%',
  minHeight: '58px',
  borderRadius: '70px',
  background: linearGradientColor,
  textTransform: 'none',
  marginTop: '25%',
})
type Props = {}

export const HeroSection: FC<Props> = () => {
  return (
    <Wrapper>
      <Grid container paddingX="3%">
        <Grid item xs={6} display="flex" alignItems="flex-end" marginBottom="3%">
          <Box>
            <Typography variant="h1" fontSize="24px" marginBottom="5%">
              Hi, John Smith
            </Typography>
            <Typography fontSize="16px" fontWeight={500} color={theme.palette.primary.main}>
              Let's finish your task today!
            </Typography>
            <StyledButton>
              <Typography fontSize="18px" fontWeight={700} color={theme.palette.info.main}>
                Today’s schedule
              </Typography>
            </StyledButton>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={HeroSectionImg} width="120%" />
        </Grid>
      </Grid>
    </Wrapper>
  )
}
