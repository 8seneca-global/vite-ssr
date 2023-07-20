import EmailIcon from '#root/assets/images/EmailIcon.svg'
import PasswordIcon from '#root/assets/images/PasswordIcon.svg'
import { TextFieldForm } from '#root/components/TextFieldForm'
import { RememberMeSection } from '#root/features/login/components/RememberMeSection'
import { linearGradientColor, mainRed, theme } from '#root/themes/theme'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, FormHelperText, Typography, styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

export const UnderlinedLink = styled(Link)(() => ({
  textDecoration: 'underline',
}))
export const SignInForm = () => {
  const schema = z.object({
    email: z
      .string()
      .email('Invalid email address')
      .min(5, { message: 'Business e-mail must be 5 or more characters long' })
      .trim(),
    password: z.string().min(5, { message: 'Password must be 5 or more characters long' }),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log('data')
  }
  return (
    <Box marginTop="9%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextFieldForm
            placeholder="Business e-mail"
            register={{ ...register('email') }}
            type="text"
            icon={EmailIcon}
          />
          <br />
          <TextFieldForm
            placeholder="Password"
            register={{ ...register('password') }}
            type="password"
            icon={PasswordIcon}
          />
        </Box>
        <br />
        <FormHelperText sx={{ color: 'red', paddingLeft: '1%', fontSize: '16px' }}>
          {errors.email?.message?.toString() || errors.password?.message?.toString()}
        </FormHelperText>
        <RememberMeSection />
        <br />
        <Typography fontSize="14px" fontWeight="400" color={theme.palette.primary.main} textAlign="left">
          By registering for an account, you are consenting to our{' '}
          <span>
            <UnderlinedLink to={'#'}>Terms of Service</UnderlinedLink>
          </span>{' '}
          and{' '}
          <span>
            <UnderlinedLink to={'#'}>Privacy policy</UnderlinedLink>
          </span>
        </Typography>
        <br />
        <Button
          type="submit"
          style={{
            width: '100%',
            height: '48px',
            background: linearGradientColor,
            border: '1px solid rgba(235, 25, 51, 1)',
            borderRadius: '24px',
          }}>
          <br />
          <Typography color={theme.palette.info.main} fontWeight={500} fontSize="16px" textTransform="none">
            Login
          </Typography>
        </Button>
      </form>
      <br />
      <Typography fontWeight={400} fontSize="14px">
        Not a member yet??{' '}
        <span>
          <Link to={'#'} style={{ color: mainRed }}>
            Sign up
          </Link>
        </span>
      </Typography>
    </Box>
  )
}
