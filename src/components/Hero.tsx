
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
import MangoBlob from '@/components/MangoBlob';

const Hero = () => {
  return (
    <>
      <div className="mt-72 mb-8 z-10">
        <p className="font-mono font-bold xs:text-3xl mb-3 text-center text-white sm:text-4xl md:text-4xl lg:text-5xl">
          Every market, all the power.
          <br />
          <GradientText>None of the fuss.</GradientText>
        </p>
      </div>
        <div className="mt-8 flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
                      
                      <Button>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://trade.mango.markets"
                        >
                          Discover 🥭
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
        <div className="flex flex-col">
          <div className="z-0 transform -translate-y-64 translate-x-56">
              <MangoBlob />
          </div> 
          <div className="z-10 hidden md:block reletive left-0 top-96 mt-20 ">
            <img
              className="w-full h-auto"
              src={`/assets/images/hero_desktop.png`}          
              alt="desktop"
              />
          </div>
        </div>

    </>
  );
};

export default Hero;
