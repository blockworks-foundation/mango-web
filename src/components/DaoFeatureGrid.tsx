import GridItemGov from "./cards/GridItemGov";
import GridItemProducts from "./cards/GridItemProducts";
import GridItemStress from "./cards/GridItemStress";
import { StopIcon } from "@heroicons/react/24/solid";

const featureFour = [
       {
      bullet:
        "The effectiveness of decentralized applications as a public resource depends upon the following;",
        descript:
       " Interoperability (between protocols, data formats, content), innovation and decentralized participation worldwide is a must.",
    },
    {
     bullet:
     "We're building for open-source, building for people. ",
      descript:
    "Free and open-source software promotes the development of the decentralized application space as public resources for good. ",
     },
     {
       bullet:
        "Build in public; ",
        descript:
          "Transparent community-based processes promote participation, accountability and trust as public resources are grown.",
       },
       {
        bullet:
         "Commercial involvement in protocol usage is inevitable and can bring many good things; ",
        descript:
          "A balance between profit and public benefit is critical.",
        },
         {
        bullet:
          "Magnifying the public benefit aspects of decentralized applications is an important goal, ",
        descript:
         " worthy of time, attention and commitment. ",
          },
]

const featureThree = [
  {
    bullet:
      "Create permissionless decentralized systems ",
    descript:
      "that allow for humans to transact, interact, and build without restriction.",
  },
  {
    bullet:
      "Decentralized applications can become an integral part of modern life ",
    descript:
      "a key component to fair distribution of power that we hope can benefit society as a whole.",
  },
  {
    bullet:
       "Open-source protocols are a global public resource ",
    descript:
       " that must remain open, accessible, and verfyiable.",
   },
   {
    bullet:
       "Make life simpller. ",
    descript:
        "Decentralized applications must make lives of human beings better not more difficult.",
     },
     {
     bullet:
       "Individuals' security and privacy within crypto are fundamental. ",
     descript:
        "This fact must not be treated as optional.",
      },
      {
      bullet:
        "Individuals must have the ability to shape the protocol, ",
      descript:
        "as well as their own experiences on it.",
       },
      
]
const gridItemOne: any = [
    {
      name: "Open by default.",
      description:
        "A real decentralized distributed organization governed by actual people, all governance is on chain and transparent from the DAOs inception.",
    },
  ]; 
  const gridItemTwo: any = [
    {
      name: "Stress tested & approved.",
      description:
        "Verify contributor code on github, all releases are audited, and the DAO is well capitalized enough to secure deposits under stress.",
    },
  ]; 
  const gridItemThree: any = [
    {
      name: "Here for the long-haul.",
      description:
        "30+ Contributors dedicated to Mango, building open-source tooling, infratructure, and creating accessable financial products for people. ",
    },
  ]; 

function DaoFeaturesGrid() {
  return (
  <>
  
    <section className="max-w-7xl mx-auto z-30">
      <div className="px-8 pb-4 border-l-[4px] border-th-fgd-2 border-solid -mt-[32px]">
      <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>
      <div className="py-10 max-w-xl">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-xl mb-2 ">
                  <span className="text-mango-yellow">Contributor thesis:</span>  A decentralized future that is in control of the people is better for us all.
                  </h1>
                  <p className="font-body text-th-fgd-3 text-md ">
                    The open-source, decentralized application space has the potential to become a truly driving force in giving power back to people, open-source decentralized products are going to be pivotal in the shift to that future. 
                  <br /><br />
                    Decentralized applications at their core embody the potential of fair distribution of traditional centralized institutions. They enable new opportunities and ways of thinking about our reality and the way we run current and future systems.
                  <br /><br />
                    <span className="text-th-fgd-4">Over the last 10+ years we have seen this decentralized future unfolding slowly but surely, and feel that this trend will continue.</span>
                  </p>
            </div>     
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        
        <GridItemGov
          name={gridItemOne[0].name}
          description={gridItemOne[0].description}
        />  
        <GridItemStress
          name={gridItemTwo[0].name}
          description={gridItemTwo[0].description}
        />  
        <GridItemProducts
          name={gridItemThree[0].name}
          description={gridItemThree[0].description}
        />               
        </div>
        <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>
           <div className="py-10 max-w-xl">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-xl mb-2 ">
                  <span className="text-mango-yellow">Contributor principles:</span> 
                  </h1>
                  <p className="font-body text-th-fgd-3 text-md ">
                  We all have good hearts, intentions, and similar ideas about the way we view Mango. Given the distribution of the Mango DAO, contributors feel it beneficial to solidify these ideas in writing for the current culture of Mango contributors as well and future ones coming on-board to help develop the protocol. 
                  <br /><br />
                  Mango is driven by the community, we need to make sure that contributor community is aligned with the core beliefs of the DAO. The core beliefs of the DAO are an amalgamation of the core beliefs of its contributors. 
                  </p>
            </div>    
            <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[32px]"></div>

            <div className="py-10 grid grid-cols-4 gap-20">
            <div className="col-span-2">
            {featureThree.map((feature) => (   
                <ul className="font-body text-th-fgd-4 mb-6" key={feature.bullet}>

                    <li className="inline-flex">
                        <div>
                        <StopIcon className="fill-mango-yellow w-3 h-3 text-th-fgd-2 mt-[8px] mr-2" />
                        </div>
                        <div>
                        <span className="text-xl text-th-fgd-4">{feature.bullet}</span>
                        <span className="text-xl text-th-fgd-3">{feature.descript}</span>
                        </div>
                    </li>
                </ul>
                ))}
            </div>
            <div className="col-span-2">
            {featureFour.map((feature) => (   
                <ul className="font-body text-th-fgd-4 mb-6" key={feature.bullet}>

                    <li className="inline-flex">
                        <div>
                        <StopIcon className="fill-mango-yellow w-3 h-3 text-th-fgd-2 mt-[8px] mr-2" />
                        </div>
                        <div>
                        <span className="text-xl text-th-fgd-4">{feature.bullet}</span>
                        <span className="text-xl text-th-fgd-3">{feature.descript}</span>
                        </div>
                    </li>
                </ul>
                ))}
            </div>
            </div>
      </div>
      <div className="sm:w-1/3 w-full h-[4px] bg-gradient-to-r from-th-fgd-2"></div>
      <div className="h-1/2 w-[4px] bg-gradient-to-b from-th-fgd-2"></div>
    </section>
    
</>
  );
}

  
  export default DaoFeaturesGrid;
  