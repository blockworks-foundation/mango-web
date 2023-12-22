const NoResults = ({ message }: { message: string }) => {
  return (
    <div className="border border-th-bkg-3 p-6 rounded-xl flex items-center justify-center">
      <p>{message}</p>
    </div>
  )
}

export default NoResults
