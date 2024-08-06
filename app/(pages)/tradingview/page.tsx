import TradingView from '../../components/icons/TradingView'

async function ChartsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="mb-4 flex flex-col items-start">
        <TradingView className="mb-2 h-8 w-auto text-th-fgd-1" />
        <h1 className="text-3xl">The gold standard in charting tools</h1>
      </div>
      <p className="mb-3">
        The market charts on Mango are displayed using TradingView&apos;s
        powerful charting tools. TradingView is a platform, where you can{' '}
        <a
          href="https://www.tradingview.com/economic-calendar/"
          rel="noopener noreferrer"
          target="_blank"
        >
          track the latest events in the Economic calendar
        </a>
        , watch live prices, and more. These charts offer an exceptional and
        powerful charting experience. TradingView has highly customizable
        charting tools. You can select from a wide variety of chart types,
        including line, bar, and candlestick charts. The platform also features
        an array of drawing tools, such as trend lines, channels, and Fibonacci
        retracements. This allows you to annotate your charts with detailed
        technical analysis. Additionally, TradingView supports multiple
        timeframes, enabling you to conduct both short-term and long-term
        analyses seamlessly on Mango.
      </p>

      <p className="mb-3">
        A significant advantage of using TradingView charts is access to an
        extensive library of technical indicators. The platform includes
        hundreds of built-in indicators, like moving averages, MACD, RSI, and
        Bollinger Bands, which assist you in identifying market trends and
        potential trading opportunities. We have enabled the ability to save
        your analysis to revisit at a later date.
      </p>

      <p className="mb-3">
        You can also view your executed trades and orders directly on the chart
        and even edit your orders by dragging them on the chart. TradingView
        really is the gold standard in financial charting tools.
      </p>
    </div>
  )
}

export default ChartsPage
