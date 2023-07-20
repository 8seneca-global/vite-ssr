import Logo from '#root/assets/images/logo.png'
import { Box } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
type Props = {}

const ImageWrapper = styled('div')({
  textAlign: 'center',
  paddingTop: '7.5px',
  paddingBottom: '7.5px',
})

export const NewLogo: FC<Props> = () => {
  return (
    <ImageWrapper>
      <Link to="/">
        <Box
          component="img"
          src={Logo}
          sx={{ width: { xs: '80%', md: '80%' } }}
          className="attachment-large size-large"
          alt=""
          loading="lazy"
        />
      </Link>
    </ImageWrapper>
  )
}
