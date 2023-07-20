import { ProcessLoadingItem } from '#root/features/home/components/process/ProcessLoadingItem'
import { linearGradientColor, theme } from '#root/themes/theme'
import { Box, Typography, styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled('div')(props => ({
  paddingLeft: '10%',
  paddingRight: '10%',
  paddingTop: '3%',
  paddingBottom: '13%',
  height: 'fit-content',
  [props.theme.breakpoints.down(1300)]: {
    paddingTop: '5%',
    paddingBottom: '15%',
  },
  [props.theme.breakpoints.down(1000)]: {
    paddingTop: '8%',
    paddingBottom: '25%',
  },
  [props.theme.breakpoints.down(670)]: {
    paddingBottom: '40%',
  },
}))

const HeadingWrapper = styled('div')(props => ({
  marginBottom: '15%',
  textAlign: 'left',
  [props.theme.breakpoints.down(1300)]: {
    marginBottom: '20%',
  },
  [props.theme.breakpoints.down(750)]: {
    marginBottom: '25%',
  },
}))

type Props = {}

export const ProgressSection: FC<Props> = () => {
  return (
    <Box sx={{ background: linearGradientColor }}>
      <Wrapper>
        <HeadingWrapper>
          <Typography variant="h1" fontSize="30px" color={theme.palette.info.main}>
            Maximized Efficiency, Minimized Costs
          </Typography>
          <br />
          <Typography variant="h5" fontSize="16px" color={theme.palette.info.main}>
            Harness the power of optimal collaboration models to propel your business forward
          </Typography>
        </HeadingWrapper>
        <ProcessLoadingItem />
      </Wrapper>
    </Box>
  )
}
