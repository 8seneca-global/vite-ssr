import QuestionIcon from '#root/assets/images/QuestionIcon.svg'
import { theme } from '#root/themes/theme'
import { Box, Button, Typography, styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled('div')({
  bottom: '10vh',
  height: '25vh',
  background: 'rgba(20, 21, 34, 1)',
  borderRadius: '10px',
})

const QuestionImg = styled('img')({
  position: 'relative',
  top: '-4vh',
  left: '50%',
  transform: 'translateX(-50%)',
})

type Props = {}

export const HelpCenterSection: FC<Props> = () => {
  return (
    <Wrapper>
      <QuestionImg src={QuestionIcon} />
      <Box display="flex" flexDirection="column" justifyContent="center" marginTop="-15%" marginX="10%">
        <Box>
          <Typography color={theme.palette.info.main} fontSize="16px" fontWeight={700}>
            Help Center
          </Typography>
          <Typography color={theme.palette.info.main} fontSize="12px" fontWeight={500} marginTop="5%">
            Having Trouble in Learning. Please contact us for more questions.
          </Typography>
        </Box>
        <Button sx={{ marginTop: '20%', textTransform: 'none', background: 'white', borderRadius: '10px' }}>
          <Typography color="rgba(20, 21, 34, 1)" fontSize="12px" fontWeight={500}>
            Go To Help Center
          </Typography>
        </Button>
      </Box>
    </Wrapper>
  )
}
