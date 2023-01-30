import GridItemLever from "@/components/cards/GridItemLever";
import GridItemMarkets from "@/components/cards/GridItemMarkets";
import GridItemLending from "@/components/cards/GridItemLending";
import GridItemPaint from "@/components/cards/GridItemPaint";

const gridItemOne: any = [
    {
      name: "Accessibility, not gatekeeping.",
      description:
        "Access to financial services to anyone with an internet connection, regardless of location or credit history.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Open, transparent, & permissionless.",
      description:
        "All transactions and lending agreements are transparent and recorded on a public ledger, ensuring accountability and reducing the risk of disputes.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "Lending for the people.",
      description:
        "Decentralized money markets can offer lower fees compared to traditional lending systems as there are no intermediaries involved.",
    },
  ]; 
  const gridItemFour: any = [
    {
      name: "All cool in the lending pool.",
      description:
        "Open accounts earn variable yield from pooled capital. Earn simply from participating in decentralized lending markets.",
    },
  ]; 

function EarnFeaturesGrid() {
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
      <div className="sm:w-1/3 w-full h-[4px] bg-gradient-to-r from-th-fgd-2"></div>
      <div className="h-[150px] w-[4px] bg-gradient-to-b from-th-fgd-2"></div>

    </section>
</>
  );
}

  
  export default EarnFeaturesGrid;
  