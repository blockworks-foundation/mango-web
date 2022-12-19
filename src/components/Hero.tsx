
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';

const Hero = () => {
  return (
    <>
      <div className="mt-20 mb-8 z-10">
        <p className="font-display xs:text-3xl mb-3 text-center font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl">
          Every market, all the power.
          <br />
          <GradientText>None of the fuss.</GradientText>
        </p>
      </div>
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
        <div>
        <img
          className="z-0 hidden md:block reletive left-0 top-96 mt-20 w-full h-auto"
          src={`/assets/images/hero_desktop.png`}          
          alt=""
          />
        </div>
    </>
  );
};

export default Hero;
