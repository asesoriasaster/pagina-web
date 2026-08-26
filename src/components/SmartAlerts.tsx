import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const alerts = [
  { text: 'Stock crítico: Coca-Cola 1,5 L', tone: 'red' as const },
  { text: '6 productos próximos a vencer', tone: 'red' as const },
  { text: 'Diferencia detectada en cierre de caja', tone: 'red' as const },
  { text: 'Ajuste manual de 18 unidades', tone: 'red' as const },
  { text: 'Ventas 17% bajo el promedio', tone: 'red' as const },
  { text: 'Meta diaria alcanzada', tone: 'green' as const },
];

export default function SmartAlerts() {
  return (
    <section className="py-24 sm:py-28 bg-aster-soft">
      <Container>
        <SectionHeading title="No tienes que revisar todo para saber qué necesita tu atención." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto">
          {alerts.map((alert, i) => (
            <Reveal key={alert.text} delay={(i % 3) * 100}>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300">
                <span
                  className={`flex items-center justify-center h-9 w-9 rounded-full shrink-0 ${
                    alert.tone === 'red' ? 'bg-red-50 text-aster-red' : 'bg-aster-greenSoft text-aster-green'
                  }`}
                >
                  {alert.tone === 'red' ? <AlertTriangle size={17} /> : <CheckCircle2 size={17} />}
                </span>
                <p className="text-[15px] font-semibold text-aster-black leading-snug pt-1.5">{alert.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-14 text-center text-lg sm:text-xl font-semibold text-aster-black max-w-2xl mx-auto leading-relaxed">
            Aster no solo muestra información. Te ayuda a identificar qué merece tu atención.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
