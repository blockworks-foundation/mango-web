import React from 'react';
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import MangoBlob from '@/components/MangoBlob';
import { 
  AdjustmentsVerticalIcon,
  TableCellsIcon,
  ReceiptPercentIcon,

  } from '@heroicons/react/20/solid';
import ButtonCopyGit from './ButtonCopyGit';

const DesktopHero = () => {
  return (
      <div className="flex flex-col max-w-7xl mb-8 z-10 mx-auto p-8 py-20 border-l-[2px] border-th-fgd-2 border-solid">

        <div className="z-20 flex flex-col">
        <div className="w-1/3 h-[2px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-3"></div>

        <p className="font-mono text-2xl mb-3 text-left">
          <span className="type-desktop text-th-fgd-3"></span>
        </p>
        <div className="w-1/2 h-[2px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-3"></div>

        <h2 className="font-display text-6xl tracking-tight mb-6 text-left text-th-fgd-5 leading-tight">
          Utilize your digital money.<br /> <GradientText>Trade, manage, earn <br />all from one hub.</GradientText>
        </h2>
        <ul className="flex flex-col z-20 font-body text-xl mb-3 text-left text-th-fgd-4">
        <li className="mb-2 inline-flex">
            <AdjustmentsVerticalIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4" />
            Full control over your coin, no middle man, just you and the contract.
          </li>

          <li className="mb-2 inline-flex">
            <TableCellsIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4"   />
            Swap spot and trade derivitives with margin/leverage as you need.
          </li>
          
          <li className="mb-2 inline-flex">
            <ReceiptPercentIcon className="bg-th-fgd-2 rounded-md p-1 w-[30px] h-[30px] text-mango-yellow mr-3 mb-4"/>
            Auto-lending earns you transparent yield from pooled capital. 
          </li>
        </ul>
        <div className="w-1/2 h-[2px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-3"></div>

        <div className="mt-4 grid grid-cols-6 gap-4 ">
          <Button className="col-span-1 max-h-[41px]">
            <a rel="noreferrer" target="_blank" href="https://trade.mango.markets">
              Discover 🥭
            </a>
          </Button>
          <div>
            <ButtonCopyGit />
          </div>
        </div>
        </div>

        <div className="w-1/3 h-[2px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] -mt-3"></div>

      <div className=" h-[100px]">
        <div className="z-0 transform -translate-y-[500px] translate-x-[600px]">
          <MangoBlob />
        </div>
        <div className="z-0 block reletive transform -translate-y-[400px] translate-x-[600px] h-0">
          <img
            className=""
            src="/assets/images/hero_desktop.png"
            alt="desktop"
          />         
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;