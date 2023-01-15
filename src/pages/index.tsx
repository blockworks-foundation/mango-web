import HomeHero from '@/components/HomeHero';
import Nav from '@/components/Nav';
// import DesktopSectionTwo from '@/components/DesktopSectionTwo'
import DesktopSectionOne from '@/components/DesktopSectionOne';
import PhoneSectionOne from '@/components/PhoneSectionOne';
import PhoneSectionGrid from '@/components/PhoneSectionGrid';
import Footer from '@/components/Footer';
import PhoneSectionTab from '@/components/PhoneSectionTab';
import SectionCta from '@/components/SectionCta';
import DesktopHero from '@/components/DesktopHero';


const Index = () => {
  return (
    <div
      className={"debug-screens w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2"}
    >
      <Nav />
      <HomeHero />
      <PhoneSectionOne />
      <PhoneSectionGrid />
      <PhoneSectionTab />
      <DesktopHero />
      <DesktopSectionOne />
      <SectionCta />
      <Footer />

    </div>
  );
};

export default Index;
