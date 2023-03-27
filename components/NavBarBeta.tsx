const NavBarBeta = () => {
  return (
    <div className="fixed w-full  z-[100]">
      <div className="max-w-[1600px] mx-auto">
        {/* Main Menu */}
        <div className="lg:px-20 xs:px-6 xs:py-1 bg-nav">
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a className="flex items-center" href="https://mango.markets">
                <span className="sr-only">Mango</span>
                <img className="h-8" src="/logo.svg" alt="" width="auto" />
                <span className="hidden md:block font-display text-2xl letter-spacing-s ml-2">
                  Mango
                </span>
              </a>
            </div>
            <div className="flex flex-row mr-4">
              <a className="mx-4 text-fgd-1 font-display" href="">
                Products
              </a>
              <a className="mx-4 text-fgd-1 font-display" href="">
                Governance
              </a>
              <a className="mx-4 text-fgd-1 font-display" href="">
                About
              </a>
              <a className="mx-4 text-fgd-1 font-display" href="">
                Support
              </a>
            </div>
            <div className="flex flex-row">
              <a
                className="flex h-5 w-5 ml-5"
                href="https://github.com/blockworks-foundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="mx-auto" src="socials/github.svg" />
              </a>
              <a
                className="flex h-5 w-5 ml-5"
                href="https://discord.gg/2uwjsBc5yw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="mx-auto" src="socials/discord.svg" />
              </a>
              <a
                className="flex h-5 w-5 ml-5"
                href="https://twitter.com/mangomarkets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="mx-auto" src="socials/twitter.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarBeta
