import { HelpCircle } from 'lucide-react';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

const questions = [
  '¿Sabes exactamente cuánto stock tienes?',
  '¿Puedes revisar ventas sin llamar al local?',
  '¿Descubres pérdidas cuando ya ocurrieron?',
  '¿Tienes trazabilidad de caja y movimientos?',
  '¿Identificas productos detenidos o por vencer?',
  '¿Puedes ausentarte sin perder visibilidad?',
];

export default function PainPoints() {
  return (
    <section
      id="comercio"
      className="bg-aster-soft py-12 sm:py-14 lg:py-16"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-[clamp(1.9rem,4vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-aster-black">
              ¿Tu negocio puede funcionar sin que estés encima todo el día?
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-aster-gray sm:text-base lg:text-lg">
              Aster App centraliza información clave para que tengas más
              control y menos puntos ciegos.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6 overflow-hidden rounded-[26px] shadow-card">
            <img
              src="/assets/images/aster-comercio-360.png"
              alt="Dueña de negocio mostrando Aster App con el mensaje Tu negocio, bajo control"
              className="block h-auto w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <div className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-3">
          {questions.map((question, index) => (
            <Reveal
              key={question}
              delay={(index % 3) * 35}
            >
              <div className="flex h-full min-h-[70px] items-start gap-2.5 rounded-[16px] bg-white p-3.5 shadow-sm sm:min-h-[76px] sm:p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aster-greenSoft text-aster-green">
                  <HelpCircle size={14} />
                </span>

                <p className="text-[12px] font-semibold leading-snug text-aster-black sm:text-sm">
                  {question}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-5 text-center text-base font-extrabold text-aster-black sm:text-lg">
            Aster Comercio fue creado para resolver eso.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
