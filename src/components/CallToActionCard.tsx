// import GradientText from "@/components/GradientText";
import ButtonCopyGit from "@/components/ButtonCopyGit";
//import Image from "next/image";

//import ButtonTwo from "./ButtonTwo";

const CallToActionCard = () => {
  return (
    <>
<div className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="h-[300px] relative isolate overflow-hidden bg-mango-orange px-6 pt-16 shadow-[30px] sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 bg-mangotop bg-top bg-no-repeat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/4 left-1/4 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#E54033" />
                <stop offset={1} stopColor="#E54033" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
          <div className="-mt-10 sm:-mt-16 mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-display font-bold tracking-tight leading-tight text-white sm:text-4xl">
              Decentralized software for the people.
            </h2>
            <p className="text-white/70 mt-2">
              Open-source first, trust in that you don&apos;t need to trust. 
            </p>
            <div className="mt-5">
              <ButtonCopyGit />
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/assets/images/feature_screen_one.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CallToActionCard;
