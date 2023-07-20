import { ClientInfoSection } from '#root/features/client-center/components/main-dashboard/ClientInfoSection'
import { Box, styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled(Box)({
  paddingBlock: '8%',
})

type Props = {}

export const InfoSection: FC<Props> = () => {
  return (
    <Wrapper>
      <ClientInfoSection />
      {/* <CalendarSection /> */}
    </Wrapper>
  )
}
