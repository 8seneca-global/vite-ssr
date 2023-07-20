import { createTheme } from '@mui/material'

export const preLoadingProcessBarColor = 'rgba(108, 122, 137)'
export const linearGradientColor = 'linear-gradient(135deg, #181E54 0%, #EB1933 100%)'
export const calenderButtonHovered = 'rgba(245, 245, 245, 0.80)'
export const mainRed = 'rgba(235, 25, 51, 1)'
export const calenderBackgroundLinearGradientColor = 'linear-gradient(45deg, #181E54, #EB1933)'
export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(24, 30, 84, 1)',
    },
    info: {
      main: '#FFF',
      light: '#E4E6EF',
    },
    text: {
      primary: '#3f4254',
    },
  },
  typography: palette => ({
    fontFamily: '"Nunito", sans-serif',
    textAlign: 'center',
    root: {
      width: '100px',
      height: '100px',
      background: '#F4EBFF',
      border: '10px solid #F9F5FF',
      borderRadius: '28px',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
    h1: {
      fontWeight: 700,
      fontSize: '42px',
      color: '#181E54',
    },
    h2: {
      fontSize: '2.25em',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '22px',
      fontWeight: 700,
      color: '#272D37',
    },

    body1: {
      fontSize: '14px',
      fontWeight: 500,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#5F6D7E',
    },
    body3: {
      fontSize: '20px',
      fontWeight: 400,
    },
    subtitle1: {
      color: '#181E54',
      fontSize: '18px',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      textAlign: 'left',
    },
  }),
  breakpoints: {
    values: {
      xs: 0,
      sm: 1000,
      md: 1240,
      lg: 1350,
      xl: 1440,
    },
  },
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          outline: 'none',
          '&:focus': {
            outline: 0,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '58px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: false,
      },
      styleOverrides: {
        root: {
          marginTop: '-2px',
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        sx: {
          color: () => theme.palette.common.black,
          height: '100%',
          fontSize: '16px',
          fontWeight: 400,
        },
      },
      styleOverrides: {
        root: {
          fieldset: {
            outline: 0,
            border: 0,
          },
        },

        error: () => ({
          '&.Mui-error': {
            input: {
              color: theme.palette.error.main,
            },
          },
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: { fontSize: 15 },
      },
    },
  },
})
