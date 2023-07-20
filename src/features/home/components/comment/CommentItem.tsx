import { useIsMobile } from '#root/hooks/useIsMobile'
import { Box, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'
import { Slide } from 'react-awesome-reveal'

type CommentItemType = {
  icon: string
  name: string
  href: string
  description: string
}

type Props = {
  item: CommentItemType
}
const CommentWrapper = styled('div')({
  width: '100%',
  background: '#F8F8F8',
  borderRadius: '30px',
  gap: '10px',
})

const CommentLinkStyled = styled('a')({
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '32px',
  paddingBottom: '32px',
  paddingLeft: '6%',
  paddingRight: '6%',
  minHeight: '200px',
})

export const CommentItem: FC<Props> = ({ item }) => {
  const isMobile = useIsMobile()
  const slideDirection = item.name === 'Bloomberg' || item.name === 'AP News' ? 'left' : 'right'

  return (
    <Grid item xs={isMobile ? 12 : 6}>
      <Slide direction={slideDirection}>
        <CommentWrapper>
          <CommentLinkStyled href={item.href} target="_blank">
            <Box display="flex" alignItems="center">
              <img src={item.icon} style={{ height: item.name === 'ADVFN' ? 24 : 48 }} />
              <Typography fontWeight="700" fontSize="21px" marginLeft="12px">
                {item.name}
              </Typography>
            </Box>
            <Box marginTop="12px">
              <Typography>{item.description}</Typography>
            </Box>
          </CommentLinkStyled>
        </CommentWrapper>
      </Slide>
    </Grid>
  )
}
