import Footer from '@/components/Footer';
import DaoHero from '@/components/DaoHero';
import DaoGrid from '@/components/DaoGrid';
import HomeCtaFour from '@/components/SectionCta';
import NavvyAlpha from '@/components/NavvyAlpha';

const Dao = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <NavvyAlpha />
         <DaoHero />
         <DaoGrid />
         <HomeCtaFour />
      <Footer />

    </div>
  );
};

export default Dao;
