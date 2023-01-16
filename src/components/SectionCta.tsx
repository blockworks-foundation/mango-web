
import GradientText from '@/components/GradientText';
import ButtonTwo from '@/components/ButtonTwo';
import LinkieTwo from '@/components/LinkieTwo';
import CallToAction from '@/components/CallToAction'
// import MangoBlob from '@/components/MangoBlob';

const SectionCta = () => {
  return (
    <>
     <div className="py-40">
      <div className="z-10">
      <h2 className="text-center font-display text-6xl tracking-tight mb-6 text-th-fgd-5 leading-tight">
          Powered by a fruit.
          <br />
          <GradientText>This is money with mango.</GradientText>
        </h2>
      </div>
        <div className="mt-8 flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
                      
                      <ButtonTwo>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://trade.mango.markets"
                        >
                          Discover 🥭
                        </a>
                      </ButtonTwo>
                      

                      <LinkieTwo>
                        <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://docs.mango.markets/"
                        >
                        Explore the docs
                        </a>
                
                     </LinkieTwo>

        </div>
          <div className="z-10 mt-0 ">
            <img
              className="m-auto h-auto relative right-12"
              src={`/assets/images/mango_cpu.png`}          
              alt="desktop"
              />
          </div>
        </div>
        <CallToAction /> 
        </>

  );
};

export default SectionCta ;
