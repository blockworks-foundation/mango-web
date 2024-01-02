'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

function ExitDraftModeLink(props: React.HTMLProps<HTMLAnchorElement>) {
  const pathname = usePathname()

  return (
    <a
      className="text-black underline text-sm font-bold tracking-normal md:hover:no-underline md:hover:text-black"
      href={`/api/disable-draft?redirect=${pathname}`}
      {...props}
    >
      Exit
    </a>
  )
}

export default ExitDraftModeLink
