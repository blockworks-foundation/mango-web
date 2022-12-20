
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import FeaturesTwoGrid from './FeaturesTwoGrid';

const FeaturesTwo = () => {
  return (
    <>
      <div className="mb-8 z-10">
        <p className="font-display xs:text-3xl mb-3 text-center font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl">
          Take the brush.
          <br />
          <GradientText>Paint your own trades.</GradientText>
        </p>
        <div className="mt-8 flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://trade.mango.markets"
                      >
                        <Button>Check out 🥭</Button>
                      </a>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://docs.mango.markets/"
                      >
                        <Linkie>Explore the docs</Linkie>
                      </a>
        </div>
      </div>
      <div className="mt-42 p-10 flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
          <FeaturesTwoGrid />
      </div>
    </>
  );
};

export default FeaturesTwo;
