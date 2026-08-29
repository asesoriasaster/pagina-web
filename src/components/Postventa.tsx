import { CheckCircle2, Circle } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const statuses = [
  { label: 'Recibido', active: true, done: true },
  { label: 'En revisión', active: true, done: true },
  { label: 'En proceso', active: true, done: false },
  { label: 'Solucionado', active: false, done: false },
];

const categories = ['App', 'POS', 'Lectores', 'Inventario', 'Usuarios', 'Configuración', 'Reportes', 'Equipamiento'];

export default function Postventa() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <SectionHeading
              title="No desaparecemos después de implementar."
              align="left"
            />
            <p className="mt-5 text-base sm:text-lg text-aster-gray leading-relaxed">
              El soporte de Aster acompaña a tu operación en el día a día. Cada solicitud queda registrada y con seguimiento visible.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-6">
              {categories.map((cat) => (
                <span key={cat} className="rounded-full bg-aster-soft border border-gray-200 text-aster-black text-sm font-medium px-4 py-2">
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-[26px] bg-aster-soft border border-gray-200/70 p-8 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-aster-black">Ticket</span>
                <span className="rounded-full bg-aster-black text-white text-sm font-bold px-4 py-1.5">AST-000348</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-aster-gray mb-4">Estado</p>
              <div className="space-y-4">
                {statuses.map((status) => (
                  <div key={status.label} className="flex items-center gap-3">
                    {status.done ? (
                      <CheckCircle2 size={22} className="text-aster-green shrink-0" />
                    ) : (
                      <Circle size={22} className={status.active ? 'text-aster-green shrink-0' : 'text-gray-300 shrink-0'} />
                    )}
                    <span className={`text-[15px] font-semibold ${status.done || status.active ? 'text-aster-black' : 'text-gray-400'}`}>
                      {status.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
