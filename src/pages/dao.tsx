import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import DaoHero from '@/components/DaoHero';

const Index = () => {
  return (
    <div
      className={"debug-screens h-auto w-screen overflow-hidden bg-gradient-to-b from-th-bkg-1 to-th-bkg-2 "}
    >
      <Nav />
         <DaoHero />
      <Footer />

    </div>
  );
};

export default Index;
