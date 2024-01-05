'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PlausibleProvider from 'next-plausible'
import { ttCommons, ttCommonsExpanded, ttCommonsMono } from '../utils/fonts'
import TopNavigation from './navigation/TopNavigation'
import Footer from './footer/Footer'
import { ThemeProvider } from 'next-themes'

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
        <PlausibleProvider
          domain="mango.markets"
          customDomain="https://pl.mngo.cloud"
          selfHosted={true}
          trackOutboundLinks={true}
        >
          <ThemeProvider defaultTheme="Dark">
            <div
              className={`bg-th-bkg-1 ${ttCommons.variable} ${ttCommonsExpanded.variable} ${ttCommonsMono.variable} font-sans min-h-screen`}
            >
              <TopNavigation />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </PlausibleProvider>
      </QueryClientProvider>
    </>
  )
}

export default LayoutWrapper
