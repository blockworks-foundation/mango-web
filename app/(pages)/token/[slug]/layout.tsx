import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function TokenPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-6 lg:px-20 pb-12 pt-8 max-w-[1280px] mx-auto min-h-screen">
      <div className="-mt-6">
        <Link
          className="text-th-fgd-4 flex items-center space-x-1"
          href="/explore"
          shallow
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>View all tokens</span>
        </Link>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  )
}
