import TomasAvatar from '#root/assets/images/TomasBuceckAvatar.jpg'
import { theme } from '#root/themes/theme'
import { Avatar, Box, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const AvatarSection: FC<Props> = () => {
  return (
    <Box paddingX="10%" display="flex" textAlign="left" justifyContent="flex-start">
      <Avatar src={TomasAvatar} sx={{ width: '60px', height: '51px' }} />
      <Box marginLeft="4%" width="100%" display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h1" fontSize="16px">
          Tomas Bucek
        </Typography>
        <Typography fontWeight="400" color={theme.palette.primary.main} fontSize="14px">
          8Seneca Company
        </Typography>
      </Box>
    </Box>
  )
}
