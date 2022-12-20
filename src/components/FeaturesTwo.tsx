
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import FeaturesTwoGrid from './FeaturesTwoGrid';
import MangoBlob from "@/components/MangoBlob"

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

        <div className="z-0 transform -translate-y-40 translate-x-32">
         <MangoBlob />
        </div> 

      <div className="mt-42 p-10 flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
          <FeaturesTwoGrid />
      </div>
    </>
  );
};

export default FeaturesTwo;
