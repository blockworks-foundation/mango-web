
import MangoBlob from "@/components/MangoBlob"
import DesktopFeatureGrid from '@/components/DesktopFeatureGrid';

const FeaturesTwo = () => {
  return (
    <>
        <div className="z-0 transform -translate-y-40 translate-x-32">
         <MangoBlob />
        </div> 

      <div className="p-10 flex lg:flex-row md:flex-row lg:justify-center md:justify-center sm:justify-center">
          <DesktopFeatureGrid/>
      </div>
    </>
  );
};

export default FeaturesTwo;
