import { SignUpForm } from '#root/features/client/sign-up/components/SignUpForm'
import { Typography, styled } from '@mui/material'
import { FC } from 'react'

type Props = {}

const Wrapper = styled('div')({
  paddingBlock: '9%',
  paddingInline: '18%',
})

export const SignUpPage: FC<Props> = () => {
  return (
    <Wrapper>
      <Typography variant="h1" fontSize="32px">
        Sign Up
      </Typography>
      <br />
      <Typography variant="h1" fontWeight="400" fontSize="16px">
        Empower your experience, sign up for a free account today
      </Typography>
      <SignUpForm />
    </Wrapper>
  )
}
