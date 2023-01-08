import React from 'react';
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import MangoBlob from '@/components/MangoBlob';

const DaoHero = () => {
  return (
    <div className="mt-72 mb-8 z-10">
        <p className="font-mono font-bold text-2xl mb-3 text-center text-th-fgd-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
        Community driven innovation.
          <br />
          <GradientText>Governance approved.</GradientText>
        </p>

        <div className="mt-8 flex flex-col lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
  <Button>
    <a rel="noreferrer" target="_blank" href="https://trade.mango.markets">
      Proposals 🥭 
    </a>
  </Button>
  <Linkie>
    <a rel="noreferrer" target="_blank" href="https://docs.mango.markets/">
      Join the conversation.
    </a>
  </Linkie>
</div>

      <div className="flex flex-col">
        <div className="z-0 transform -translate-y-64 translate-x-56">
          <MangoBlob />
        </div>
        <div className="z-10 flex transform -translate-x-10 mt-20 mx-auto">
          <img
            className="max-w-5xl h-auto"
            src="/assets/images/ApeToMan.svg"
            alt="desktop"
          />
        </div>
      </div>
    </div>
  );
};

export default DaoHero;