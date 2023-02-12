import Footer from '@/components/Footer';
import DaoHero from '@/components/DaoHero';
import DaoFeatureGrid from '@/components/DaoFeatureGrid';
import CallToActionCard from '@/components/CallToActionCard';

const Dao = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
         <DaoHero />
         <DaoFeatureGrid />
         <CallToActionCard />
         <Footer />

    </div>
  );
};

export default Dao;
