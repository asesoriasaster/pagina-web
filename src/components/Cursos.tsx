import { Construction, GraduationCap } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function Cursos() {
  return (
    <section id="cursos" className="py-24 sm:py-28 bg-white scroll-mt-20">
      <Container>
        <SectionHeading title="Cursos y capacitaciones" />

        <Reveal delay={100}>
          <div className="mt-14 max-w-2xl mx-auto">
            <div className="rounded-[28px] bg-aster-soft border border-gray-200/70 p-10 sm:p-14 text-center shadow-card">
              <span className="inline-flex items-center justify-center h-16 w-16 rounded-3xl bg-aster-greenSoft text-aster-green mb-6">
                <Construction size={30} />
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-aster-black tracking-tight">
                En construcción
              </p>
              <p className="mt-5 text-base sm:text-lg text-aster-gray leading-relaxed max-w-lg mx-auto">
                Próximamente encontrarás aquí cursos y capacitaciones en video para ayudarte a implementar, comprender y aprovechar mejor las herramientas de Aster.
              </p>
              <span className="inline-flex items-center gap-2 mt-7 rounded-full bg-aster-green text-white text-sm font-semibold px-5 py-2.5">
                <GraduationCap size={16} /> Contenido de pago · Próximamente disponible
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
