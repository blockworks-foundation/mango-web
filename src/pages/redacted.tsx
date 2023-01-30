import Footer from '@/components/Footer';
import PhoneHero from '@/components/PhoneHero';
import PhoneSectionGrid from '@/components/PhoneSectionGrid';
import PhoneSectionTab from '@/components/PhoneSectionTab';
import CallToActionCard from '@/components/CallToActionCard';
import SectionCta from '@/components/SectionCta';

const Mobile = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
        <PhoneHero />
        <PhoneSectionGrid />
        <PhoneSectionTab />
        <SectionCta />
        <CallToActionCard />
        <Footer />

    </div>
  );
};

export default Mobile;
