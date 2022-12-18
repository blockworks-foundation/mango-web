import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import FeaturesOne from '@/components/FeaturesOne'

const Index = () => {
  return (
    <div
      className={`h-full w-screen overflow-hidden bg-mango-bkg-1 transition-all`}
    >
      <div className="h-2 w-screen bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <Nav />
      <Hero />
      <FeaturesOne />
    </div>
  );
};

export default Index;
