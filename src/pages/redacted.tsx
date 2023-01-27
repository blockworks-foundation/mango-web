import Footer from '@/components/Footer';
import PhoneHero from '@/components/PhoneHero';
import NavvyAlpha from '@/components/NavvyAlpha';
import PhoneSectionGrid from '@/components/PhoneSectionGrid';
import PhoneSectionTab from '@/components/PhoneSectionTab';
import CallToActionCard from '@/components/CallToActionCard';

const Mobile = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <NavvyAlpha />
        <PhoneHero />
        <PhoneSectionGrid />
        <PhoneSectionTab />
        <CallToActionCard />

      <Footer />

    </div>
  );
};

export default Mobile;
