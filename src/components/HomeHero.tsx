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
  GlobeAltIcon,

  } from '@heroicons/react/20/solid'

const HomeHero = () => {
  return (
      <div className="flex flex-col max-w-7xl mt-[190px] mb-8 z-10 mx-auto p-8 py-20">

        <div className="z-20 flex flex-col">
        <p className="font-mono text-2xl mb-3 text-left text-th-fgd-5">
          <span className="type-hero text-th-fgd-3"></span>
        </p>
        <h2 className="font-display text-6xl font-bold mb-6 text-left text-th-fgd-5 leading-tight">
          <GradientText>Decentralized financial <br />products for the internet generation.</GradientText>
        </h2>
        <ul className="flex flex-col z-20 font-body text-xl mb-3 text-left text-th-fgd-4">
          <li className="mb-2 inline-flex">
            <BoltIcon className="bg-th-fgd-2 rounded-md p-1 w-6 h-6 text-mango-yellow m-1 mr-3 mb-2" />
            Blazingly fast and all on-chain.
          </li>
          <li className="mb-2 inline-flex">
            <CodeBracketIcon className="bg-th-fgd-2 rounded-md p-1 w-6 h-6 text-mango-yellow m-1 mr-3 mb-2"   />
            Fully verifiable, open-source first.
          </li>
          <li className="mb-2 inline-flex">
            <GlobeAltIcon className="bg-th-fgd-2 rounded-md p-1 w-6 h-6 text-mango-yellow m-1 mr-3 mb-2"/>
            Accessable globally, without borders.
          </li>
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


      <div className=" h-[700px]">
        <div className="z-0 transform -translate-y-[400px] translate-x-[25px]">
          <MangoBlob />
        </div>
        <div className="z-10 block reletive transform -translate-y-[462px] translate-x-[730px] -rotate-[9deg] ">
          <BrowserMockupAbstract />
{/* 
          <img
            className="w-full h-auto"
            src="/assets/images/hero_desktop.png"
            alt="desktop"
          />
*/}          
        </div>
        <div className="z-10 block reletive transform -translate-y-[952px] translate-x-[0px] -rotate-[9deg] ">
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