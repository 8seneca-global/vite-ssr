import { Box, CardMedia } from '@mui/material'
import YouTube from 'react-youtube'

export const GuidanceVideo = () => {
  const opts = {
    height: '400px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  return (
    <Box component="div" marginTop="60px">
      <CardMedia style={{ borderRadius: '16px', overflow: 'hidden' }}>
        <YouTube videoId="FCkUmHqdt90" opts={opts} />
      </CardMedia>
    </Box>
  )
}
