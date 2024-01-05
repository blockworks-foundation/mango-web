'use client'

import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()
  return (
    <button
      className="text-th-fgd-2 flex items-center space-x-1 focus:outline-none md:hover:text-th-fgd-2 bg-th-bkg-1 px-2 py-1"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <span>Back</span>
    </button>
  )
}

export default BackButton
