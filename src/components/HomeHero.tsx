import React from 'react';
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import MangoBlob from '@/components/MangoBlob';
import BrowserMockupAbstract from '@/components/mockups/BrowserMockupAbstract';
import IphoneAbstract from '@/components/mockups/IphoneAbstract';
import Nav from './Nav';
import { 
  FireIcon,
  CodeBracketIcon,
  GlobeAltIcon,

  } from '@heroicons/react/20/solid';

const HomeHero = () => {
  return (
    <section className=" ">
      <Nav />
      <div className="flex flex-col max-w-7xl mb-8 z-10 mx-auto p-8 border-l-[2px] border-th-fgd-2 border-solid">

        <div className="z-20 flex flex-col mt-[245px]">
        <div className="w-1/3 h-[2px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-3"></div>

        <p className="font-mono text-2xl mb-3 text-left">
          <span className="type-hero text-th-fgd-3"></span>
        </p>
        <div className="w-1/2 h-[2px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-4"></div>
        <h2 className="font-display text-6xl tracking-tight mb-6 text-left text-th-fgd-5 leading-tight">
        <GradientText>Building open finance <br />for the internet <br />generation.</GradientText>
        </h2>
        <ul className="flex flex-col z-20 font-body text-xl mb-3 text-left text-th-fgd-4">
        <li className="mb-2 inline-flex">
            <FireIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4" />
            Blazingly fast products, all on-chain and transparent.
          </li>

          <li className="mb-2 inline-flex">
            <CodeBracketIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4"   />
            Open-source, community driven, fully verifiable.
          </li>
          
          <li className="mb-2 inline-flex">
            <GlobeAltIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4"/>
            Accessible globally, without borders.
          </li>
        </ul>

        <div className="w-1/2 h-[2px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>

        <div className="mt-4 inline-flex">
          
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
        <div className="w-1/3 h-[2px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mt-4"></div>


      <div className=" h-[700px]">
        
        <div className="z-0 transform -translate-y-[550px] translate-x-[225px]">
          <MangoBlob />
        </div>
        <div className="z-10 block reletive transform -translate-y-[700px] translate-x-[730px] -rotate-[9deg] ">
          <BrowserMockupAbstract />
{/* 
          <img
            className="w-full h-auto"
            src="/assets/images/hero_desktop.png"
            alt="desktop"
          />
*/}          
        </div>
        <div className="z-10 block reletive transform -translate-y-[1100px] translate-x-[125px] -rotate-[3deg]">
            <IphoneAbstract src="/assets/images/iphone-1.jpg" />
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
    </section>

  );
};

export default HomeHero;