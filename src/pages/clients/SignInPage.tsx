import { SignInForm } from '#root/features/login/components/LoginForm'
import { TextField, Typography, styled } from '@mui/material'
import { FC } from 'react'

type Props = {}

type LoginFormInputs = {
  email: string
  password: string
}

const Wrapper = styled('div')({
  height: '100vh',
  width: '100%',
  paddingBlock: '20%',
  paddingInline: '20%',
  overflow: 'hidden',
})

const StyledTextField = styled(TextField)({
  border: '1px solid #F6F6F6',
  borderRadius: '8px',
  boxShadow: '1px 15px 23px 0px rgba(229, 229, 229, 0.25)',
})

export const SignInPage: FC<Props> = () => {
  return (
    <Wrapper>
      <Typography variant="h1" fontSize="32px">
        Log in
      </Typography>
      <SignInForm />
    </Wrapper>
  )
}
