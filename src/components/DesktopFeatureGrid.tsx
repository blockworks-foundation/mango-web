import GridItemLever from "@/components/cards/GridItemLever";
import GridItemMarkets from "@/components/cards/GridItemMarkets";
import GridItemLending from "@/components/cards/GridItemLending";
import GridItemPaint from "@/components/cards/GridItemPaint";

const gridItemOne: any = [
    {
      name: "The power is all yours.",
      description:
        "Every market is cross-collateralized. Mango let's you utilize protocol approved assets as collateral across spot and derivitive markets.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Permisionless trading & open markets.",
      description:
        "Trade spot and derivitives markets all on-chain. Enjoy the power and versatility of decentralized leveraged defi products.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "All cool in the lending pool. ",
      description:
        "",
    },
  ]; 
  const gridItemFour: any = [
    {
      name: "Paint your own trades.",
      description:
        "Mango is a power tool for the power user. Use it how you wish, every trade is different, mango is tailored for you.",
    },
  ]; 

function DesktopFeatureGrid() {
  return (
  <>
    <section className="max-w-7xl mx-auto z-30">
      <div className="px-8 pb-4 border-l-[4px] border-th-fgd-2 border-solid -mt-[32px]">
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
        <GridItemLever
          name={gridItemOne[0].name}
          description={gridItemOne[0].description}
        />  
        <GridItemMarkets
          name={gridItemTwo[0].name}
          description={gridItemTwo[0].description}
        />  
        <GridItemLending
          name={gridItemThree[0].name}
          description={gridItemThree[0].description}
        />  
        <GridItemPaint
          name={gridItemFour[0].name}
          description={gridItemFour[0].description}
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
  