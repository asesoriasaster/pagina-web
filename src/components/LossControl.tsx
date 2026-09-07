import { Eye, ShieldCheck } from 'lucide-react';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

export default function LossControl() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-aster-greenSoft px-4 py-2 text-sm font-bold text-aster-green sm:px-5 sm:text-base">
              <ShieldCheck size={19} className="shrink-0" />
              <span className="truncate sm:whitespace-normal">
                Control y prevención de pérdidas
              </span>
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="mt-7 max-w-5xl text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-aster-black">
              Las pérdidas pequeñas también se acumulan.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-6xl text-base leading-relaxed text-aster-gray sm:text-lg lg:text-xl">
              Robo hormiga, diferencias de inventario, pérdidas internas,
              errores, productos sin registrar, diferencias de caja o
              productos vencidos pueden parecer pequeños por separado, pero
              se acumulan con el tiempo.
            </p>
          </Reveal>

          {/*
            Se eliminaron los botones/pastillas grises.
            El texto superior ya comunica esos conceptos sin repetirlos.
          */}

          <Reveal delay={140}>
            <div className="mt-9 grid gap-4 rounded-[24px] border border-aster-green/15 bg-aster-greenSoft/55 p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:p-6 lg:mt-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-aster-green shadow-sm">
                <Eye size={22} />
              </span>

              <div className="min-w-0">
                <h3 className="text-xl font-extrabold leading-tight text-aster-black sm:text-2xl">
                  Más trazabilidad. Menos espacios ciegos.
                </h3>

                <p className="mt-2 max-w-4xl text-sm leading-relaxed text-aster-gray sm:text-base">
                  Aster ayuda a mantener registro de movimientos relevantes
                  para que puedas detectar diferencias y entender mejor qué
                  ocurrió en tu operación.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
