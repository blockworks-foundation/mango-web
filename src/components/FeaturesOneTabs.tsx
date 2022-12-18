import { Tab } from '@headlessui/react'

function FeaturesOneTabs() {
  return (
    <Tab.Group vertical>
      <Tab.List className={"text-white bg-slate-500 "}>
        <Tab className={"hover:bg-slate-700 "}>
          <p>Maximum capital efficiency</p>
          <p>Utilize all your assets as collateral to trade any other asset with up to 5x leverage. </p>
        </Tab>
        <Tab className={"hover:bg-slate-700 "}>
          <p>Maximum capital efficiency</p>
          <p>Utilize all your assets as collateral to trade any other asset with up to 5x leverage. </p>
        </Tab>
        <Tab className={"hover:bg-slate-700 "}>
          <p>Maximum capital efficiency</p>
          <p>Utilize all your assets as collateral to trade any other asset with up to 5x leverage. </p>
        </Tab>
      </Tab.List>
      <Tab.Panels className={"text-white bg-slate-700 "}>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default FeaturesOneTabs;
