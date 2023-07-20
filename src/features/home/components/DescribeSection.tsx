import HeroSectionItem from '#root/assets/images/HeroSectionItem.png'
import HeroAnimation from '#root/assets/lottie/hero.json'
import { SectionWrapper } from '#root/components/SectionWrapper'
import { CalendarPopUp } from '#root/features/contact-us/components/CalendarPopUp'
import { useIsMobile } from '#root/hooks/useIsMobile'
import { linearGradientColor, mainRed, theme } from '#root/themes/theme'
import { Box, Button, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { FC, useState } from 'react'
import styled from 'styled-components'

type Props = {}

const BackgroundWrapper = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  maxWidth: '100%',
  zIndex: 0,
})

const Wrapper = styled(Grid)({
  position: 'relative',
  overflow: 'hidden',
})

const StyledTypo = styled(Typography)({
  width: '100%',
  color: '#181E54',
  textAlign: 'left',
})
export const DescribeSection: FC<Props> = () => {
  const isMobile = useIsMobile()
  const [isOpeningContactUs, setIsOpeningContactUs] = useState(false)

  return (
    <SectionWrapper>
      <Wrapper container spacing="40px">
        <Grid item xs={12} sm={7} marginTop="auto" marginBottom="auto">
          <Box component="div" display="flex" flexDirection="column" alignItems="center">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <StyledTypo fontSize="43px" fontWeight="730">
                Empowering Businesses Through IT Outsourcing and Team{' '}
                <span style={{ color: mainRed, display: 'block' }}>
                  Extensions
                  <img src={HeroSectionItem} width={isMobile ? '30%' : '20%'} />
                </span>
              </StyledTypo>
            </div>

            <StyledTypo marginTop="6%" fontSize="28px" fontWeight="400">
              Experience a seamless extension of your in-house team with our tailored IT solutions. Discover the
              difference of true collaboration and elevate your business to new heights with 8Seneca
            </StyledTypo>
            <Box component="div" display="flex" justifyContent="left" width="100%">
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}>
                <Button
                  onClick={() => setIsOpeningContactUs(true)}
                  sx={{
                    borderRadius: '7px',
                    minWidth: '164px',
                    height: '40px',
                    background: linearGradientColor,
                    marginTop: '35%',
                  }}>
                  <Typography color={theme.palette.info.main} className="font-normal text-base">
                    GET IN TOUCH
                  </Typography>
                </Button>
              </motion.button>
              <CalendarPopUp open={isOpeningContactUs} onClose={() => setIsOpeningContactUs(!isOpeningContactUs)} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} textAlign="left">
          <Lottie animationData={HeroAnimation} loop={true} />
        </Grid>
      </Wrapper>
    </SectionWrapper>
  )
}
