import { ArrowRight } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const steps = ['Diagnóstico', 'Estrategia', 'Solución', 'Implementación', 'Capacitación', 'Soporte', 'Mejora'];

export default function Methodology() {
  return (
    <section className="py-24 sm:py-28 bg-aster-soft">
      <Container>
        <SectionHeading title="No nos limitamos a decirte qué hacer." />

        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-2xl bg-white shadow-card px-5 py-3 text-[15px] font-bold text-aster-black">
                  {step}
                </span>
                {i < steps.length - 1 && <ArrowRight size={18} className="text-aster-green" />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-14 text-center text-2xl sm:text-3xl font-extrabold text-aster-black max-w-3xl mx-auto leading-snug">
            Convertimos recomendaciones en soluciones funcionando.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
