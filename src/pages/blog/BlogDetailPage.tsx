import { BlogDetailPageContent } from '#root/features/blog/components/BolgDetailPageContent'
import { FC } from 'react'
import styled from 'styled-components'

const Container = styled('div')({
  width: '100%',
  textAlign: 'left',
  paddingTop: '140px',
  paddingLeft: '10%',
  paddingRight: '10%',
})
type Props = {}
export const BlogDetailPage: FC<Props> = () => {
  return (
    <Container>
      <BlogDetailPageContent />
      {/* <StayInTheLoopComponent paddingTop="64px" /> */}
    </Container>
  )
}
