import { Button, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
type Props = {}

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
})

const LinkWrapper = styled(Link)({})

export const NavigationItem: FC<Props> = () => {
  return (
    <Wrapper>
      <Button sx={{ background: '#FFF', width: '214px', height: '42px', borderRadius: '40px' }}>
        <Typography fontSize="18px" fontWeight={500} color="rgba(245, 245, 245, 1)" textTransform="none">
          Client Center
        </Typography>
      </Button>
    </Wrapper>
  )
}
