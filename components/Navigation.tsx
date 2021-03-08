export default function Navigation() {
  return (
    <div className="flex items-center">
      <div className="flex items-center md:mr-8">
        <img height="50px" width="50px" src="/mango.png" className="inline-block" />
        <span className="hidden md:inline-block text-3xl text-white ml-4 font-black">
          Mango Markets
        </span>
      </div>

      <a href="/trade" className="ml-8 sm:ml-16 font-light text-white text-2xl">
        Trade
      </a>

      <a href="/trade" className="ml-8 sm:ml-16 font-light text-white text-2xl">
        Stats
      </a>

      <a href="/trade" className="ml-8 sm:ml-16 font-light text-white text-2xl">
        Learn
      </a>
    </div>
  );
}
