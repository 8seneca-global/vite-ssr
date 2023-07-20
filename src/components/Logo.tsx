import LogoImage from '#root/assets/images/logo.png'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

const ImageWrapper = styled('div')({
  textAlign: 'center',
  '& img': {
    verticalAlign: 'middle',
    display: 'inline-block',
  },
})

export const Logo: FC<Props> = () => {
  return (
    <ImageWrapper>
      <Link to="/">
        <img width="auto" height="64" src={LogoImage} className="attachment-large size-large" alt="" loading="lazy" />
      </Link>
    </ImageWrapper>
  )
}
