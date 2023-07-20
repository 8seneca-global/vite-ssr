import { STRIPE_KEY } from '#root/config'
import AppProvider from '#root/providers/AppProvider.provider'
import { AppRoutes } from '#root/routes/RootRoute.route'

import '@9gustin/react-notion-render/dist/index.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'
import './App.css'

const stripePromise = loadStripe(STRIPE_KEY)

function App() {
  return (
    <Elements stripe={stripePromise}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </Elements>
  )
}

export default App
