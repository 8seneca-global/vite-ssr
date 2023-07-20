import { theme } from '#root/themes/theme'
import { useMediaQuery } from '@mui/material'

export const useIsMobile = () => {
  return useMediaQuery(theme.breakpoints.down('sm'))
}
