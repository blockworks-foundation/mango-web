import GridItemGlobe from "@/components/cards/GridItemGlobe";
import GridItemSend from "@/components/cards/GridItemSend";
import GridItemFees from "@/components/cards/GridItemFees";

const gridItemOne: any = [
    {
      name: "Self-custody, for people.",
      description:
        "Pay, request, send, and receive all through a mobile phone number linked to your own digital crypto currency payments wallet.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Put your coin to work.",
      description:
        "Earn a variable interest rate for your money. Auto-lending allows you to take advantage of pooled lending markets.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "Move where you want.",
      description:
      "An open-source global payments platform for mobile. Take your money with you. Pay anyone, anywhere.",
    },
  ]; 
  

function PhoneSectionGrid() {
  return (
    <div className="max-w-7xl mx-auto -mt-[0px] px-8 border-l-[4px] border-th-fgd-2 border-solid py-[150px]">
      <div className="z-20 flex gap-10 mb-6">
        <div className="flex-1">
          <GridItemSend
            name={gridItemOne[0].name}
            description={gridItemOne[0].description}
          /> 
        </div>
        <div className="flex-1">
          <GridItemFees
            name={gridItemTwo[0].name}
            description={gridItemTwo[0].description}
          />  
        </div>
        <div className="flex-1">
          <GridItemGlobe
            name={gridItemThree[0].name}
            description={gridItemThree[0].description}
          />    
        </div>          
        </div>
    </div>
  );
}

  
  export default PhoneSectionGrid;
  