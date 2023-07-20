import InfoSectionImg from '#root/assets/images/DashboardInfoSectionImg.svg'
import { AvatarSection } from '#root/features/client-center/components/main-dashboard/AvatarSection'
import { linearGradientColor, theme } from '#root/themes/theme'
import { Box, Button, Typography, styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled(Box)({
  borderRadius: '20px',
  border: '1px solid #F6F6F6',
  boxShadow: '1px 5px 23px 0px rgba(229, 229, 229, 0.50)',
})

const ItemWrapper = styled(Box)({
  paddingTop: '10%',
  paddingBottom: '4%',
  paddingInline: '7%',
})

const ButtonStyled = styled(Button)({
  width: '118px',
  height: '58px',
  background: linearGradientColor,
  borderRadius: '70px',
  textTransform: 'none',
  marginTop: '4%',
})

type Props = {}

export const ClientInfoSection: FC<Props> = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <AvatarSection />
        <img src={InfoSectionImg} width="100%" style={{ marginTop: '13%' }} />
        <Box marginTop="10%" textAlign="left">
          <Typography variant="h1" fontSize="22px" marginBottom="3%">
            Building dev team, Quickly and Affordably
          </Typography>
          <Typography fontSize="14px" fontWeight="400" color={theme.palette.primary.main}>
            From full-time remote engineering teams to hourly contractors, work with remote devs as needed
          </Typography>
          <ButtonStyled>
            <Typography fontSize="18px" fontWeight="700" color={theme.palette.info.main}>
              Hire Us
            </Typography>
          </ButtonStyled>
        </Box>
      </ItemWrapper>
    </Wrapper>
  )
}
