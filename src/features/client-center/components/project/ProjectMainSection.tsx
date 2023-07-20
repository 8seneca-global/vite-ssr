import { HeadingSection } from '#root/features/client-center/components/HeadingSection'
import { Box, styled } from '@mui/system'
import { FC } from 'react'

const Wrapper = styled(Box)({
  paddingTop: '7%',
  textAlign: 'left',
})

type Props = {}

export const ProjectMainSection: FC<Props> = () => {
  return (
    <Wrapper>
      <HeadingSection page="Project" />
    </Wrapper>
  )
}
