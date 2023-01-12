
import GradientText from '@/components/GradientText';
import Button from '@/components/Button';
import Linkie from '@/components/Linkie';
// import MangoBlob from '@/components/MangoBlob';

const SectionCta = () => {
  return (
     <div className="my-72">
      <div className="z-10">
         <p className="font-display font-bold text-2xl mb-3 text-center text-th-fgd-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
          Access to what you need.
          <br />
          <GradientText>The quick brown fox jumped.</GradientText>
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
          <div className="z-10 mt-0 ">
            <img
              className="m-auto h-auto relative right-12"
              src={`/assets/images/mango_cpu.png`}          
              alt="desktop"
              />
          </div>
        </div>
  );
};

export default SectionCta ;
