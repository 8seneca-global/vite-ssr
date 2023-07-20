import { PasswordValidateItem } from '#root/features/client/sign-up/components/PasswordValidateItem'
import { Grid } from '@mui/material'
import { FC } from 'react'

type Props = {
  password?: string
}

export const PasswordValidateSection: FC<Props> = ({ password }) => {
  let isPasswordIncludeLowerCase = false
  let isPasswordIncludeNumber = false
  let isPasswordIncludeUpperCase = false
  let isPasswordIncludeSpecialChar = false
  let isPassword8CharMin = false

  if (password) {
    isPasswordIncludeLowerCase = /[a-z]/.test(password)
    isPasswordIncludeNumber = /\d/.test(password)
    isPasswordIncludeUpperCase = /[A-Z]/.test(password)
    isPasswordIncludeSpecialChar = /[!@#$%^&*()_\-+=<>?]/.test(password)
    isPassword8CharMin = password.length >= 8
  }
  const validations = [
    {
      name: 'One lowercase character',
      validator: isPasswordIncludeLowerCase,
    },
    {
      name: 'One number',
      validator: isPasswordIncludeNumber,
    },
    {
      name: 'One uppercase character',
      validator: isPasswordIncludeUpperCase,
    },
    {
      name: 'One special character',
      validator: isPasswordIncludeSpecialChar,
    },
    {
      name: '8 characters minimum',
      validator: isPassword8CharMin,
    },
  ]
  return (
    <Grid container>
      {validations.map(item => (
        <PasswordValidateItem item={item} key={item.name} />
      ))}
    </Grid>
  )
}
