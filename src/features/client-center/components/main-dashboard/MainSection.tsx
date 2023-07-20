import { HeadingSection } from '#root/features/client-center/components/HeadingSection'
import { HeroSection } from '#root/features/client-center/components/main-dashboard/HeroSection'
import { ProjectSummarySection } from '#root/features/client-center/components/main-dashboard/ProjectSummarySection'
import { styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled('div')({
  paddingTop: '7%',
  textAlign: 'left',
})

type Props = {}

export const MainSection: FC<Props> = () => {
  return (
    <Wrapper>
      <HeadingSection page="Main Dashboard" />
      <HeroSection />
      <ProjectSummarySection />
    </Wrapper>
  )
}
