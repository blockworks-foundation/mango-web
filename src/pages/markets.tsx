import Footer from '@/components/Footer';
import DesktopHero from '@/components/DesktopHero';
import NavvyAlpha from '@/components/NavvyAlpha';
import DesktopFeatureGridTwo from '@/components/DesktopFeatureGridTwo';
import DesktopFeaturesTabs from '@/components/DesktopFeaturesTabs';
import CallToActionCard from '@/components/CallToActionCard';
import SectionCta from '@/components/SectionCta';

const Markets = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <NavvyAlpha />
         <DesktopHero />
         <DesktopFeatureGridTwo />
         <DesktopFeaturesTabs />
         <SectionCta />
         <CallToActionCard />
      <Footer />

    </div>
  );
};

export default Markets;
