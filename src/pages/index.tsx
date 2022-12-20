import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import FeaturesOne from '@/components/FeaturesOne'
import FeaturesTwo from '@/components/FeaturesTwo';
import ProductTwo from '@/components/ProductTwo';

const Index = () => {
  return (
    <div
      className={"h-full w-screen overflow-hidden bg-gradient-to-t from-mango-bkg-5 to-mango-bkg-1 transition-all"}
    >
      <Nav />
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <ProductTwo />
    </div>
  );
};

export default Index;
