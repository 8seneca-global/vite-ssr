import SearchIcon from '#root/assets/images/Search Icon.svg'
import { theme } from '#root/themes/theme'
import { Grid, InputAdornment, TextField, Typography, styled } from '@mui/material'
import { FC } from 'react'

const SearchBarWrapper = styled('div')({
  maxWidth: '331px',
  height: 'fit-content',
  borderRadius: '32px',
  boxShadow: '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
  display: 'flex',
  alignItems: 'center',
  padding: '2%',
})

const SearchBar = styled(TextField)({
  width: '100%',
  maxWidth: '388px',
  height: '41px',
  borderRadius: '48px',
  backgroundColor: '#F4F7FE',
})

type Props = {
  page: string
  title?: string
}

export const HeadingSection: FC<Props> = ({ page, title }) => {
  if (!title) {
    title = page
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography fontSize="14px" color={theme.palette.primary.main} fontWeight={500}>
          Pages / {page}
        </Typography>
        <Typography variant="h1" fontSize="34px">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={6} display="flex" alignItems="center">
        <SearchBarWrapper>
          <SearchBar
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={SearchIcon} />
                </InputAdornment>
              ),
            }}
          />
        </SearchBarWrapper>
      </Grid>
    </Grid>
  )
}
