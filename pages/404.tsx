import FourOhfour from "../components/FourOhFour"

const FourOh = () => {
  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all overflow-hidden`}>
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <FourOhfour />
      <div className="w-screen h-2 bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
    </div>
  )
}

export default FourOh
