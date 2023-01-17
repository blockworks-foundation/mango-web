import GridItemShort from "@/components/cards/GridItemGlobe";
import GridItemLong from "@/components/cards/GridItemMarkets";

const gridItemOne: any = [
    {
      name: 'Open-source it all.',
      description:
        "Every market is cross-collateralized. Mango's risk engine let's you utilize all your assets and derivative contracts as collateral.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: 'Build with the ecosystem.',
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

function DaoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4">
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
    </section>
  );
}

  
  export default DaoGrid;
  