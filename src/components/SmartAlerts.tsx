import {
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

const alerts = [
  {
    text: 'Stock crítico: producto con 2 unidades',
    positive: false,
  },
  {
    text: '6 productos próximos a vencer',
    positive: false,
  },
  {
    text: 'Diferencia detectada en cierre de caja',
    positive: false,
  },
  {
    text: 'Ajuste manual de 18 unidades',
    positive: false,
  },
  {
    text: 'Ventas 17% bajo el promedio',
    positive: false,
  },
  {
    text: 'Meta diaria alcanzada',
    positive: true,
  },
];

export default function SmartAlerts() {
  return (
    <section className="overflow-hidden bg-aster-soft py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-aster-green">
                Alertas Aster
              </p>

              <h2 className="mt-4 text-[clamp(2rem,4.8vw,4rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-aster-black">
                No tienes que revisar todo para saber qué necesita tu atención.
              </h2>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            {alerts.map((alert, index) => (
              <Reveal
                key={alert.text}
                delay={(index % 2) * 60}
              >
                <div className="flex min-h-[92px] min-w-0 items-center gap-4 rounded-[22px] bg-white p-4 shadow-card sm:min-h-[104px] sm:p-5 lg:px-6">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${
                      alert.positive
                        ? 'bg-aster-greenSoft text-aster-green'
                        : 'bg-red-50 text-red-500'
                    }`}
                  >
                    {alert.positive ? (
                      <CheckCircle2 size={22} />
                    ) : (
                      <AlertTriangle size={22} />
                    )}
                  </span>

                  <p className="min-w-0 break-words text-base font-bold leading-snug text-aster-black sm:text-lg">
                    {alert.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mx-auto mt-9 max-w-4xl text-center sm:mt-10">
              <p className="text-xl font-extrabold leading-snug text-aster-black sm:text-2xl">
                Aster App no solo te muestra información.
                <span className="text-aster-green">
                  {' '}Te ayuda a identificar qué merece tu atención.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
