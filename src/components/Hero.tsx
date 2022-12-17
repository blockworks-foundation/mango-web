import GradientText from '@/components/GradientText';

const Hero = () => {
  return (
    <div>
      <p className="xs:text-3xl mb-3 text-center font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl">
        Every market, all the power.
      </p>
      <p className="xs:text-3xl mb-4 text-center font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl">
        <GradientText>None of the fuss.</GradientText>
      </p>
    </div>
  );
};

export default Hero;
