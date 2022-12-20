
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
// import MangoBlob from '@/components/MangoBlob';

const HomeCtaFour = () => {
  return (
    <>
      <div className="mt-72 mb-8 z-10">
        <p className="font-display xs:text-3xl mb-3 text-center font-bold text-white sm:text-4xl md:text-4xl lg:text-5xl">
          Access to what you need.
          <br />
          <GradientText>No approvals needed.</GradientText>
        </p>
      </div>
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
        <div className="">
          <div className="z-10 mt-0 ">
            <img
              className="m-auto h-auto relative right-12"
              src={`/assets/images/mango_cpu.png`}          
              alt="desktop"
              />
          </div>
        </div>

    </>
  );
};

export default HomeCtaFour ;
