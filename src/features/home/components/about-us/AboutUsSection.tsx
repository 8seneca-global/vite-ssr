import { SectionWrapper } from '#root/components/SectionWrapper'
import { AboutUsFirstItem } from '#root/features/home/components/about-us/AboutUsFirstItem'
import { AboutUsSecondItem } from '#root/features/home/components/about-us/AboutUsSecondItem'
import { Box, styled } from '@mui/material'
import { FC } from 'react'
// import { Animator, MoveIn } from 'react-scroll-motion'

export const ContentItem = styled(Box)(props => ({
  width: '90px',
  height: '90px',
  background: 'linear-gradient(113deg, #181E54 -12.48%, #EB1933 85.1%)',
  borderRadius: '24px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '20px',
  marginBottom: '20px',

  [props.theme.breakpoints.up('sm')]: {
    marginTop: '30px',
    marginBottom: '30px',
  },
}))

type Props = {}

export const AboutUsSection: FC<Props> = props => {
  return (
    <SectionWrapper>
      {/* <Animator animation={MoveIn(200, 0)}> */}
      <AboutUsFirstItem />
      {/* </Animator> */}
      {/* <Animator animation={MoveIn(-200, 0)}> */}
      <AboutUsSecondItem />
      {/* </Animator> */}
    </SectionWrapper>
  )
}
