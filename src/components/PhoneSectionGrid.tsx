import GridItemShort from "@/components/cards/GridItemShort";
import GridItemFees from "@/components/cards/GridItemFees";

const gridItemOne: any = [
    {
      name: 'Digital cash made easy.',
      description:
        "Pay, send, receive globally.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: 'Maximum capital efficiency.',
      description:
        "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: 'Maximum capital efficiency.',
      description:
        "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    },
  ]; 
  

function PhoneSectionGrid() {
  return (
    <div className="max-w-7xl mx-auto -mt-[0px] px-8 border-l-[2px] border-th-fgd-2 border-solid py-[150px]">
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <GridItemFees
          name={gridItemOne[0].name}
          description={gridItemOne[0].description}
        />  
        <GridItemShort
          name={gridItemTwo[0].name}
          description={gridItemTwo[0].description}
        />  
        <GridItemShort
          name={gridItemThree[0].name}
          description={gridItemThree[0].description}
        />              
        </div>
    </div>
  );
}

  
  export default PhoneSectionGrid;
  