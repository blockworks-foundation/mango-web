import BrandHero from '@/components/BrandHero';
import Footer from '@/components/Footer';

import NavvyAlpha from '@/components/NavvyAlpha';

const Brand = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <NavvyAlpha />
      <BrandHero />

      <Footer />

    </div>
  );
};

export default Brand;
