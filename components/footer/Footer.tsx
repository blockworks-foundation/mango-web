import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { ReactNode } from 'react'

const Footer = () => {
  const { t } = useTranslation(['footer', 'navigation'])
  return (
    <div className="lg:px-20 lg:pt-10 pb-4 px-6 pt-8 bg-th-bkg-1 z-20 relative">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
          <Link href="/" shallow>
            <div className="flex flex-shrink-0 cursor-pointer items-center">
              <img
                className={`h-8 w-8 flex-shrink-0`}
                src="/logos/logo-mark.svg"
                alt="Mango"
              />
              <span className="ml-2 font-display text-xl text-th-fgd-1">
                Mango
              </span>
            </div>
          </Link>
          <p className="mt-3 mb-4 max-w-[420px] text-sm text-center lg:text-left">
            {t('footer-mission')}
          </p>
          <div className="flex space-x-3">
            <a className="text-th-fgd-4 text-sm whitespace-nowrap" href="#">
              {t('terms-of-service')}
            </a>
            <div className="border-r border-th-bkg-4" />
            <a className="text-th-fgd-4 text-sm whitespace-nowrap" href="#">
              {t('privacy-policy')}
            </a>
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col sm:flex-row items-start justify-end sm:space-x-8 mb-8 lg:mb-0 border-b border-th-bkg-3 lg:border-b-0 pb-6 lg:pb-0">
          <FooterLinkColumn title={t('navigation:about')}>
            <FooterLink path="/mango-dao" title={t('navigation:mango-dao')} />
            <FooterLink path="/mngo" title={t('navigation:mngo-token')} />
            <FooterLink path="#" isExternal title={t('navigation:v4-stats')} />
            <FooterLink path="/brand" title={t('navigation:brand')} />
          </FooterLinkColumn>
          <FooterLinkColumn title={t('navigation:products')}>
            <FooterLink
              path="https://trade.mango.markets"
              isExternal
              title={t('navigation:mango-v4')}
            />
            <FooterLink path="/mobile-app" title={t('navigation:mobile-app')} />
          </FooterLinkColumn>
          <FooterLinkColumn title={t('navigation:developers')}>
            <FooterLink
              path="https://docs.mango.markets"
              isExternal
              title={t('navigation:docs')}
            />
            <FooterLink
              path="https://github.com/blockworks-foundation"
              isExternal
              title={t('navigation:github')}
            />
            <FooterLink
              path="https://github.com/blockworks-foundation"
              isExternal
              title={t('navigation:market-maker')}
            />
            <FooterLink
              path="https://github.com/blockworks-foundation"
              isExternal
              title={t('navigation:liquidator')}
            />
            <FooterLink
              path="https://github.com/blockworks-foundation"
              isExternal
              title={t('navigation:contribute')}
            />
          </FooterLinkColumn>
          <FooterLinkColumn title={t('navigation:community')}>
            <FooterLink
              path="https://dao.mango.markets"
              isExternal
              title={t('navigation:governance')}
            />
            <FooterLink
              path="https://discord.gg/2uwjsBc5yw"
              isExternal
              title={t('navigation:discord')}
            />
            <FooterLink
              path="https://twitter.com/mangomarkets"
              isExternal
              title={t('navigation:twitter')}
            />
            <FooterLink
              path="https://forum.mango.markets"
              isExternal
              title={t('navigation:forum')}
            />
          </FooterLinkColumn>
          <FooterLinkColumn title={t('navigation:careers')}>
            <FooterLink path="/careers" title={t('navigation:work-with-us')} />
          </FooterLinkColumn>
        </div>
      </div>
      <p className="flex justify-center mt-3 lg:mt-6 font-mono text-xs text-th-fgd-4">
        {t('copyright')}
      </p>
    </div>
  )
}

export default Footer

const FooterLinkColumn = ({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) => {
  return (
    <div className="w-full lg:w-28 xl:w-32 mb-6 last:mb-0 sm:mb-0">
      <h4 className="text-th-fgd-3 text-sm mb-3">{title}</h4>
      {children}
    </div>
  )
}

const linkClassNames =
  'font-medium text-th-fgd-2 block mb-1.5 last:mb-0 md:hover:text-th-fgd-4 default-transition text-sm'

const FooterLink = ({
  path,
  title,
  isExternal = false,
}: {
  isExternal?: boolean
  path: string
  title: string
}) => {
  return isExternal ? (
    <a
      className={linkClassNames}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  ) : (
    <Link className={linkClassNames} href={path} shallow>
      {title}
    </Link>
  )
}
