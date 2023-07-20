import EmailIcon from '#root/assets/images/EmailIcon.svg'
import PasswordIcon from '#root/assets/images/PasswordIcon.svg'
import UserIcon from '#root/assets/images/UserSuccesIcon.png'
import { TextFieldForm } from '#root/components/TextFieldForm'
import { PasswordValidateSection } from '#root/features/client/sign-up/components/PasswordValidateSection'
import { UnderlinedLink } from '#root/features/login/components/LoginForm'
import { useIsMobile } from '#root/hooks/useIsMobile'
import { linearGradientColor, mainRed, theme } from '#root/themes/theme'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Checkbox, FormControlLabel, FormHelperText, Typography, styled } from '@mui/material'
import { E164Number } from 'libphonenumber-js/types'
import { ChangeEvent, FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import { z } from 'zod'

type Props = {}

const Wrapper = styled('div')({
  paddingBlock: '8%',
})

const InputPhoneNumber = styled(PhoneInput)({
  border: '1px solid #F6F6F6',
  borderRadius: '8px',
  backGround: 'var(--white, #FFF)',
  boxShadow: '1px 15px 23px 0px rgba(229, 229, 229, 0.25)',
  height: '56px',
  paddingLeft: '24px',
  '& input': {
    fontSize: '16px',
    fontFamily: '"Nunito", sans-serif',
    fontWeight: 400,
    '&::placeholder': {
      opacity: '1',
      color: 'light gray',
    },
    ':focus': {
      outline: 'none',
    },
  },
})

const ButtonStyled = styled(Button)({
  width: '100%',
  height: '48px',
  borderRadius: '24px',
  background: linearGradientColor,
  textTransform: 'none',
})

export const SignUpForm: FC<Props> = () => {
  const isMobile = useIsMobile()

  const [value, setValue] = useState<E164Number | undefined>()
  const [passwordValue, setPasswordValue] = useState<string>()
  const [conFirmPasswordValue, setConfirmPasswordValue] = useState<string | undefined>()

  const schema = z.object({
    name: z.string().trim().min(1, { message: 'Cannot be blank' }),
    surName: z.string().trim().min(1, { message: 'Cannot be blank' }),
    email: z
      .string()
      .email('Invalid email address')
      .min(5, { message: 'Business e-mail must be 5 or more characters long' })
      .trim(),
    password: z
      .string()
      .refine(password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password), {
        message: 'Invalid password format.',
      }),
    phoneNumber: z.string().min(10, { message: 'Phone number is in a wrong format' }),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })
  const handlePasswordOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
  }
  const confirmPasswordOnChangeHandler = (event: any) => {
    setConfirmPasswordValue(event.target.value)
  }
  const onSubmit = (data: any) => {
    if (data.password === conFirmPasswordValue) {
      console.log(data)
      return
    }
    console.log('Wrong')
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
          <Box width="100%" marginRight={isMobile ? '' : '4%'}>
            <TextFieldForm
              placeholder="Name"
              icon={UserIcon}
              register={{ ...register('name') }}
              error={errors.name?.message?.toString()}
            />
            {isMobile && <br />}
          </Box>
          <Box width="100%">
            <TextFieldForm
              placeholder="Surname"
              icon={UserIcon}
              register={{ ...register('surName') }}
              error={errors.surName?.message?.toString()}
            />
          </Box>
        </Box>
        <br />
        <TextFieldForm
          placeholder="Business e-mail"
          icon={EmailIcon}
          type="email"
          register={{ ...register('email') }}
          error={errors.email?.message?.toString()}
        />
        <br />
        <InputPhoneNumber
          international
          defaultCountry="SK"
          placeholder="Phone number"
          value={value}
          {...register('phoneNumber')}
          onChange={setValue}></InputPhoneNumber>
        <FormHelperText sx={{ color: 'red', paddingLeft: '1%', fontSize: '16px' }}>
          {errors.phoneNumber?.message?.toString()}
        </FormHelperText>

        <br />
        <TextFieldForm
          placeholder="Password"
          icon={PasswordIcon}
          type="password"
          onChange={handlePasswordOnChange}
          register={{ ...register('password') }}
          error={errors.password?.message?.toString()}
        />
        <br />
        <TextFieldForm
          placeholder="Confirm password"
          icon={PasswordIcon}
          type="password"
          onChange={event => confirmPasswordOnChangeHandler(event)}
        />
        <br />
        <PasswordValidateSection password={passwordValue} />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <Typography color="#181E54" fontWeight={400} fontSize="14px" textAlign="left">
              Please exclude me from any future emails regarding 8seneca and feature updates, marketing best practices,
              and promotions.
            </Typography>
          }
        />
        <br />
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
        <ButtonStyled type="submit">
          <Typography fontSize="500" fontWeight="16px" color="#FFF">
            Get started
          </Typography>
        </ButtonStyled>
      </form>
      <br />
      <Typography fontWeight={400} fontSize="14px">
        Already have an account?{' '}
        <span>
          <Link to={'#'} style={{ color: mainRed }}>
            Log in
          </Link>
        </span>
      </Typography>
    </Wrapper>
  )
}
