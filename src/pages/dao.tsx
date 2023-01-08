import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import DaoHero from '@/components/DaoHero';
import DaoGrid from '@/components/DaoGrid';
import HomeCtaFour from '@/components/SectionCta';

const Dao = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <Nav />
         <DaoHero />
         <DaoGrid />
         <HomeCtaFour />
      <Footer />

    </div>
  );
};

export default Dao;
