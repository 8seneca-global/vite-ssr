import ClientLogo from '#root/assets/images/8senecaClientLogo.svg'
import { theme } from '#root/themes/theme'
import { Box, Typography, styled } from '@mui/material'
import { FC } from 'react'

type Props = {}

const Wrapper = styled('div')({
  paddingBlock: '10%',
  textAlign: 'left',
  paddingInline: '5%',
  height: '100%',
})
export const ClientLayoutItem: FC<Props> = () => {
  return (
    <Wrapper>
      <img src={ClientLogo} />
      <Box component="div" height="100%" sx={{ paddingBlock: '50%' }}>
        <Typography variant="h1" color={theme.palette.info.main}>
          Start your remarkable journey with us!
        </Typography>
        <br />
        <Typography variant="subtitle2" fontSize="1rem" color={theme.palette.info.main}>
          Join our growing community of clients and vendors today!
        </Typography>
      </Box>
    </Wrapper>
  )
}
