const Logo = () => {
    return (
        <>
        <div className="w-full grid grid-cols-1 overflow-hidden rounded-lg border border-white border-opacity-10 shadow-lg">
        <div className="relative grid gap-4 bg-mango-bkg-3 px-5 py-4 sm:gap-4 sm:p-6 backdrop-blur-3xl bg-opacity-50 ">
          <button className="text-left hover:text-mango-yellow text-mango-fgd-5 group">
            <a
              href="https://trade.mango.markets/"
              className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-white hover:backdrop-blur-xl hover:bg-opacity-5"
            >
            <svg 
                className="h-5 w-5 shrink-0 stroke-current mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                stroke="currentColor"
                aria-hidden="true"
                >
            <path 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            
              <div className="ml-4">
                <p className="text-base font-medium text-white">
                  Logo Light<span className="text-white opacity-0 transition duration-150 ease-in group-hover:opacity-50 ml-2" aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </a>
          </button>
          <button className="text-left hover:text-mango-yellow text-mango-fgd-5 group">
            <a
              href="https://trade.mango.markets/"
              className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-white hover:backdrop-blur-xl hover:bg-opacity-5"
            >
            <svg 
                className="h-5 w-5 shrink-0 stroke-current mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                stroke="currentColor"
                aria-hidden="true"
                >
            <path 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
              <div className="ml-4">
                <p className="text-base font-medium text-white">
                  Logo Dark<span className="text-white opacity-0 transition duration-150 ease-in group-hover:opacity-50 ml-2" aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </a>
          </button>
        </div>
      </div>
    </>
    );
  };
  
  export default Logo;
  