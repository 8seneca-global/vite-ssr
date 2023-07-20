import { IRecruitmentItemType } from '#root/features/recruitment/api/useJobList'
import { linearGradientColor, theme } from '#root/themes/theme'
import { Box, Button, Grid, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
  data: IRecruitmentItemType
  onClick: (pageId: string) => void
}

const ActiveJobItemWrapperStyle = {
  minWidth: '300px',
  width: '100%',
  borderRadius: '32px',
  background: `${linearGradientColor}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: ' 0px 10px 12px 0px rgba(215, 215, 215, 0.25)',
}

const ButtonLinkWrapper = {
  width: '123px',
  height: '50px',
  background: `${theme.palette.info.main}`,
  borderRadius: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid var(--8-seneca-red, #EB1933)',
}

export const JobItem: FC<Props> = ({ data, onClick }) => {
  return (
    <Grid item xs={12} sm={6} md={6} key={data.id}>
      <Box display="flex" justifyContent="center" height="100%">
        <Box sx={ActiveJobItemWrapperStyle} height="100%">
          <Box display="flex" flexDirection="column" paddingX="35px" paddingY="40px" textAlign="left">
            <Typography variant="h1" fontWeight="700" fontSize="24px" color={theme.palette.info.main}>
              {data.name}
            </Typography>
            <Typography marginTop="23px" variant="subtitle2" color={theme.palette.info.main} fontSize="15px">
              {data.summary}
            </Typography>
          </Box>
          <Box paddingX="35px" paddingY="40px" display="flex" justifyContent="flex-start">
            <Button onClick={() => onClick(data.id)} style={ButtonLinkWrapper}>
              <Typography variant="subtitle2" color="rgba(235, 25, 51, 1)" fontSize="14px">
                Apply now
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}
