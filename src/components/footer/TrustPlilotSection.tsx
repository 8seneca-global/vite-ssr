import TrustPilot from '#root/assets/images/Trustpilot.svg'
import TrustpilotLogo from '#root/assets/images/TrustpilotLogo.svg'
import { Box, Typography, styled } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
type Props = {}

const Wrapper = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px',
})

export const TrustPilotSection: FC<Props> = () => {
  return (
    <Wrapper to={'https://www.trustpilot.com/review/8seneca.com'} target="_blank">
      <Typography fontWeight={500} color="#FFF" fontSize="18px">
        Excellent
      </Typography>
      <Box component="img" src={TrustPilot} />
      <Box component="img" src={TrustpilotLogo} />
    </Wrapper>
  )
}
