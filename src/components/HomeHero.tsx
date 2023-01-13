import React from 'react';
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import MangoBlob from '@/components/MangoBlob';
import BrowserMockupAbstract from '@/components/mockups/BrowserMockupAbstract';
import IphoneAbstract from '@/components/mockups/IphoneAbstract';

const HomeHero = () => {
  return (
      <div className="mt-60 mb-8 z-10 max-w-7xl mx-auto p-8 py-20">
        <p className="z-20 font-display text-2xl mb-3 text-left font-bold text-th-fgd-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
          Every market, all the power.
          <br />
          <GradientText>None of the fuss.</GradientText>
        </p>

        <div className="mt-8 inline-flex z-20">
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

      <div className="flex flex-col">
        <div className="z-0 transform -translate-y-[150px] -translate-x-[125px]">
          <MangoBlob />
        </div>
        <div className="z-10 block reletive transform -translate-y-[300px] translate-x-[550px] -rotate-12 ">
          <BrowserMockupAbstract />
{/* 
          <img
            className="w-full h-auto"
            src="/assets/images/hero_desktop.png"
            alt="desktop"
          />
*/}          
        </div>
        <div className="z-10 block reletive transform -translate-y-[766px] -translate-x-[77px] -rotate-12 ">
            <IphoneAbstract />
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