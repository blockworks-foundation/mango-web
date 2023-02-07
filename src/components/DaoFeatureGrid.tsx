import GridItemLever from "@/components/cards/GridItemLever";


const gridItemOne: any = [
    {
      name: "Open by default.",
      description:
        "On-chain from the begining. Mango has been by the people for the people since inception. Building open-source products and tooling.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Trusted by the people.",
      description:
        "Verify our code, we audit our products, and the DAO is wel capitalized enough to secure user funds.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "All cool in the lending pool.",
      description:
        "Open accounts earn variable yield from pooled capital. Earn simply from participating in decentralized lending markets.",
    },
  ]; 

function DaoFeaturesGrid() {
  return (
  <>
    <section className="max-w-7xl mx-auto z-30">
      <div className="px-8 pb-4 border-l-[4px] border-th-fgd-2 border-solid -mt-[32px]">
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
        <GridItemLever
          name={gridItemOne[0].name}
          description={gridItemOne[0].description}
        />  
        <GridItemLever
          name={gridItemTwo[0].name}
          description={gridItemTwo[0].description}
        />  
        <GridItemLever
          name={gridItemThree[0].name}
          description={gridItemThree[0].description}
        />               
        </div>
        
      </div>
      <div className="sm:w-1/3 w-full h-[4px] bg-gradient-to-r from-th-fgd-2"></div>
      <div className="h-1/2 w-[4px] bg-gradient-to-b from-th-fgd-2"></div>
    </section>
    
</>
  );
}

  
  export default DaoFeaturesGrid;
  