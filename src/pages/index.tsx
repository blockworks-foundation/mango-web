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
      className={"h-auto w-screen overflow-hidden bg-gradient-to-t from-mango-bkg-5 to-mango-bkg-1 transition-all"}
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
