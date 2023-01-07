// import GradientText from "@/components/GradientText";
import MangoBlob from "@/components/MangoBlob"
import ButtonCopyGit from "./ButtonCopyGit";

const CallToAction = () => {
  return (
    <>
<div className="z-0 transform -translate-y-40 translate-x-32">
           <MangoBlob />
          </div> 
<div className="z-50 mx-auto max-w-7xl pt-0 pb-16 my-16 mt-0">
    <div className="group h-72 transform transition duration-200 ease-in-out hover:-translate-y-2 border border-th-fgd-2 rounded-[40px] shadow-lg hover:shadow-[0_8px_62px_-5px_rgba(0,0,0,0.1)] overflow-hidden lg:grid lg:grid-cols-2 lg:gap-2 mt-8 bg-mangotop bg-cover bg-top bg-no-repeat bg-th-bkg-3">
    <div className="pt-10 pb-12 px-5 sm:pt-16 sm:px-16 lg:py-4 lg:pr-0 xl:py-12 xl:px-16">
        <div className="lg:self-center">
        <h2 className="text-4xl font-mono font-bold text-th-fgd-5 w-screen">
              Doesnt matter where you are. 
            <br />
            <span className="text-th-fgd-3">
              We open-source everything.
            </span>
        </h2>
            <ButtonCopyGit />
        </div>
    </div>

    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
        <img
        className="transform translate-x-2 translate-y-2 object-cover"
        src="assets/images/cpu-mango.png"
        alt="mango markets"
        />
    </div>
    </div>
</div>
</>
  );
};

export default CallToAction;
