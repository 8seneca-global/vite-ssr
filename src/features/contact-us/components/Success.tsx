import SuccessContactIcon from '#root/assets/images/SuccessContactIcon.png'
import TimeIcon from '#root/assets/images/TimeIcon.png'
import UserSuccessIcon from '#root/assets/images/UserSuccesIcon.png'
import { theme } from '#root/themes/theme'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  open: boolean
  describedDay: string
  describedDate: string
  describedTime: string
  describedTimeEnd: string
  name?: string
}

const TimeCard = styled('div')({
  height: 91,
  display: 'flex',
  background: '#FFFFFF',
  borderRadius: '8px',
  marginLeft: 'auto',
  marginRight: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const SuccessItemCard = styled('div')({
  height: 60,
  display: 'flex',
  background: '#FFFFFF',
  borderRadius: '8px',
  marginLeft: 'auto',
  marginRight: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  justifySelf: 'center',
  paddingTop: '10%',
})
export const Success: FC<Props> = ({ open, describedDate, describedDay, describedTime, describedTimeEnd, name }) => {
  if (open) {
    return (
      <Wrapper>
        <Typography
          variant="h1"
          fontSize={30}
          fontWeight={700}
          style={{ textAlign: 'center' }}
          color={theme.palette.info.main}>
          Successful Appointment
        </Typography>
        <Typography
          variant="subtitle2"
          fontSize="14px"
          style={{ color: theme.palette.info.main, paddingTop: '16px', textAlign: 'center', paddingBottom: '32px' }}>
          We will send an invitation to your email
        </Typography>
        <Box paddingBottom="30px">
          <TimeCard>
            <Box paddingLeft="24px">
              <Box component="img" src={TimeIcon} width={22} height={22} marginRight="20px" />
            </Box>
            <Typography fontSize="16px">
              {describedDay}, {describedDate}, {describedTime} - {describedTimeEnd}
            </Typography>
          </TimeCard>
        </Box>
        <Box paddingBottom="30px">
          <SuccessItemCard>
            <Box paddingLeft="24px">
              <Box component="img" src={UserSuccessIcon} height={22} width={22} />
            </Box>
            <Typography fontSize="16px" paddingLeft="20px">
              {name}
            </Typography>
          </SuccessItemCard>
        </Box>
        <Box paddingBottom="30px">
          <SuccessItemCard>
            <Box paddingLeft="24px">
              <Box component="img" src={SuccessContactIcon} height={22} width={22} />
            </Box>
            <Typography fontSize="16px" paddingLeft="20px">
              Google Meet
            </Typography>
          </SuccessItemCard>
        </Box>
      </Wrapper>
    )
  } else {
    return <></>
  }
}
