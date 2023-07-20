import { useIsMobile } from '#root/hooks/useIsMobile'
import { theme } from '#root/themes/theme'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'

export const GuidanceCategoriesText = () => {
  const isMobile = useIsMobile()
  return (
    <Box textAlign={isMobile ? 'center' : 'left'} display="flex" flexDirection="column" justifyContent="center">
      <Typography variant="h1" fontSize="32px" marginX="auto">
        Easily manage your team recruitment in real time.
      </Typography>
      <Link
        to="/recruitment"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
        style={useMediaQuery(theme.breakpoints.down('sm')) ? { marginLeft: 'auto', marginRight: 'auto' } : {}}>
        <Button
          sx={{ border: '1px solid #EB1933', borderRadius: '7px', width: '164px', height: '40px', marginTop: '16px' }}>
          <Typography color="#EB1933" className="font-normal text-base" textTransform="none">
            Explore now
          </Typography>
        </Button>
      </Link>
    </Box>
  )
}
