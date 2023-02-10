import GridItemLendingSm from "@/components/cards/GridItemLendingSm";
import GridItemCompose from "./cards/GridItemCompose";
import GridItemTransparent from "./cards/GridItemTransparent";

const gridItemOne: any = [
    {
      name: "Financial Inclusion for all.",
      description:
        "Access to permissionless financial services online should be for anyone with an internet connection, regardless of location or credit history.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Open & Transparent.",
      description:
        "All transactions and lending agreements are transparent and recorded on a public ledger, ensuring accountability and reducing the risk of disputes.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "Peer-to-Peer Finance.",
      description:
        "Decentralized lending markets have the potential to offer higher yield compared to traditional lending systems by removing the friction of a middleman. ",
    },
  ]; 

function EarnFeaturesGrid() {
  return (
  <>
    <section className="max-w-7xl mx-auto z-30">
      <div className="px-8 pb-4 border-l-[4px] border-th-fgd-2 border-solid -mt-[32px]">
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
        <GridItemCompose
          name={gridItemOne[0].name}
          description={gridItemOne[0].description}
        />  
        <GridItemTransparent
          name={gridItemTwo[0].name}
          description={gridItemTwo[0].description}
        />  
        <GridItemLendingSm
          name={gridItemThree[0].name}
          description={gridItemThree[0].description}
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
  