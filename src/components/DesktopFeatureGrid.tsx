import GridItemLever from "@/components/cards/GridItemLever";
import GridItemMarkets from "@/components/cards/GridItemMarkets";
import GridItemLending from "@/components/cards/GridItemLending";
import GridItemPaint from "@/components/cards/GridItemPaint";

const gridItemOne: any = [
    {
      name: "Easy as analog.",
      description:
        "A simple, intuititive, performance interface for trading decentralized open markets.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Open, transparent, permissionless.",
      description:
        "Access margined spot markets and the ability to trade with up to 20x leverage in permissionless derivitives markets, all on-chain.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "All cool in the lending pool.",
      description:
        "Open accounts earn variable yield from pooled capital. Earn simply from participating in decentralized lending markets.",
    },
  ]; 
  const gridItemFour: any = [
    {
      name: "Paint your own positions.",
      description:
        "Mango turns your capital into tools for art. Cross-collateral means fungability for your digital money.",
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
  