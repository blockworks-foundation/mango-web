import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { ReactNode } from 'react'
import { useTranslation } from 'next-i18next'

const CheckBullet = ({
  children,
  showNewBadge,
}: {
  children: ReactNode
  showNewBadge?: boolean
}) => {
  const { t } = useTranslation('common')
  return (
    <div className="mb-2 flex items-center space-x-2.5">
      <CheckCircleIcon className="h-6 w-6 text-th-fgd-4 flex-shrink-0" />
      <p className="intro-p">
        {children}
        {showNewBadge ? (
          <span className="py-0.5 px-1 rounded bg-th-fgd-1 font-medium text-sm uppercase text-th-bkg-1 ml-2">
            {t('new')}
          </span>
        ) : null}
      </p>
    </div>
  )
}

export default CheckBullet
