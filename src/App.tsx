import { visualPreview } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import AppModules from '@/components/AppModules';
import LossControl from '@/components/LossControl';
import SmartAlerts from '@/components/SmartAlerts';
import InitialInventory from '@/components/InitialInventory';
import Plans from '@/components/Plans';
import Empresas from '@/components/Empresas';
import Cursos from '@/components/Cursos';
import PaginasWeb from '@/components/PaginasWeb';
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
        <PainPoints />
        <AppModules />
        <LossControl />
        <SmartAlerts />
        <InitialInventory />
        <Plans />
        <Empresas />
        <Cursos />
        <PaginasWeb />
        <Postventa />
        <About />
        <Contact />
      </main>
      <Footer />
      {visualPreview && (
        <div role="status" className="pointer-events-none fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-md rounded-xl bg-aster-black px-4 py-2 text-center text-sm text-white shadow-lg">
          Vista previa local · Formularios y acceso sin conexión
        </div>
      )}
    </div>
  );
}

export default App;
