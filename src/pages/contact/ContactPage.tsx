import { PageWrapper } from '#root/components/PageWrapper'
import { ScheduleForm } from '#root/features/contact-us/components/ScheduleForm'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {}

export const ContactPage: FC<Props> = () => {
  return (
    <PageWrapper>
      <Typography variant="h1">Contact us</Typography>
      <Typography variant="subtitle1">
        To facilitate our meeting, kindly provide the table details for input.
      </Typography>
      <Box marginTop="-5%">
        <ScheduleForm />
      </Box>
    </PageWrapper>
  )
}
