import BrandHero from '@/components/BrandHero';
import BrandSectionOne from '@/components/BrandSectionOne';
import Footer from '@/components/Footer';

const Brand = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <BrandHero />
      <BrandSectionOne />
      <Footer />

    </div>
  );
};

export default Brand;
