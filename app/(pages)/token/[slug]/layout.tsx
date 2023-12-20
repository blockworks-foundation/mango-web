import BackButton from '../../../components/shared/BackButton'

export default function TokenPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-6 lg:px-20 pb-12 pt-8 max-w-[1280px] mx-auto min-h-screen">
      <div className="-mt-6">
        <BackButton />
        <div className="mt-8">{children}</div>
      </div>
    </div>
  )
}
