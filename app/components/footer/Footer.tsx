import Link from 'next/link'
import { ReactNode } from 'react'
import Twitter from '../icons/Twitter'
import Discord from '../icons/Discord'

const Footer = () => {
  return (
    <div className="relative border-t border-th-bkg-3">
      <div
        className={`lg:px-20 lg:pt-16 pb-6 px-6 pt-8 bg-th-bkg-1 z-20 relative`}
      >
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start lg:pr-6">
            <Link href="/" shallow>
              <div className="flex flex-shrink-0 cursor-pointer items-center">
                <img
                  className={`h-10 w-10 flex-shrink-0`}
                  src="/logos/logo-mark.svg"
                  alt="Mango"
                />
                <span className="ml-2 font-display text-2xl text-th-fgd-1">
                  Mango
                </span>
              </div>
            </Link>
            <p className="mt-3 mb-4 max-w-[420px] text-sm text-center lg:text-left">
              Transparency and integrity are core values in our mission to
              create products that empower individual financial freedom.
            </p>
            <div className="flex space-x-3">
              <a
                className="text-th-fgd-4 opacity-60 text-sm whitespace-nowrap"
                href="https://docs.mango.markets/legal/terms-of-use"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex flex-col sm:flex-row items-start justify-end sm:space-x-8 mb-8 lg:mb-0 border-b border-th-bkg-3 lg:border-b-0 pb-6 lg:pb-0">
            <FooterLinkColumn title="Explore">
              <FooterLink path="/explore" title="All" />
              <FooterLink path="/explore/defi" title="DeFi" />
              <FooterLink path="/explore/meme" title="Meme" />
              <FooterLink path="/explore/exchange" title="Exchange" />
            </FooterLinkColumn>
            <FooterLinkColumn title="Developers">
              <FooterLink
                path="https://docs.mango.markets"
                isExternal
                title="Docs"
              />
              <FooterLink
                path="https://github.com/blockworks-foundation"
                isExternal
                title="Github"
              />
              <FooterLink
                path="https://github.com/blockworks-foundation/mango-v4/tree/dev/ts/client/scripts/mm"
                isExternal
                title="Market maker bot"
              />
              <FooterLink
                path="https://github.com/blockworks-foundation/mango-v4/tree/dev/bin/liquidator"
                isExternal
                title="Liquidator bot"
              />
              <FooterLink
                path="https://trello.com/b/tIj7K3FD/mango-development"
                isExternal
                title="Contribute"
              />
            </FooterLinkColumn>
            <FooterLinkColumn title="Governance">
              <FooterLink
                path="https://dao.mango.markets"
                isExternal
                title="Vote"
              />
            </FooterLinkColumn>
            <FooterLinkColumn title="Social">
              <FooterLink
                icon={<Twitter className="h-4 w-4 mr-2" />}
                path="https://twitter.com/mangomarkets"
                isExternal
                title="Twitter"
              />
              <FooterLink
                icon={<Discord className="h-4 w-4 mr-2" />}
                path="https://discord.gg/2uwjsBc5yw"
                isExternal
                title="Discord"
              />
            </FooterLinkColumn>
          </div>
        </div>
        <div className="border-t border-th-bkg-3 mt-3 lg:mt-12 pt-6">
          <p className="flex justify-center font-mono text-xs opacity-60">
            © Mango DAO 2023. All rights reserved.
          </p>
        </div>
      </div>
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
    <div className="w-full lg:w-48 xl:w-56 mb-6 last:mb-0 sm:mb-0">
      <h4 className="text-th-fgd-3 text-lg mb-3">{title}</h4>
      {children}
    </div>
  )
}

const linkClassNames =
  'font-medium text-th-fgd-2 block mb-1.5 last:mb-0 md:hover:text-th-fgd-4 default-transition text-base flex items-center'

const FooterLink = ({
  path,
  title,
  isExternal = false,
  icon,
}: {
  isExternal?: boolean
  path: string
  title: string
  icon?: ReactNode
}) => {
  return isExternal ? (
    <a
      className={linkClassNames}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon ? icon : null}
      {title}
    </a>
  ) : (
    <Link className={linkClassNames} href={path} shallow>
      {icon ? icon : null}
      {title}
    </Link>
  )
}
