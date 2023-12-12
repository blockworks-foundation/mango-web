'use client'

import { GlobeAltIcon } from '@heroicons/react/20/solid'
import { ReactNode } from 'react'
import Twitter from '../../icons/Twitter'
import Discord from '../../icons/Discord'
import Telegram from '../../icons/Telegram'
import { BirdeyeOverviewData } from '../../../types/birdeye'
import Tooltip from '../../shared/Tooltip'

const Links = ({ birdeyeData }: { birdeyeData: BirdeyeOverviewData }) => {
  return (
    <div className="flex items-center space-x-4 pr-4">
      <Tooltip content="Website">
        <LinkIcon
          path={birdeyeData?.extensions?.website}
          icon={<GlobeAltIcon className="h-5 w-5" />}
        />
      </Tooltip>
      <Tooltip content="Twitter">
        <LinkIcon
          path={birdeyeData?.extensions?.twitter}
          icon={<Twitter className="h-5 w-5" />}
        />
      </Tooltip>
      <Tooltip content="Discord">
        <LinkIcon
          path={birdeyeData?.extensions?.discord}
          icon={<Discord className="h-5 w-5" />}
        />
      </Tooltip>
      <Tooltip content="Telegram">
        <LinkIcon
          path={birdeyeData?.extensions?.telegram}
          icon={<Telegram className="h-5 w-5" />}
        />
      </Tooltip>
    </div>
  )
}

export default Links

const LinkIcon = ({
  path,
  icon,
}: {
  path: string | undefined
  icon: ReactNode
}) => {
  return (
    <a
      href={path}
      className={
        path
          ? 'text-th-fgd-3'
          : 'text-th-bkg-4 pointer-events-none cursor-not-allowed'
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}
