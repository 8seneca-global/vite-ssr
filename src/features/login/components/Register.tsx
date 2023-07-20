import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <Box textAlign={'center'} paddingY={'150px'}>
      <Typography variant="body2">Don’t have an account yet?</Typography>
      <Link to={'#'}>
        <Typography variant="body2" color={'rgba(235, 25, 51, 1)'} paddingTop={'13px'}>
          Register here
        </Typography>
      </Link>
    </Box>
  )
}
