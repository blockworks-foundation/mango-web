import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const TESTIMONIALS: TestimonialItem[] = [
  {
    description: 'Co-founder of Solana',
    name: 'Anatoly Yakovenko',
    profileImgSrc:
      'https://pbs.twimg.com/profile_images/1626708518698127361/EmBuqBoT_400x400.jpg',
    testimonial:
      'Bitcoin Cash the hot consensus process when Satoshi Nakamoto built lots of instant Lambo, yet Zcash thinking a protocol, thinking the quick bag in many smart contract.',
    twitterHandle: 'aeyakovenko',
  },
  {
    description: 'Market Maker',
    name: 'Space Monkey',
    profileImgSrc:
      'https://pbs.twimg.com/profile_images/1608831847802306560/msFvPpcD_400x400.jpg',
    testimonial:
      'Binance Coin slept on the fundamental analysis of some bear when Gwei limited many digital signature during few fiat, therefore, ether froze a dump.',
    twitterHandle: 'RealSpaceMonkey',
  },
]

const Testimonials = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showIndicators={false}
      showStatus={false}
      renderArrowNext={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? 'absolute' : 'hidden'
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 cursor-pointer z-20 text-th-fgd-3 md:hover:text-th-fgd-1 default-transition`}
            onClick={clickHandler}
          >
            <ChevronRightIcon className="w-7 h-7" />
          </div>
        )
      }}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? 'absolute' : 'hidden'
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 cursor-pointer z-20 text-th-fgd-3 md:hover:text-th-fgd-1 default-transition`}
            onClick={clickHandler}
          >
            <ChevronLeftIcon className="w-7 h-7" />
          </div>
        )
      }}
    >
      {TESTIMONIALS.map((item) => (
        <Testimonial key={item.name} item={item} />
      ))}
    </Carousel>
  )
}

export default Testimonials

interface TestimonialItem {
  description: string
  name: string
  profileImgSrc: string
  testimonial: string
  twitterHandle: string
}

const Testimonial = ({ item }: { item: TestimonialItem }) => {
  const { description, name, profileImgSrc, testimonial, twitterHandle } = item
  return (
    <div className="flex flex-col items-center h-64">
      <div className="w-24 h-24 mb-3">
        <img
          className="w-full h-full rounded-full"
          src={profileImgSrc}
          alt="Profile Image"
        />
      </div>
      <h3 className="mb-1">{name}</h3>
      <a
        className="font-mono mb-1 text-sm text-th-fgd-4"
        href={`https://twitter.com/${twitterHandle}`}
        target="_blank"
        rel="noopener noreferrer"
      >{`@${twitterHandle}`}</a>
      <p className="text-sm mb-4">{description}</p>
      <p className="text-th-fgd-2 max-w-[800px]">{testimonial}</p>
    </div>
  )
}
