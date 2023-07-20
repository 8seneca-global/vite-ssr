import { theme } from '#root/themes/theme'
import { Box, Button, Typography, styled } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  item: {
    label: string
    activeIcon: string
    inActiveIcon: string
    slug: string
  }
  isActive: boolean
  index: number
  setActiveButtonIndex: React.Dispatch<React.SetStateAction<string>>
}

const ButtonItemWrapper = styled(Box)({
  marginInline: '5%',
  display: 'flex',
})
const StyledButton = styled(Button)<{ isActive: boolean }>(({ isActive }) => ({
  width: '100%',
  borderRadius: '10px',
  background: isActive ? '#F5F5F7' : 'transparent',
  textTransform: 'none',
  marginBottom: '16px',
  height: '44px',
  justifyContent: 'left',
  '&:hover': {
    background: isActive ? '#F5F5F7' : 'transparent',
  },
}))

export const MenuItem: FC<Props> = ({ item, isActive, setActiveButtonIndex, index }) => {
  return (
    <Link to={item.slug}>
      <StyledButton key={item.label} isActive={isActive} onClick={() => setActiveButtonIndex(item.slug)}>
        <ButtonItemWrapper>
          <img src={isActive ? item.activeIcon : item.inActiveIcon} />
          <Typography
            fontSize="14px"
            marginLeft="10px"
            marginTop="2px"
            fontWeight={700}
            color={isActive ? theme.palette.primary.main : theme.palette.info.main}>
            {item.label}
          </Typography>
        </ButtonItemWrapper>
      </StyledButton>
    </Link>
  )
}
