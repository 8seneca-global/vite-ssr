import { STRIPE_KEY } from '#root/config'
import AppProvider from '#root/providers/AppProvider.provider'
import { AppRoutes } from '#root/routes/RootRoute.route'
import '@9gustin/react-notion-render/dist/index.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import 'react-notion-x/src/styles.css'
import '../App.css'
import '../index.css'
import type { PageContext } from './types'
import { PageContextProvider } from './usePageContext'

const stripePromise = loadStripe(STRIPE_KEY)

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <AppProvider>
        <PageContextProvider pageContext={pageContext}>
          <Elements stripe={stripePromise}>
            <AppRoutes />
          </Elements>
        </PageContextProvider>
      </AppProvider>
    </React.StrictMode>
  )
}

export { PageShell }
