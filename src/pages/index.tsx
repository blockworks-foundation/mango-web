import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import FeaturesOne from '@/components/FeaturesOne'
import FeaturesTwo from '@/components/FeaturesTwo';
import ProductTwo from '@/components/ProductTwo';
import FeaturesPhoneGrid from '@/components/FeaturesPhontGrid';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-t from-th-bkg-2 to-th-bkg-1"}
    >
      <Nav />
      <Hero />
      <FeaturesTwo />
      <FeaturesOne />
      <ProductTwo />
      <FeaturesPhoneGrid />
      <Footer />
    </div>
  );
};

export default Index;
