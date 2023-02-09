import React from 'react';
import GradientText from '@/components/GradientText';
import ButtonNew from '@/components/ButtonNew';
import MangoBlob from '@/components/MangoBlob';
import { 
  AdjustmentsVerticalIcon,
  ReceiptPercentIcon,
  BanknotesIcon,

  } from '@heroicons/react/20/solid';
import Image from 'next/image';

const EarnHero = () => {
  return (
      <div className="flex flex-col max-w-7xl mb-8 z-10 mx-auto p-8 py-20 border-l-[4px] border-th-fgd-2 border-solid">

        <div className="z-20 flex flex-col sm:pt-[205px] pt-[105px]">

        <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-3"></div>

        <h2 className="font-display sm:text-6xl text-2xl tracking-tight mb-6 text-left text-th-fgd-5 leading-tight">
        Permissionless money markets.<br /> <GradientText>Lend, borrow, and earn.<br />No middleman.</GradientText>
        </h2>
        <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px] mb-8"></div>

        <ul className="flex space-y-3 flex-col z-20 font-body text-md sm:text-xl mb-3 text-left">
        <li className="group inline-flex text-th-fgd-4">
            <AdjustmentsVerticalIcon className="bg-th-fgd-1 text-mango-yellow rounded-md p-1 w-[30px] h-[30px] mr-3 mb-4" />
            Full control over your digital coin. Just you and the blockchain.
          </li>

          <li className="group inline-flex text-th-fgd-4">
            <ReceiptPercentIcon className="bg-th-fgd-1 text-mango-yellow rounded-md p-1 w-[30px] h-[30px] mr-3 mb-4"   />
            Earn variable yeild from automatic-lending built into accounts on mango.
          </li>
          
          <li className="group inline-flex text-th-fgd-4">
            <BanknotesIcon className="bg-th-fgd-1 text-mango-yellow rounded-md p-1 w-[30px] h-[30px] mr-3 mb-4"/>
            Borrow on your capital. Your value has utility. 
          </li>
        </ul>
        
        <div className="sm:w-1/2 w-full h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>

        <div className="inline-flex -ml-8">
          <ButtonNew className="w-[218px] py-6">
            <a rel="noreferrer" target="_blank" href="https://trade.mango.markets">
              Discover 🥭
            </a>
          </ButtonNew>
        </div>
        
        </div>
        
        <div className="sm:w-1/3 w-full h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>
      
      <div className=" h-[100px]">
        <div className="z-0 transform -translate-y-[500px] translate-x-[600px]">
          <MangoBlob />
        </div>
        <div className="z-0 hidden sm:block reletive transform -translate-y-[400px] translate-x-[600px] h-0">
          <Image
            src="/assets/images/hero_desktop.png"
            alt="Github"
            width={1300}
            height={300}
            loading="lazy"
          />       
        </div>
      </div>
    </div>
  );
};

export default EarnHero;