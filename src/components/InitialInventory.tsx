import { Boxes, Calendar, CircleDollarSign, PackageCheck } from 'lucide-react';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

const fields = [
  'Productos',
  'Códigos',
  'Cantidades',
  'Categorías',
  'Costos',
  'Precios',
  'Proveedores',
  'Vencimientos',
  'Stock mínimo',
];

export default function InitialInventory() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-tight text-aster-black">
              Nosotros podemos hacer el trabajo pesado.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-aster-gray leading-relaxed">
              Aster puede realizar físicamente el levantamiento inicial del inventario para que el sistema comience con información confiable.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-6">
              {fields.map((field) => (
                <span key={field} className="rounded-full bg-aster-soft border border-gray-200 text-aster-black text-sm font-medium px-4 py-2">
                  {field}
                </span>
              ))}
            </div>

            <p className="mt-8 text-xl sm:text-2xl font-extrabold text-aster-black leading-snug">
              Cuando abras Aster por primera vez, queremos que tu negocio ya esté dentro.
            </p>

            <p className="mt-5 text-sm text-aster-gray leading-relaxed">
              Este servicio es opcional y se cotiza según cada operación, pero es altamente recomendado para partir con el pie derecho.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-[26px] bg-aster-greenSoft p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-aster-green mb-6">Ejemplo ilustrativo</p>
              <div className="grid grid-cols-2 gap-4">
                <ExampleStat icon={<PackageCheck size={18} />} label="Productos registrados" value="426" />
                <ExampleStat icon={<Boxes size={18} />} label="Unidades contabilizadas" value="1.843" />
                <ExampleStat icon={<CircleDollarSign size={18} />} label="En inventario" value="$7.480.000" />
                <ExampleStat icon={<Calendar size={18} />} label="Próximos a vencer" value="12 productos" />
              </div>
              <p className="mt-6 text-xs text-aster-gray leading-relaxed">
                * Datos ilustrativos con fines de ejemplo. No corresponden a resultados de un cliente real.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ExampleStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-center gap-1.5 text-aster-green">{icon}</div>
      <p className="mt-2 text-lg font-extrabold text-aster-black">{value}</p>
      <p className="text-xs font-medium text-aster-gray mt-0.5">{label}</p>
    </div>
  );
}
