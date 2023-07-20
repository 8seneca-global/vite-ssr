import { InfoSection } from '#root/features/client-center/components/InfoSection'
import { MainSection } from '#root/features/client-center/components/main-dashboard/MainSection'
import { Grid, styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled('div')({
  paddingInline: '3%',
})

type Props = {}

export const MainDashBoard: FC<Props> = () => {
  return (
    <Wrapper>
      <Grid container spacing="5%">
        <Grid item xs={8}>
          <MainSection />
        </Grid>
        <Grid item xs={4}>
          <InfoSection />
        </Grid>
      </Grid>
    </Wrapper>
  )
}
