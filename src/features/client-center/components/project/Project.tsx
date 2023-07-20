import { InfoSection } from '#root/features/client-center/components/InfoSection'
import { ProjectMainSection } from '#root/features/client-center/components/project/ProjectMainSection'
import { Box, Grid, styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled(Box)({
  paddingInline: '3%',
})

type Props = {}

export const Project: FC<Props> = () => {
  return (
    <Wrapper>
      <Grid container spacing="5%">
        <Grid item xs={8}>
          <ProjectMainSection />
        </Grid>
        <Grid item xs={4}>
          <InfoSection />
        </Grid>
      </Grid>
    </Wrapper>
  )
}
