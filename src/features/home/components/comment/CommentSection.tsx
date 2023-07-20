import { SectionWrapper } from '#root/components/SectionWrapper'
import { CommentList } from '#root/features/home/components/comment/CommentList'
import { theme } from '#root/themes/theme'
import { Typography } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const CommentSection: FC<Props> = () => {
  return (
    <SectionWrapper>
      <Typography fontWeight="400" fontSize="30px" textAlign="left" color={theme.palette.primary.main}>
        What do the media say <span style={{ fontWeight: '600' }}>About Us?</span>
      </Typography>
      <CommentList />
    </SectionWrapper>
  )
}
