import { ArrowRight, Gift, Megaphone, PackageSearch, Percent } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const flows = [
  { icon: PackageSearch, from: 'Mucho stock + pocas ventas', to: 'Crear promoción' },
  { icon: Percent, from: 'Producto próximo a vencer', to: 'Aplicar descuento' },
  { icon: Gift, from: 'Cliente frecuente', to: 'Entregar beneficio' },
  { icon: Megaphone, from: 'Cliente inactivo', to: 'Crear campaña' },
];

export default function DataToAction() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <Container>
        <SectionHeading title="Convierte información en oportunidades." />

        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {flows.map((flow, i) => {
            const FlowIcon = flow.icon;
            return (
              <Reveal key={flow.from} delay={(i % 2) * 120}>
                <div className="flex items-center gap-4 rounded-2xl bg-aster-soft p-6 shadow-card hover:shadow-cardHover transition-shadow duration-300">
                  <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white text-aster-green shadow-sm shrink-0">
                    <FlowIcon size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-aster-gray">{flow.from}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <ArrowRight size={16} className="text-aster-green shrink-0" />
                      <p className="text-[17px] font-extrabold text-aster-black">{flow.to}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
