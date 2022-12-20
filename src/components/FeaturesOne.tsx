
import GradientText from '@/components/GradientText';
// import Button from '@/components/Button';
// import Linkie from '@/components/Linkie';
import FeaturesOneTabs from './FeaturesOneTabs';

const FeaturesOne = () => {
  return (
    <>
      <div className="mb-8 z-10">
        <p className="font-display xs:text-3xl mb-3 text-center font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl">
          Trade, leverage, and utilize.
          <br />
          <GradientText>All from one hub.</GradientText>
        </p>
      </div>
      <div className="mt-42 p-10 flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
          <FeaturesOneTabs />
      </div>
    </>
  );
};

export default FeaturesOne;
