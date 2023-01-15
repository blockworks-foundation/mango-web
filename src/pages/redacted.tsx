import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HomeCtaFour from '@/components/SectionCta';
import PhoneHero from '@/components/PhoneHero';

const Mobile = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <Nav />
        <PhoneHero />
         <HomeCtaFour />
      <Footer />

    </div>
  );
};

export default Mobile;
