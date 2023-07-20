import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
  paddingTop: string
}
export const StayInTheLoopComponent: FC<Props> = props => {
  return (
    <Box component="div" paddingTop={props} paddingLeft="55px" paddingRight="55px" textAlign="left">
      <Typography fontWeight={700} fontSize="30px" color="#EB1933">
        Lorem Ipsum
      </Typography>
      <Typography variant="body2" paddingTop="32px" color="#181E54" paddingBottom="40px">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
      </Typography>
      <Box
        component="div"
        sx={{
          background: '#181E54',
          maxWidth: '100%',
          minHeight: '188px',
          borderRadius: '15px',
        }}>
        <Grid container>
          <Grid item xs={6}>
            <Box component="div" className="pt-10 pl-14">
              <Typography fontSize="30px" fontWeight={700} color="#FFFFFF">
                Stay in the loop
              </Typography>
              <Typography fontWeight={400} fontSize="17px" color="#FFFFFF">
                Subscribe to receive the latest news and updates about TDA.
              </Typography>
              <Typography fontWeight={400} fontSize="17px" color="#FFFFFF">
                We promise not to spam you!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              component="div"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              minHeight="188px"
              paddingRight="50px"
              paddingLeft="50px">
              <TextField
                label={
                  <Typography fontWeight={300} fontSize="15px" color="#898989" marginLeft="30px" marginTop="1px">
                    Enter email address
                  </Typography>
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        style={{
                          background: '#EB1933',
                          width: '105px',
                          height: '36px',
                        }}>
                        <Typography textTransform="none" fontWeight={700} fontSize="13px" color="#F5F5F5">
                          Continue
                        </Typography>
                      </Button>
                    </InputAdornment>
                  ),
                }}
                style={{
                  width: '384px',
                  background: '#FFFFFF',
                  borderRadius: '8px',
                }}></TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
