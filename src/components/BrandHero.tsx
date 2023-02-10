
import GradientText from '@/components/GradientText';
import Image from 'next/image';
const BrandHero = () => {
  return (
    <>
     <div className="mt-20 pt-40 pb-10 border-l-[4px] border-th-fgd-2 border-solid max-w-7xl mx-auto px-16">
      <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[64px] mb-8"></div>
            <div className="z-10 ">
            <h2 className="text-left font-display sm:text-5xl text-2xl tracking-tight mb-2 text-th-fgd-5 leading-tight">
                  <GradientText>Mango Brand Guidelines.</GradientText>
            </h2>
            <p className="text-th-fgd-4 text-left text-2xl">
            Resources for presenting the Mango brand consistently and professionally.
            </p>
      </div>
      </div>
        <div className="-mt-10 border-l-[4px] border-th-fgd-2 border-solid max-w-7xl mx-auto px-16">
      <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[64px] mt-10"></div>
       <div className="z-10 grid grid-cols-2 gap-10 max-w-7xl mx-auto pt-10">
          <div className="group lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-xl mb-2 ">
                        Naming
                  </h1>
                  <p className="font-body text-th-fgd-3 text-md ">
                        “Mango” is a fruit, always spelled with a capital “M”. It is also the top level brand name for the DAO and its suite of products. 
                        <br /><br />
                         When referring to any dedicated releases from Mango or the DAO itself, contributors ask that you capitalize them as proper nouns (e.g. &quot;Mango Markets&quot;, &quot;Mango Pay&quot;, &quot;Mango DAO&quot;).
                  </p>
            </div>
            <div className=" mt-5">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-xl mb-2 ">
                        Usage
                  </h1>
                  <p className="font-body text-th-fgd-3 text-md ">
                        Unripe mangoes can sit out on the counter at room temperature until ripened, once ripened Mango assets can be used in any content, just use plenty of space around the asset being used. 
                        <br /><br />
                        You can adjust sizing, use them in any location, but just make sure to keep fruit open and free from clutter, less they go bad, we don&apos;t want ripened mangoes to go to waste!
                  </p>
                  <div className="bg-mango-orange/10  border-2 border-mango-orange/20 rounded-2xl py-3 px-5 text-mango-orange mt-8 text-sm">
                        <p>
                        Any assets provided are free to use, however please do not alter these files in any way, please do not display mango assets in a way that implies an affiliation, or endorsement by Mango of your busines, products, or services unless an official endorsement exsists. Get in touch if you have questions.
                        </p>
                  </div>
            </div>
          </div>  
       </div>

       <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[64px] mt-10"></div>
       <div className="z-10 grid grid-cols-2 gap-10 max-w-7xl mx-auto pt-10">
          <div className="group lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-xl mb-2 ">
                        Logomark
                  </h1>
                  <ul className="inline-flex space-x-5">
                        <li className="bg-th-bkg-1 py-10 px-11 rounded-3xl">
                        <Image
                              src="/assets/images/mango-logomark.svg"
                              alt="Github"
                              width={80}
                              height={80}
                              loading="lazy"
                        />
                        </li>
                        <li className="saturate-150 bg-gradient-to-br from-mango-red via-mango-orange to-mango-green py-10 px-11 rounded-3xl">
                        <Image
                              src="/assets/images/white-logomark.svg"
                              alt="Github"
                              width={80}
                              height={80}
                              loading="lazy"
                        />
                        </li>
                        <li className="bg-mango-purple  py-10 px-11 rounded-3xl">
                        <Image
                              src="/assets/images/white-logomark.svg"
                              alt="Github"
                              width={80}
                              height={80}
                              loading="lazy"
                        />
                        </li>
                        <li className="bg-th-fgd-5 border-2 border-th-bkg-3 py-10 px-11 rounded-3xl">
                        <Image
                              src="/assets/images/dark-logomark.svg"
                              alt="Github"
                              width={80}
                              height={80}
                              loading="lazy"
                        />
                        </li>
                  </ul>
            </div>
          </div>  
       </div>

       <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[64px] mt-10"></div>
       <div className="z-10 grid grid-cols-2 gap-10 max-w-7xl mx-auto py-10">
          <div className="group lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-xl mb-2 ">
                        Logotype
                  </h1>
                  <ul className="inline-flex space-x-5">
                        <li className="bg-th-bkg-1  py-8 px-10 rounded-3xl font-display text-th-fgd-5 text-5xl">
                              Mango
                        </li>
                        <li className="bg-gradient-to-br from-mango-red via-mango-orange to-mango-green  py-8 px-10 rounded-3xl font-display text-th-fgd-5 text-5xl">
                              Mango
                        </li>
                        <li className="bg-mango-purple  py-8 px-10 rounded-3xl font-display text-th-fgd-5 text-5xl">
                              Mango
                        </li>
                        <li className="bg-th-fgd-5 py-8 px-10 rounded-3xl font-display text-th-bkg-1 text-5xl">
                              Mango
                        </li>
                  </ul>
            </div>
          </div>  
       </div>

       <div className="w-1/2 h-[4px] bg-gradient-to-r from-th-fgd-2 transform -translate-x-[64px] mt-10"></div>
       <div className="z-10 grid grid-cols-2 gap-10 max-w-7xl mx-auto py-10">
          <div className="group lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
            <div className="">
                  <h1 className="text-th-fgd-4 font-display tracking-tighter text-xl mb-2 ">
                        Wordmark
                  </h1>
                  <ul className="inline-flex space-x-5">
                        <li className="inline-flex align-middle bg-th-bkg-1  py-8 px-10 rounded-3xl font-display text-th-fgd-5 text-5xl">
                        <span> 
                              <Image
                              src="/assets/images/mango-logomark.svg"
                              alt="Github"
                              width={60}
                              height={60}
                              loading="lazy"
                              />
                         </span>
                         <span className="ml-4">Mango</span>
                             
                        </li>
                        <li className="inline-flex bg-gradient-to-br from-mango-red via-mango-orange to-mango-green  py-8 px-10 rounded-3xl font-display text-th-fgd-5 text-5xl">
                        <span> 
                        <Image
                              src="/assets/images/white-logomark.svg"
                              alt="Github"
                              width={60}
                              height={60}
                              loading="lazy"
                        />
                        </span>
                         <span className="ml-4">Mango</span>
                        </li>
                        <li className="inline-flex bg-mango-purple  py-8 px-10 rounded-3xl font-display text-th-fgd-5 text-5xl">
                        <span> 
                        <Image
                              src="/assets/images/white-logomark.svg"
                              alt="Github"
                              width={60}
                              height={60}
                              loading="lazy"
                        />
                        </span>
                         <span className="ml-4">Mango</span>
                        </li>
                  </ul>
            </div>
          </div>  
       </div>
    </div> 
        </>

  );
};

export default BrandHero ;
