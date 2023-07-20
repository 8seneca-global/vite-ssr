import { Box } from '@mui/material'
import ReactLoading from 'react-loading'
export const Loading = () => {
  return (
    <Box component="div" display="flex" paddingBottom="auto" justifyContent="center">
      <ReactLoading type="bars" color="#181E54" height={500} width={200} />
    </Box>
  )
}
