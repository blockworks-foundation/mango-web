import GridItemLever from "@/components/cards/GridItemLever";


const gridItemOne: any = [
    {
      name: "Open by default.",
      description:
        "On-chain from the begining. A DAO governed by people all on chain and transparent.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Stress tested & approved.",
      description:
        "Verify any contributor code, all releases are audited, and the DAO is well capitalized enough to secure user funds.",
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
      <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>
      <div className="py-10 max-w-2xl">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-xl mb-2 ">
                  <span className="text-th-fgd-3">Thesis:</span>  A decentralized future that is in control of the people, not the powers that be.
                  </h1>
                  <p className="font-body text-th-fgd-3 text-md ">
                    The open-source, decentralized application space has the potential to become a truly driving force in giving power back to people, open-source decentralied products are going to be pivotal in the shift to that future. 
                  <br /><br />
                    Decentralized applications at their core embody the potential of fair distribution of a centralized structures. They enable new opportunities and ways of thinking about our reality and the way we run current and future systems.
                  <br /><br />
                    <span className="text-th-fgd-4">Over the last 10+ years we have seen this decentralized future unfolding, slowly but surely and feel that this trend will continue.</span>
                  </p>
            </div>     
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
  