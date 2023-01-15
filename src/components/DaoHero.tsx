import React from 'react';
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import MangoBlob from '@/components/MangoBlob';
import { 
  CubeTransparentIcon,
  CodeBracketIcon,
  GlobeAltIcon,

  } from '@heroicons/react/20/solid';

const DaoHero = () => {
  return (
    <div className="flex flex-col max-w-7xl mt-[190px] mb-8 z-10 mx-auto p-8 py-20">

    <div className="z-20 flex flex-col">
    <p className="font-mono text-2xl mb-3 text-left">
      <span className="type-dao text-th-fgd-3"></span>
    </p>
    <h2 className="font-display text-6xl tracking-tight mb-6 text-left text-th-fgd-5 leading-tight">
      <GradientText>A protocol governed<br /> by the people. </GradientText>
    </h2>
    <ul className="flex flex-col z-20 font-body text-xl mb-3 text-left text-th-fgd-4">
    <li className="mb-2 inline-flex">
        <CubeTransparentIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4" />
        All on-chain from the beginning.
      </li>

      <li className="mb-2 inline-flex">
        <CodeBracketIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4"   />
        Open-source, and fully verifiable.
      </li>
      
      <li className="mb-2 inline-flex">
        <GlobeAltIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4"/>
        Globally distributed contributors.
      </li>
    </ul>

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


  <div className=" h-[700px]">
    <div className="z-0 transform -translate-y-[550px] translate-x-[25px]">
      <MangoBlob />
    </div>
    <div className="z-10 block reletive transform -translate-y-[200px] translate-x-[130px]">

      <img
        className="w-[1200px] h-auto"
        src="/assets/images/ApeToMan.svg"
        alt="desktop"
      />
         
    </div>
  </div>
</div>
  );
};

export default DaoHero;