import React from 'react';
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import MangoBlob from '@/components/MangoBlob';
import BrowserMockupAbstract from '@/components/mockups/BrowserMockupAbstract';
import IphoneAbstract from '@/components/mockups/IphoneAbstract';
import { 
  BoltIcon,
  CodeBracketIcon,
  GlobeEuropeAfricaIcon,

  } from '@heroicons/react/20/solid'

const HomeHero = () => {
  return (
      <div className="flex flex-col max-w-7xl mt-56 mb-8 z-10 mx-auto p-8 py-20">

        <div className="z-20 flex flex-col">
        <h1 className="font-display text-5xl mb-3 text-left font-bold text-th-fgd-5 leading-tight">
          <GradientText>Freedom is not needing <br />permission to move.</GradientText>
        </h1>
        <p className="font-body text-3xl mb-6 text-left text-th-fgd-3">
          Trade, spend, and earn crypto like never before.
        </p>
        <ul className="flex flex-col z-20 font-body text-xl mb-3 text-left text-th-fgd-4">
          <li className="mb-2 inline-flex"><BoltIcon className="w-6 h-6 text-mango-yellow m-1 mr-2" />Blazingly fast</li>
          <li className="mb-2 inline-flex"><CodeBracketIcon className="w-6 h-6 text-mango-yellow m-1 mr-2"   />Open-source first</li>
          <li className="mb-2 inline-flex"><GlobeEuropeAfricaIcon className="w-6 h-6 text-mango-yellow m-1 mr-2"/>Without borders</li>
        </ul>

        <div className="mt-8 inline-flex">
          <Button>
            <a rel="noreferrer" target="_blank" href="https://trade.mango.markets">
              Discover 🥭
            </a>
          </Button>
          <Linkie>
            <a rel="noreferrer" target="_blank" href="https://docs.mango.markets/">
              Explore the docs
            </a>
          </Linkie>
        </div>
        </div>


      <div className="">
        <div className="z-0 transform -translate-y-[150px] -translate-x-[125px]">
          <MangoBlob />
        </div>
        <div className="z-10 block reletive transform -translate-y-[600px] translate-x-[777px] -rotate-[9deg] ">
          <BrowserMockupAbstract />
{/* 
          <img
            className="w-full h-auto"
            src="/assets/images/hero_desktop.png"
            alt="desktop"
          />
*/}          
        </div>
        <div className="z-10 block reletive transform -translate-y-[1050px] translate-x-[77px] -rotate-[9deg] ">
            <IphoneAbstract src="assets/images/iphone-screen.jpg" />
{/* 
          <img
            className="w-full h-auto"
            src="/assets/images/hero_desktop.png"
            alt="desktop"
          />
*/}          
        </div>
      </div>
    </div>
  );
};

export default HomeHero;