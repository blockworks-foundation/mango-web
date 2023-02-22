import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { ReactNode } from 'react'

const Footer = () => {
  const { t } = useTranslation(['footer', 'navigation'])
  return (
    <div className="lg:px-12 lg:pt-10 lg:pb-4 px-6 py-4 bg-th-bkg-2">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <a href="https://mango.markets">
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
          </a>
          <p className="mt-2 mb-4">{t('footer-mission')}</p>
          <div className="flex space-x-2">
            <a className="text-th-fgd-4" href="#">
              {t('terms-of-service')}
            </a>
            <div className="border-r border-th-bkg-4" />
            <a className="text-th-fgd-4" href="#">
              {t('privacy-policy')}
            </a>
          </div>
        </div>
        <div className="col-span-9 flex items-start justify-end space-x-8">
          <FooterLinkColumn title={t('navigation:about')}>
            <FooterLink path="/mango-dao" title={t('navigation:mango-dao')} />
            <FooterLink path="/token" title={t('navigation:token')} />
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
            <FooterLink
              path="https://trade.mango.markets"
              isExternal
              title={t('navigation:mango-v4')}
            />
            <FooterLink path="/careers" title={t('navigation:work-with-us')} />
          </FooterLinkColumn>
        </div>
      </div>
      <p className="flex justify-center mt-6 font-mono text-xs text-th-fgd-4">
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
    <div className="w-28">
      <h4 className="text-th-fgd-3 text-sm mb-2">{title}</h4>
      {children}
    </div>
  )
}

const linkClassNames = 'font-medium text-th-fgd-2 block mb-1.5 last:mb-0'

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
