import GridItemShort from "@/components/cards/GridItemShort";
import GridItemLong from "@/components/cards/GridItemLong";


const gridItemOne: any = [
    {
      name: 'Maximum capital efficiency.',
      description:
        "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
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
  const gridItemFour: any = [
    {
      name: 'Maximum capital efficiency.',
      description:
        "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    },
  ]; 

function DesktopFeatureGrid() {
  return (
  <>
    <section className="max-w-7xl mx-auto">
      <div className="px-8 pb-4 border-l-[4px] border-th-fgd-2 border-solid -mt-[32px]">
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <GridItemShort
          name={gridItemOne[0].name}
          description={gridItemOne[0].description}
        />  
        <GridItemLong
          name={gridItemTwo[0].name}
          description={gridItemTwo[0].description}
        />  
        <GridItemLong
          name={gridItemThree[0].name}
          description={gridItemThree[0].description}
        />  
        <GridItemShort
          name={gridItemFour[0].name}
          description={gridItemOne[0].description}
        />              
        </div>
      </div>
      <div className="w-1/3 h-[4px] bg-gradient-to-r from-th-fgd-2"></div>
      <div className="h-1/2 w-[4px] bg-gradient-to-b from-th-fgd-2"></div>

    </section>
</>
  );
}

  
  export default DesktopFeatureGrid;
  