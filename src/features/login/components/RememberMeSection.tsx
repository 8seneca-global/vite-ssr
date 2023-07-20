import { UnderlinedLink } from '#root/features/login/components/LoginForm'
import { theme } from '#root/themes/theme'
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'

export const RememberMeSection = () => {
  return (
    <Box component="div" display="flex" justifyContent="space-between">
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={
          <Typography color="#181E54" fontWeight={400} fontSize="16px">
            Remember me
          </Typography>
        }
      />
      <UnderlinedLink
        to={'#'}
        style={{
          color: theme.palette.primary.main,
          fontWeight: 400,
          fontSize: '16px',
          alignItems: 'center',
          display: 'flex',
        }}>
        Forgot your password?
      </UnderlinedLink>
    </Box>
  )
}
