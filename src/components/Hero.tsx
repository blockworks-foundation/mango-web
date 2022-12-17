
import GradientText from '@/components/GradientText';

const Hero = () => {
  return (
    <>
    <section className="bg-mango-bkg-1">
      <div>
        <p className="font-display xs:text-3xl mb-3 text-center font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl">
          Every market, all the power.
          <br />
          <GradientText>None of the fuss.</GradientText>
        </p>
      </div>
      <div>
        <img
          className="z-0 hidden md:block absolute left-0 top-96 w-full h-auto"
          src={`/assets/images/hero_desktop.png`}          
          alt=""
          />
      </div>
    </section>
    </>
  );
};

export default Hero;
