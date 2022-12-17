import Hero from '@/components/Hero';
import Nav from '@/components/Nav';

const Index = () => {
  return (
    <div
      className={`h-screen w-screen overflow-hidden bg-mango-bkg-1 transition-all`}
    >
      <div className="h-2 w-screen bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green"></div>
      <Nav />
      <Hero />
    </div>
  );
};

export default Index;
