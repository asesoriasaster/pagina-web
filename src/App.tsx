import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TwoAreas from '@/components/TwoAreas';
import PainPoints from '@/components/PainPoints';
import AppModules from '@/components/AppModules';
import LossControl from '@/components/LossControl';
import SmartAlerts from '@/components/SmartAlerts';
import DataToAction from '@/components/DataToAction';
import Implementation from '@/components/Implementation';
import InitialInventory from '@/components/InitialInventory';
import Plans from '@/components/Plans';
import Empresas from '@/components/Empresas';
import Aster360 from '@/components/Aster360';
import Descargas from '@/components/Descargas';
import Cursos from '@/components/Cursos';
import PaginasWeb from '@/components/PaginasWeb';
import Methodology from '@/components/Methodology';
import Postventa from '@/components/Postventa';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TwoAreas />
        <PainPoints />
        <AppModules />
        <LossControl />
        <SmartAlerts />
        <DataToAction />
        <Implementation />
        <InitialInventory />
        <Plans />
        <Empresas />
        <Aster360 />
        <Descargas />
        <Cursos />
        <PaginasWeb />
        <Methodology />
        <Postventa />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
