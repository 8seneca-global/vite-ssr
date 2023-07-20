import { MenuNavBar } from '#root/features/client-center/components/MenuNavBar'
import { Grid } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export const ClientCenterLayOut: FC<Props> = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={2} position="fixed">
          <MenuNavBar />
        </Grid>
        <Grid item xs={12} paddingLeft="17%">
          <Outlet />
        </Grid>
      </Grid>
    </>
  )
}
