import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'

export const Wrapper = styled('div')({
  width: '100px',
  height: '100px',
  background: '#F4EBFF',
  border: '10px solid #F9F5FF',
  borderRadius: '28px',
  display: 'flex',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
})
type Props = {
  stepItem: {
    title: string
    content: string
    icon: string
  }
}

export const GuidanceStepsItem: FC<Props> = props => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Wrapper>
        <Box component="img" src={props.stepItem.icon} width="40px" height="40px" marginX="auto" marginY="auto" />
      </Wrapper>
      <Typography variant="h6" paddingTop="24px">
        {props.stepItem.title}
      </Typography>
      <Typography variant="body2" paddingTop="16px">
        {props.stepItem.content}
      </Typography>
    </Box>
  )
}
