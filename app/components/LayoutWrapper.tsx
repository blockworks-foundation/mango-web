'use client'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PlausibleProvider from 'next-plausible'
import { ttCommons, ttCommonsExpanded, ttCommonsMono } from '../utils/fonts'
import TopNavigation from './navigation/TopNavigation'
import Footer from './footer/Footer'

// init react-query
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 10,
      staleTime: 1000 * 60,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
})

function LayoutWrapper({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="Mango">
          <PlausibleProvider
            domain="mango.markets"
            customDomain="https://pl.mngo.cloud"
            selfHosted={true}
            trackOutboundLinks={true}
          >
            <main
              className={`bg-th-bkg-1 ${ttCommons.variable} ${ttCommonsExpanded.variable} ${ttCommonsMono.variable} font-sans`}
            >
              <TopNavigation />
              {children}
              <Footer />
            </main>
          </PlausibleProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default LayoutWrapper
