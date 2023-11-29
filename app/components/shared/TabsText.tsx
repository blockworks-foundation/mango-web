const TabsText = ({
  tabs,
  activeTab,
  onChange,
  className,
}: {
  tabs: [string, number][]
  activeTab: string
  onChange: (tab: string) => void
  className?: string
}) => {
  return (
    <div className="flex space-x-6 text-base">
      {tabs.map((tab) => (
        <button
          className={`flex items-center space-x-2 font-bold focus:outline-none ${
            activeTab === tab[0]
              ? 'text-th-active'
              : 'text-th-fgd-2 md:hover:text-th-fgd-4'
          } ${className}`}
          onClick={() => onChange(tab[0])}
          key={tab[0]}
        >
          <span>{tab[0]}</span>
          {tab[1] ? (
            <div className="rounded-md bg-th-bkg-3 px-1.5 py-0.5 font-body text-xs font-medium text-th-fgd-2">
              <span>{tab[1]}</span>
            </div>
          ) : null}
        </button>
      ))}
    </div>
  )
}

export default TabsText
