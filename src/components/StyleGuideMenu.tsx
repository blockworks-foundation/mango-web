const Logo = () => {
    return (
        <>
        <div className="w-full grid grid-cols-1 overflow-hidden rounded-lg border border-white border-opacity-10 shadow-lg">
        <div className="relative grid gap-4 bg-mango-bkg-3 px-5 py-4 sm:gap-4 sm:p-6 backdrop-blur-3xl bg-opacity-50">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white opacity-40"> 
            Style Guide
          </h3>
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
                  d="M6 12V15M10 12V15M14 12V15M1 19H19M1 8H19M1 5L10 1L19 5M2 8H18V19H2V8Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="ml-4">
                <p className="text-base font-medium text-white">
                  Markets<span className="text-white opacity-0 transition duration-150 ease-in group-hover:opacity-50 ml-2" aria-hidden="true">&rarr;</span>
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
  