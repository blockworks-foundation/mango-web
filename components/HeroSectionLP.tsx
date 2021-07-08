const HeroSectionLP = () => {
  return (
    <div className="">
      <section className="">
        <div className="container px-4 mx-auto">
          <div className="relative pt-12 md:pt-48 pb-32 lg:pb-48 mb-48 lg:mb-48">
            <div className="max-w-2xl mb-16 mx-auto text-center">
              <h2 className="mb-8 text-4xl lg:text-5xl text-white font-bold font-heading">
                Join the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-green-300">
                  Mango DAO
                </span>{' '}
                and help build the ecosystem.
              </h2>
              <p className="mb-8 text-2xl text-gray-400">
                The Mango DAO is an experiment in self governance that aims to
                build a completely decentralzied financial ecosystem.
              </p>
            </div>
            {/*
        <div className="relative max-w-3xl mx-auto">
        <img className="absolute top-0 left-0 mx-auto w-full rounded-xl z-10" src="../img/DepositModal.png" alt=""/>
        </div>
        */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSectionLP
