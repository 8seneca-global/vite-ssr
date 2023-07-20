import { Spinner } from '#root/components/elements/Spinner'
import { queryClient } from '#root/libs/react-query'
import { theme } from '#root/themes/theme'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { FC, ReactNode, Suspense, useCallback } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import createEmotionCache from '../createEmotionCache'

type Props = {
  children: ReactNode
}

const AppProvider: FC<Props> = ({ children }) => {
  const cache = createEmotionCache()

  const ErrorFallback = useCallback(({ error }: FallbackProps) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={() => window.location.assign(window.location.origin)}>Try again</button>
      </div>
    )
  }, [])

  return (
    <Suspense fallback={<Spinner sx={{ color: 'black' }} />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <CacheProvider value={cache}>
              <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <SnackbarProvider maxSnack={3}>
                  <Router>{children}</Router>
                </SnackbarProvider>
              </ThemeProvider>
            </CacheProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

export default AppProvider
