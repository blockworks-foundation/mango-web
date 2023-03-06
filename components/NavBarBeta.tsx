const NavBarBeta = () => {
  return (
    <div className="">
      {/* Main Menu */}
      <div className="lg:px-20 xs:px-6 xs:py-1 bg-transparent">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a className="flex items-center" href="https://mango.markets">
              <span className="sr-only">Mango</span>
              <img className="h-8" src="/logo.svg" alt="" width="auto" />
              <span className="font-display text-2xl ml-2">Mango</span>
            </a>
          </div>
          <div className="flex flex-row">
            <a
              className="flex h-6 w-6 m-2"
              href="https://github.com/blockworks-foundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="mx-auto" src="socials/github.svg" />
            </a>
            <a
              className="flex h-6 w-6 m-2"
              href="https://discord.gg/2uwjsBc5yw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="mx-auto" src="socials/discord.svg" />
            </a>
            <a
              className="flex h-6 w-6 m-2"
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
  )
}

export default NavBarBeta
