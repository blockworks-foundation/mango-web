import { useEffect, useState } from 'react'

const imageClasses =
  'w-auto h-10 lg:h-12 rounded-md lg:rounded-lg border-2 border-th-bkg-4'

const AppStoreButtons = () => {
  const [mobileDevice, setMobileDevice] = useState('')

  useEffect(() => {
    const userAgent = navigator.userAgent
    if (/android/i.test(userAgent)) {
      setMobileDevice('android')
    }
    if (/iPad|iPhone|iPod/i.test(userAgent)) {
      setMobileDevice('ios')
    }
  }, [])

  return (
    <div className="flex space-x-3 lg:space-x-5">
      <a
        href="https://apps.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={`${imageClasses} ${
            mobileDevice === 'ios' ? 'animate-pulse border-th-active' : ''
          }`}
          src="/images/app-store-dark.png"
          alt="iOS App Store"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=markets.mango"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={`${imageClasses} ${
            mobileDevice === 'android' ? 'animate-pulse border-th-active' : ''
          }`}
          src="/images/google-play-dark.png"
          alt="Google Play Store"
        />
      </a>
    </div>
  )
}

export default AppStoreButtons
