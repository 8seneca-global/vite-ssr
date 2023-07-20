import storage from '#root/utils/storage'
import { Avatar, Box, Button } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

export const ClientHeader: FC<Props> = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    storage.clearToken()
    navigate('/client/sign-in')
  }
  return (
    <Box display="flex" alignItems={'flex-end'} justifyContent="flex-end">
      <Avatar></Avatar>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  )
}
