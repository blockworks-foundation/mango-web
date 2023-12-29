import BackButton from '../../../../components/shared/BackButton'
import { MAX_CONTENT_WIDTH } from '../../../../utils/constants'

export default function TokenPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className={`${MAX_CONTENT_WIDTH} w-full mx-auto px-6 lg:px-20`}>
        <BackButton />
      </div>
      <div>{children}</div>
    </div>
  )
}
