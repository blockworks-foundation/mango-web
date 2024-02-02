import './styles/global.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LayoutWrapper from './components/LayoutWrapper'
import ExitDraftModeLink from './components/ExitDraftModeLink'
import { draftMode } from 'next/headers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {draftMode().isEnabled && (
          <div className="bg-orange-200 py-2 px-6 flex justify-center">
            <span>
              Preview mode enabled. <ExitDraftModeLink />
            </span>
          </div>
        )}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
