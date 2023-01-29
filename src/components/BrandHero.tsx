
import GradientText from '@/components/GradientText';

const BrandHero = () => {
  return (
    <>
     <div className="mt-20 pt-40 pb-20 border-l-[4px] border-th-fgd-2 border-solid max-w-7xl mx-auto px-16">
     <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[64px] mb-8"></div>
      <div className="z-10 ">
      <h2 className="text-left font-display sm:text-5xl text-2xl tracking-tight mb-2 text-th-fgd-5 leading-tight">
            <GradientText>Mango Brand Guidelines.</GradientText>
      </h2>
      <p className="text-th-fgd-4 text-left text-2xl">
         Resources for presenting the Mango brand consistently and professionally.
      </p>
      </div>
      <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[64px] my-10"></div>
      <ul className="inline-flex space-x-3">
            <li className="bg-th-fgd-1 h-10 w-10"></li>
            <li className="bg-th-fgd-1 h-10 w-10"></li>
            <li className="bg-th-fgd-1 h-10 w-10"></li>
            <li className="bg-th-fgd-1 h-10 w-10"></li>
        </ul>
        </div>
        </>

  );
};

export default BrandHero ;
