
import MangoBlob from "@/components/MangoBlob"
import DesktopFeatureGrid from '@/components/DesktopFeatureGrid';

const FeaturesTwo = () => {
  return (
    <>
      <div className="-mt-[490px]">
        <div className="z-0 transform -translate-y-40 translate-x-32">
          <MangoBlob />
          </div> 

          <div className="flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
            <DesktopFeatureGrid/>
        </div>
      </div>
    </>
  );
};

export default FeaturesTwo;
