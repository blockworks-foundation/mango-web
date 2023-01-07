import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import FeaturesOne from '@/components/FeaturesOne'
import FeaturesTwo from '@/components/FeaturesTwo';
import ProductTwo from '@/components/ProductTwo';
import PhoneFeatureGrid from '@/components/PhoneFeatureGrid';
import Footer from '@/components/Footer';
import PhoneFeaturesTabs from '@/components/PhoneFeaturesTab';


const Index = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <Nav />
      <Hero />
      <FeaturesTwo />
      <FeaturesOne />
      <ProductTwo />
      <PhoneFeatureGrid />
      <PhoneFeaturesTabs />
      <Footer />
    </div>
  );
};

export default Index;
