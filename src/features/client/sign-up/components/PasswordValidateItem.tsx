import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Grid, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
  item: {
    name: string
    validator: boolean
  }
}

export const PasswordValidateItem: FC<Props> = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} display="flex" alignItems="center" marginBottom="10px">
      <CheckCircleIcon fontSize="small" sx={{ color: !item.validator ? 'gray' : 'green', marginRight: '3%' }} />
      <Typography variant="subtitle2" color="gray">
        {item.name}
      </Typography>
    </Grid>
  )
}
