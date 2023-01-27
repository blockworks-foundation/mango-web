import Footer from '@/components/Footer';
import EarnHero from '@/components/EarnHero';
import NavvyAlpha from '@/components/NavvyAlpha';
import EarnFeaturesGrid from '@/components/EarnFeaturesGrid';
import CallToActionCard from '@/components/CallToActionCard';

const Earn = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <NavvyAlpha />
         <EarnHero />
         <EarnFeaturesGrid />
         <CallToActionCard />
      <Footer />

    </div>
  );
};

export default Earn;
