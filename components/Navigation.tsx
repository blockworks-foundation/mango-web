export const TradeUrl = "https://trade.mango.markets";
export const StatsUrl = `${TradeUrl}/#/stats`;
export const LearnUrl = "https://docs.mango.markets";

export function Navigation() {
  return (
    <div className="flex items-center">
      <a href="/">
        <div className="flex items-center md:mr-8">
          <img src="/mango.png" className="inline-block w-8 h-8 sm:w-16 sm:h-16" />
          <span className="hidden md:inline-block text-3xl text-white ml-4 font-black">
            Mango Markets
          </span>
        </div>
      </a>

      <a href={TradeUrl} className="ml-6 sm:ml-14 sm:font-light text-white text-md sm:text-2xl">
        Trade
      </a>

      <a href={StatsUrl} className="ml-8 sm:ml-16 sm:font-light text-white text-md sm:text-2xl">
        Stats
      </a>

      <a href={LearnUrl} className="ml-8 sm:ml-16 sm:font-light text-white text-md sm:text-2xl">
        Learn
      </a>

      <a href={"/careers"} className="ml-8 sm:ml-16 sm:font-light text-white text-md sm:text-2xl">
        Careers
      </a>
    </div>
  );
}
