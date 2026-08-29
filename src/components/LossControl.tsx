import { Ban, Edit3, ShoppingCart, Tag, Trash2, Wallet } from 'lucide-react';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

const events = [
  { time: '15:32', action: 'Venta registrada', user: 'Vendedor 1', icon: ShoppingCart },
  { time: '15:48', action: 'Descuento aplicado', user: 'Vendedor 2', icon: Tag },
  { time: '16:03', action: 'Ajuste de inventario', user: 'Administrador', icon: Edit3 },
  { time: '16:18', action: 'Producto eliminado', user: 'Vendedor 1', icon: Trash2 },
  { time: '17:12', action: 'Salida de caja', user: 'Administrador', icon: Wallet },
];

const causes = [
  'Robo hormiga',
  'Diferencias de inventario',
  'Pérdidas internas',
  'Errores de registro',
  'Productos sin registrar',
  'Diferencias de caja',
  'Productos vencidos',
];

export default function LossControl() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-aster-greenSoft text-aster-green text-sm font-semibold px-4 py-1.5 mb-6">
              <Ban size={14} /> Control y prevención de pérdidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-tight text-aster-black">
              Las pérdidas pequeñas también se acumulan.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-aster-gray leading-relaxed">
              Robo hormiga, diferencias de inventario, pérdidas internas, errores, productos sin registrar, diferencias de caja o productos vencidos: por separado parecen pequeños, pero se acumulan con el tiempo.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-6">
              {causes.map((cause) => (
                <span key={cause} className="rounded-full bg-aster-soft border border-gray-200 text-aster-black text-sm font-medium px-4 py-2">
                  {cause}
                </span>
              ))}
            </div>

            <p className="mt-8 text-2xl sm:text-[1.7rem] font-extrabold text-aster-green leading-snug">
              Más trazabilidad. Menos espacios ciegos.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-[26px] bg-aster-soft border border-gray-200/70 p-6 sm:p-8 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-aster-gray mb-5">Historial de movimientos</p>
              <ol className="relative border-l border-gray-300 ml-3">
                {events.map((event, i) => {
                  const EventIcon = event.icon;
                  return (
                    <li key={i} className="mb-7 last:mb-0 ml-6">
                      <span className="absolute -left-[19px] flex items-center justify-center h-9 w-9 rounded-full bg-aster-greenSoft text-aster-green ring-4 ring-aster-soft">
                        <EventIcon size={16} />
                      </span>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[15px] font-semibold text-aster-black">{event.action}</p>
                        <span className="text-xs font-medium text-aster-gray shrink-0">{event.time}</span>
                      </div>
                      <p className="text-sm text-aster-gray mt-0.5">{event.user}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
