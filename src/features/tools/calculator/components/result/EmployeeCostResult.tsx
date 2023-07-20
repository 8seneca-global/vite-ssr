import { CalculatorInputsFormType } from '#root/features/tools/calculator/components/CalculatorForm'
import { Currencies } from '#root/features/tools/calculator/components/CalculatorResult'
import { ConvertTypesEnum } from '#root/features/tools/calculator/components/inputs/ConvertTypeSelector'
import { mainRed, theme } from '#root/themes/theme'
import { currencyFormat } from '#root/utils/currencyFormat'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  inputs: CalculatorInputsFormType
  data: any
}

const StyledTypography = styled(Typography)({})

export const EmployeeCostResult: FC<Props> = ({ inputs, data }) => {
  const { currency, salary, convertType } = inputs as CalculatorInputsFormType
  const { totalCost, socialInsurance, healthInsurance, accidentInsurance, unemploymentInsurance } = data
  const isGrossToNet = convertType === ConvertTypesEnum.gtn
  const currencyType = Object.values(Currencies).find(item => item.label === currency)
  if (!currencyType) {
    return <></>
  }
  const currencySymbol = currencyType.symbol
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 4,
        margin: '0 auto',
        '@media (min-width: 600px)': { gap: 6, maxWidth: '920px' },
        '@media (min-width: 960px)': { maxWidth: '970px' },
      }}>
      <Box sx={{ boxShadow: 1, borderRadius: '28px', backgroundColor: '#f1f4ff' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: '24px',
            borderStartStartRadius: '12px',
            borderStartEndRadius: '12px',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography variant="h1" fontSize="20px" sx={{ fontWeight: 'bold' }}>
              Employer cost
            </Typography>
            <Box display="flex" mt="8px">
              <Typography
                variant="h1"
                sx={{
                  color: mainRed,
                  fontSize: '24px',
                  marginTop: 'auto',
                  marginBottom: '8px',
                  paddingRight: '6px',
                }}>
                {currencySymbol}
              </Typography>
              <Typography variant="h1" fontSize="32px" color={mainRed}>
                {currencyFormat(totalCost)}
              </Typography>
            </Box>
          </Box>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
            Total employment cost
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 2,
            padding: '24px',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <StyledTypography
            variant="subtitle1"
            sx={{ color: theme.palette.primary.main, fontWeight: 'bold', fontSize: '18px' }}>
            {isGrossToNet ? 'Gross monthly salary costs' : 'Net monthly salary costs'}
          </StyledTypography>
          <StyledTypography
            variant="subtitle1"
            sx={{ color: theme.palette.primary.main, fontWeight: 'bold', fontSize: '18px' }}>
            {currencySymbol} {currencyFormat(salary)}
          </StyledTypography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'space-between',
            padding: '24px',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
            Health Insurance
          </StyledTypography>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(healthInsurance)}
          </StyledTypography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'space-between',
            padding: '24px',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
            Unemployment Insurance
          </StyledTypography>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(unemploymentInsurance)}
          </StyledTypography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: '24px',
            justifyContent: 'space-between',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
            Social Insurance
          </StyledTypography>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(socialInsurance)}
          </StyledTypography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: '24px',
            justifyContent: 'space-between',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.primary.main, textAlign: 'left' }}>
            Labour Accident And Occupational Disease Insurance
          </StyledTypography>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(accidentInsurance)}
          </StyledTypography>
        </Box>
      </Box>
    </Box>
  )
}
