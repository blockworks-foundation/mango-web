import { Squares2X2Icon, TableCellsIcon } from '@heroicons/react/20/solid'

const TableViewToggle = ({
  showTableView,
  setShowTableView,
}: {
  showTableView: boolean
  setShowTableView: (show: boolean) => void
}) => {
  return (
    <div className="h-10 hidden lg:flex">
      <button
        className={`flex w-10 items-center justify-center rounded-l-md border border-th-input-border border-r-0 focus:outline-none md:hover:bg-th-bkg-3 ${
          showTableView ? 'bg-th-bkg-3 text-th-active' : 'text-th-fgd-3'
        }`}
        onClick={() => setShowTableView(!showTableView)}
      >
        <TableCellsIcon className="h-5 w-5" />
      </button>
      <button
        className={`flex w-10 items-center justify-center rounded-r-md border border-th-input-border border-l-0 focus:outline-none md:hover:bg-th-bkg-3 ${
          !showTableView ? 'bg-th-bkg-3 text-th-active' : 'text-th-fgd-3'
        }`}
        onClick={() => setShowTableView(!showTableView)}
      >
        <Squares2X2Icon className="h-5 w-5" />
      </button>
    </div>
  )
}

export default TableViewToggle
