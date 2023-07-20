import { NewLogo } from '#root/components/NewLogo'
import { appPaths } from '#root/constants/appPaths'
import { theme } from '#root/themes/theme'
import { Close, Menu } from '@mui/icons-material'
import { Box, Grid, useScrollTrigger } from '@mui/material'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`

const Wrapper = styled.div<{ isFixed: boolean }>`
  box-sizing: border-box;
  width: 100%;
  background-color: ${theme.palette.info.main};
  z-index: 1000;
  position: fixed;
  animation: ${props => (props.isFixed ? fadeIn : fadeOut)} 0.3s ease forwards;
  pointer-events: ${props => (props.isFixed ? 'auto' : 'none')};
  animation-duration: 1s;
`

const menuClick = 'menu-click'

const menuItems = [
  { label: 'Home', link: appPaths.home },
  { label: 'Tools', link: appPaths.tools },
  { label: 'Blog', link: appPaths.blog },
  { label: 'Recruitment Center', link: appPaths.recruitment },
  { label: 'Contact Us', link: appPaths.contact },
]

const AppHeader = () => {
  const trigger = useScrollTrigger()
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (menuClick?: string) => {
    setIsClicked(!isClicked)
    if (!menuClick) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      })
    }
    window.addEventListener('mousemove', handleWindowMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])
  return (
    <Wrapper isFixed={!trigger || coords.y <= 80}>
      <Grid
        container
        alignItems="center"
        paddingX="8%"
        paddingTop="12px"
        paddingBottom="12px"
        style={{ backgroundColor: '#fff' }}
        justifyContent="space-between">
        <Grid item lg={2} xs={6} md={2} sm={2}>
          <NewLogo />
        </Grid>
        <Grid
          item
          lg={7}
          xs={0}
          md={7}
          sm={8}
          display="flex"
          alignItems="center"
          textAlign="center"
          justifyContent="center">
          <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
            {menuItems.map(item => (
              <li key={item.label} className="nav-item" style={{ fontSize: '16px' }}>
                <NavLink to={item.link} className="nav-links" onClick={() => handleClick()}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={() => handleClick(menuClick)}>
            {isClicked ? <Close fontSize="large" /> : <Menu fontSize="large" />}
          </div>
        </Grid>
        <Grid item lg={2} xs={0} md={2} sm={2}>
          <Box>{/* <NavigationItem /> */}</Box>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
export default AppHeader
