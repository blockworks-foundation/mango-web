import {
  ArrowTrendingUpIcon,
  BookOpenIcon,
  ChevronRightIcon,
  EyeIcon,
} from '@heroicons/react/20/solid'
import { TFunction, useTranslation } from 'next-i18next'
import useSectionBg from '../../hooks/useSectionBg'
import { LinkButton } from '../shared/Button'
import ChildPageTopSection from '../shared/ChildPageTopSection'
import ColorBlur from '../shared/ColorBlur'
import HeadingTagline from '../shared/HeadingTagline'
import IconWithText from '../shared/IconWithText'
import InlineImageWithText from '../shared/InlineImageWithText'
import SectionWrapper from '../shared/SectionWrapper'
import Steps from '../shared/Steps'

const PROPOSAL_STEPS = (t: TFunction) => [
  {
    desc: 'dao:discuss-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'dao:discuss',
    children: (
      <div className="flex items-center space-x-6 mt-4 lg:mt-6">
        <a
          href="https://forum.mango.markets"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {t('dao:view-forum')}
            <ChevronRightIcon className="h-6 w-6 ml-1.5" />
          </LinkButton>
        </a>
        <a
          href="https://discord.gg/2uwjsBc5yw"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {t('dao:join-discord')}
            <ChevronRightIcon className="h-6 w-6 ml-1.5" />
          </LinkButton>
        </a>
      </div>
    ),
  },
  {
    desc: 'dao:propose-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'dao:propose',
    children: (
      <div className="mt-4 lg:mt-6">
        <a href="#" rel="noopener noreferrer" target="_blank">
          <LinkButton className="flex items-center">
            {t('dao:list-market')}
            <ChevronRightIcon className="h-6 w-6 ml-1.5" />
          </LinkButton>
        </a>
      </div>
    ),
  },
  {
    desc: 'dao:vote-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'dao:vote',
    children: (
      <div className="mt-4 lg:mt-6">
        <a
          href="https://dao.mango.markets"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkButton className="flex items-center">
            {t('dao:view-current-proposals')}
            <ChevronRightIcon className="h-6 w-6 ml-1.5" />
          </LinkButton>
        </a>
      </div>
    ),
  },
  {
    desc: 'dao:execute-desc',
    imagePath: '/images/img-placeholder.png',
    title: 'dao:execute',
  },
]

const DaoPage = () => {
  const { t } = useTranslation(['common', 'dao'])
  const sectionBg = useSectionBg()
  return (
    <>
      <ChildPageTopSection
        heading={t('dao:page-heading')}
        intro={t('dao:page-intro')}
        linkPath="https://dao.mango.markets"
        buttonText={t('dao:explore-governance')}
      />
      <div className={`${sectionBg} z-20 relative`}>
        <SectionWrapper>
          <h2 className="mb-12">{t('dao:join-mango-dao')}</h2>
          <InlineImageWithText
            desc={t('dao:get-mngo-desc')}
            title={t('dao:get-mngo')}
            imageSrc="/images/img-placeholder.png"
            linkPath="https://app.mango.markets/"
            linkText={t('dao:buy-mngo')}
            reverse
          />
        </SectionWrapper>
      </div>
      <div className="relative overflow-hidden">
        <SectionWrapper>
          <div className="grid grid-cols-12 gap-8 md:gap-12 flex flex-col sm:flex-row items-end mb-8 md:mb-16">
            <div className="col-span-12 sm:col-span-6">
              <HeadingTagline text={t('dao:power-people')} />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <h2>{t('dao:open-democracy')}</h2>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-12 mt-12">
            <IconWithText
              desc={t('dao:open-finances-desc')}
              icon={<BookOpenIcon className="h-5 w-5 text-th-fgd-2" />}
              title={t('dao:open-finances')}
            />
            <IconWithText
              desc={t('dao:view-votes-desc')}
              icon={<EyeIcon className="h-5 w-5 text-th-fgd-2" />}
              title={t('dao:view-votes')}
            />
            <IconWithText
              desc={t('dao:fees-accrue-desc')}
              icon={<ArrowTrendingUpIcon className="h-5 w-5 text-th-fgd-2" />}
              title={t('dao:fees-accrue')}
            />
          </div>
        </SectionWrapper>
        <ColorBlur
          className="top-0 left-0 opacity-10"
          height="360px"
          width="50%"
        />
      </div>
      <div className={`${sectionBg}`}>
        <SectionWrapper noPaddingX>
          <h2 className="mb-8 md:mb-16 page-x-padding">
            {t('dao:proposal-life-cycle')}
          </h2>
          <Steps steps={PROPOSAL_STEPS(t)} />
        </SectionWrapper>
      </div>
    </>
  )
}

export default DaoPage
