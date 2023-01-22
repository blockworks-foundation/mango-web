import React from 'react';
import GradientText from '@/components/GradientText';
import ButtonNew from '@/components/ButtonNew';
import Linkie from '@/components/Linkie';
import MangoBlob from '@/components/MangoBlob';
import BrowserMockupAbstract from '@/components/mockups/BrowserMockupAbstract';
import IphoneAbstract from '@/components/mockups/IphoneAbstract';
import NavvyAlpha from '@/components/NavvyAlpha';
import { 
  CodeBracketIcon,
  GlobeAltIcon,
  BoltIcon

  } from '@heroicons/react/20/solid';

const HomeHero = () => {
  return (
    <section className="">
      <NavvyAlpha />

      
      <div className="flex flex-col max-w-7xl mb-8 z-10 mx-auto p-8 border-l-[4px] border-th-fgd-2 border-solid">
        <div className="z-20 flex flex-col sm:pt-[205px] pt-[105px]">

        <div className="sm:w-1/2 w-full h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-4"></div>
        <h2 className="font-display sm:text-6xl text-2xl tracking-tight mb-6 text-left text-th-fgd-5 leading-tight">
        <GradientText>Building open finance <br />for the internet <br />generation.</GradientText>
        </h2>
        <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-8"></div>

        <ul className="flex space-y-3 flex-col z-20 font-body text-md sm:text-xl mb-3 text-left">
         <li className="group inline-flex text-th-fgd-4">
            <BoltIcon className="bg-th-fgd-1 text-mango-yellow rounded-md p-1 w-[30px] h-[30px] mr-3 mb-4" />
           Lightning fast products, transparent and all on-chain.
          </li>

          <li className="group inline-flex text-th-fgd-4">
            <CodeBracketIcon className="bg-th-fgd-1 text-mango-yellow rounded-md p-1 w-[30px] h-[30px] mr-3 mb-4"   />
            Open-source, community driven, fully verifiable.
          </li>
          
          <li className="group inline-flex text-th-fgd-4">
            <GlobeAltIcon className="bg-th-fgd-1 text-mango-yellow rounded-md p-1 w-[30px] h-[30px] mr-3 mb-4"/>
            Accessible globally, without borders.
          </li>
        </ul>

        <div className="sm:w-1/2 w-full h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>

        <div className="inline-flex -ml-8">
          
          <ButtonNew>
            <a rel="noreferrer" target="_blank" href="https://trade.mango.markets">
              Discover 🥭
            </a>
          </ButtonNew>
          <Linkie>
            <a rel="noreferrer" target="_blank" href="https://docs.mango.markets/">
              Explore the docs
            </a>
          </Linkie>
        </div>
        </div>
        <div className="sm:w-1/3 w-full h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>


      <div className="sm:h-[500px]">
        
        <div className="z-0 transform -translate-y-[550px] translate-x-[225px]">
          <MangoBlob />
        </div>
        <div className=" z-10 reletive transform sm:-translate-y-[700px] sm:translate-x-[730px] sm:-rotate-[9deg]">
          <BrowserMockupAbstract />        
        </div>
        <div className="z-10 sm:block hidden reletive transform -translate-y-[1100px] translate-x-[125px] -rotate-[3deg]">
            <IphoneAbstract src="/assets/images/iphone-1.jpg" />         
        </div>
      </div>
    </div>
    </section>

  );
};

export default HomeHero;