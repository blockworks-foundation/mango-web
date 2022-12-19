import { Tab } from '@headlessui/react'

function FeaturesOneTabs() {
  return (
    <Tab.Group vertical>
      <Tab.List className={"text-white bg-white bg-opacity-5 flex flex-col w-auto"}>
        <Tab className={"hover:bg-slate-700 focus:bg-mango-yellow "}>
          <p>Maximum capital efficiency</p>
          <p>Utilize all your assets as collateral to trade any other asset with up to 5x leverage. </p>
        </Tab>
        <Tab className={"hover:bg-slate-700 focus:bg-mango-yellow"}>
          <p>Maximum capital efficiency</p>
          <p>Utilize all your assets as collateral to trade any other asset with up to 5x leverage. </p>
        </Tab>
        <Tab className={"hover:bg-slate-700 focus:bg-mango-yellow"}>
          <p>Maximum capital efficiency</p>
          <p>Utilize all your assets as collateral to trade any other asset with up to 5x leverage. </p>
        </Tab>
      </Tab.List>
      <Tab.Panels className={"text-white"}>
        <Tab.Panel>
        <div>
          <img
            className="z-0 reletive w-full h-auto"
            src={`/assets/images/ipad_one.png`}          
            alt=""
            />
        </div>
        </Tab.Panel>
        <Tab.Panel>
        <div>
          <img
            className="z-0 reletive w-full h-auto"
            src={`/assets/images/ipad_two.png`}          
            alt=""
            />
        </div>
        </Tab.Panel>
        <Tab.Panel>
        <div>
          <img
            className="z-0 reletive w-full h-auto"
            src={`/assets/images/ipad_three.png`}          
            alt=""
            />
        </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    
  )
}

export default FeaturesOneTabs;
