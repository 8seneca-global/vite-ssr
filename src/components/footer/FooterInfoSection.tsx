import Logo from '#root/assets/images/FooterLogo.png'
import { ContactUsSection } from '#root/components/footer/ContactUsSection'
import { SubscribeUsSection } from '#root/components/footer/SubscribeUsSection'
import { TrustPilotSection } from '#root/components/footer/TrustPlilotSection'
import { linearGradientColor } from '#root/themes/theme'
import { Box, styled } from '@mui/material'
import { FC } from 'react'

type Props = {}

const Wrapper = styled('div')({
  background: linearGradientColor,
  borderRadius: '12px',
})

const ItemWrapper = styled('div')({
  paddingBlock: '10%',
  paddingInline: '8%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const FooterInfoSection: FC<Props> = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <Box component="img" src={Logo} width="70%" />
        <TrustPilotSection />
        <SubscribeUsSection />
        <ContactUsSection />
      </ItemWrapper>
    </Wrapper>
  )
}
