
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import FeaturesOneTabs from '@/components/FeaturesOneTabs';

const FeaturesOne = () => {
  return (
    <>
      <div className="mt-72 mb-8 z-10 max-w-7xl mx-auto p-8">
        <p className="font-mono xs:text-3xl mb-3 text-left font-bold text-th-fgd-4 sm:text-4xl md:text-4xl lg:text-5xl">
          Trade, leverage, and utilize.
          <br />
          <GradientText>All from one hub.</GradientText>
        </p>
        <div className="mt-8 flex ">
                        <Button>
                          <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://trade.mango.markets"
                          >
                            Check out 🥭
                          </a>
                        </Button>

                        <Linkie>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://docs.mango.markets/"
                          >
                            Explore the docs
                          </a>
                        </Linkie>
        </div>
      </div>
      <div className="mt-42 p-10">
          <FeaturesOneTabs />
      </div>
    </>
  );
};

export default FeaturesOne;
