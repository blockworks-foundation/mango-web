import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import DesktopHero from '@/components/DesktopHero';
import HomeCtaFour from '@/components/SectionCta';

const Markets = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <Nav />
         <DesktopHero />
         <HomeCtaFour />
      <Footer />

    </div>
  );
};

export default Markets;
