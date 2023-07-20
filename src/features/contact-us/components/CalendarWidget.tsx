import CallImage from '#root/assets/images/call.png'
import { ScheduleForm } from '#root/features/contact-us/components/ScheduleForm'
import { Button, Modal } from '@mui/material'
import { FC, useState } from 'react'
import styled from 'styled-components'

type Props = {}

export const CalendarWidget: FC<Props> = () => {
  const [showModal, setShowModal] = useState(false)

  const WidgetWrapper = styled('div')({
    position: 'fixed',
    bottom: 24,
    right: 12,
  })

  const ButtonWrapper = styled(Button)({
    zIndex: 1000,
    border: 'none !important',
    '&.MuiButton-contained': {
      borderRadius: 30,
      fontWeight: '500',
    },
  })

  return (
    <WidgetWrapper>
      <ButtonWrapper variant="outlined" onClick={() => setShowModal(true)} className="schedule">
        <img src={CallImage} width="48px" />
      </ButtonWrapper>
      <Modal open={showModal} onClose={() => setShowModal(!showModal)}>
        <ScheduleForm />
      </Modal>
    </WidgetWrapper>
  )
}
