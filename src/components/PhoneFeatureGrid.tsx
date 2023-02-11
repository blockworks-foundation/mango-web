import GridItemGlobe from "@/components/cards/GridItemGlobe";
import GridItemSend from "@/components/cards/GridItemSend";
import GridItemFees from "@/components/cards/GridItemFees";

const gridItemOne: any = [
    {
      name: "Self-custody, for people.",
      description:
        "Pay, request, send, and receive all through a mobile phone number connected to your own digital crypto currency wallet.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Put your coin to work.",
      description:
       "Auto-lending within your Mango account enables you to passively take advantage of decentralized lending markets.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "Pay anyone, anywhere.",
      description:
      "A mobile global payments platform for the people. Discover a new way to move money around.",
    },
  ]; 
  

function PhoneFeatureGrid() {
  return (
    <div className="max-w-7xl mx-auto -mt-[0px] px-8 border-l-[4px] border-th-fgd-2 border-solid py-[150px]">
            <div className="max-w-2xl pt-40 pb-20">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-3xl mb-2 ">
                    Payments for the digital nomad.
                  </h1>
                  <p className="font-body text-th-fgd-3 text-xl ">
                      Mango Pay provides a seamless and accessible payments experience for people. Securely and efficiently send and receive funds from anywhere in the world with fast transaction speeds and low fees.
                   </p>
            </div>
      <div className="z-20 grid sm:grid-cols-3 grid-cols-1 gap-10 mb-6">
        <div className="col-span-1">
          <GridItemSend
            name={gridItemOne[0].name}
            description={gridItemOne[0].description}
          /> 
        </div>
        <div className="col-span-1">
          <GridItemFees
            name={gridItemTwo[0].name}
            description={gridItemTwo[0].description}
          />  
        </div>
        <div className="col-span-1">
          <GridItemGlobe
            name={gridItemThree[0].name}
            description={gridItemThree[0].description}
          />    
        </div>          
        </div>
    </div>
  );
}

  
  export default PhoneFeatureGrid;
  