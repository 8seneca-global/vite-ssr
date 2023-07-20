import BackgroundImg from '#root/assets/images/ClientBackground.svg'
import { ClientLayoutItem } from '#root/components/layout/ClientLayoutItem'
import { useIsMobile } from '#root/hooks/useIsMobile'
import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export const ClientPublicLayout: FC<Props> = () => {
  const isMobile = useIsMobile()
  return (
    <Box
      sx={{
        overflow: 'hidden',
      }}>
      {isMobile ? (
        <Outlet />
      ) : (
        <Grid container height="100vh">
          <Grid
            item
            xs={4}
            style={{
              backgroundImage: `url(${BackgroundImg})`,
              backgroundSize: ' 100vh',
              backgroundRepeat: 'no-repeat',
            }}>
            <ClientLayoutItem />
          </Grid>
          <Grid item xs={8}>
            <Outlet />
          </Grid>
        </Grid>
      )}
    </Box>
  )
}
