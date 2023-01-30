import Footer from '@/components/Footer';
import DaoHero from '@/components/DaoHero';
import DaoFeatureGrid from '@/components/DaoFeatureGrid';
import CallToActionCard from '@/components/CallToActionCard';
import SectionCtaDao from '@/components/SectionCtaDao';

const Dao = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
         <DaoHero />
         <DaoFeatureGrid />
         <SectionCtaDao />
         <CallToActionCard />
         <Footer />

    </div>
  );
};

export default Dao;
