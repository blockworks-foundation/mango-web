import GridItemShort from "@/components/cards/GridItemShort";
import GridItemSend from "@/components/cards/GridItemSend";
import GridItemFees from "@/components/cards/GridItemFees";

const gridItemOne: any = [
    {
      name: "Payments made simple.",
      description:
        "There is no middle man here. Pay, request, send, and receive all through a mobile phone number linked to your own self-controlled wallet.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Put your money to work.",
      description:
        "Auto-lending allows you to take advantage of pooled lending markets on Mango. Earn variable interest for you digital assets transparently and all on-chain.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "self-custody simplified.",
      description:
      "Auto-lending allows you to take advantage of pooled lending markets on Mango. Earn variable interest for you digital assets transparently and all on-chain.",
    },
  ]; 
  

function PhoneSectionGrid() {
  return (
    <div className="max-w-7xl mx-auto -mt-[0px] px-8 border-l-[4px] border-th-fgd-2 border-solid py-[150px]">
      <div className="z-20 inline-flex gap-6 mb-6">
        <div className="">
          <GridItemSend
            name={gridItemOne[0].name}
            description={gridItemOne[0].description}
          /> 
        </div>
        <div className="">
          <GridItemFees
            name={gridItemTwo[0].name}
            description={gridItemTwo[0].description}
          />  
        </div>
        <div className="">
          <GridItemShort
            name={gridItemThree[0].name}
            description={gridItemThree[0].description}
          />    
        </div>          
        </div>
    </div>
  );
}

  
  export default PhoneSectionGrid;
  