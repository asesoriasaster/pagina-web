import { AlertTriangle, BarChart3, Boxes, ScanBarcode, TrendingUp, Users } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import EditorialImage from '@/components/EditorialImage';

export default function TwoAreas() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          title="Dos realidades. Un mismo objetivo: tomar mejores decisiones."
          subtitle="Aster adapta sus soluciones a la realidad de cada operación."
        />

        <Reveal delay={80}>
          <EditorialImage
            src="/assets/images/4.jpg"
            alt="Propietario tranquilo mientras su negocio continúa funcionando"
            title={<>Que el negocio funcione no debería depender de que estés mirando todo.</>}
            subtitle={<>Información clara. <strong>Más confianza para delegar.</strong></>}
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-7 mt-16">
          <Reveal delay={0}>
            <div className="h-full rounded-[28px] bg-aster-greenSoft border border-aster-green/15 p-10 sm:p-12 flex flex-col shadow-card hover:shadow-cardHover transition-shadow duration-300">
              <span className="inline-block w-fit text-sm font-bold tracking-wide text-aster-green uppercase bg-white rounded-full px-4 py-2 mb-7">
                Aster Comercio para Pymes
              </span>
              <h3 className="text-2xl sm:text-[1.8rem] font-extrabold leading-tight text-aster-black">
                Tu operación visible, incluso cuando no estás ahí.
              </h3>
              <p className="mt-4 text-base text-aster-gray leading-relaxed">
                Para almacenes, minimarkets, botillerías, panaderías, barberías, restaurantes, cafeterías, ferreterías, tiendas y otros comercios.
              </p>
              <p className="mt-3 text-base font-semibold text-aster-black">
                Aplicación + implementación + equipamiento + capacitación + soporte.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-7">
                <MiniStat icon={<Boxes size={16} />} label="Inventario" value="326 SKU" />
                <MiniStat icon={<TrendingUp size={16} />} label="Ventas" value="$847.300" />
                <MiniStat icon={<ScanBarcode size={16} />} label="Código de barras" value="Activo" />
                <MiniStat icon={<AlertTriangle size={16} />} label="Alertas" value="4" tone="red" />
              </div>

              <a
                href="#comercio"
                className="mt-8 inline-flex items-center justify-center w-fit rounded-full bg-aster-green px-6 py-3 text-[15px] font-semibold text-white hover:bg-aster-greenDark transition-colors duration-200"
              >
                Conocer Aster Comercio para Pymes
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-[28px] bg-aster-soft border border-gray-200/60 p-10 sm:p-12 flex flex-col shadow-card hover:shadow-cardHover transition-shadow duration-300">
              <span className="inline-block w-fit text-sm font-bold tracking-wide text-aster-black uppercase bg-white rounded-full px-4 py-2 mb-7">
                Empresas &amp; Operaciones
              </span>
              <h3 className="text-2xl sm:text-[1.8rem] font-extrabold leading-tight text-aster-black">
                Decisiones más claras para operaciones más complejas.
              </h3>
              <p className="mt-4 text-base text-aster-gray leading-relaxed">
                Para empresas, pymes consolidadas, equipos, sucursales y organizaciones que necesitan mejorar administración, procesos, ventas, operaciones, datos o personas.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-7">
                <MiniStat icon={<BarChart3 size={16} />} label="KPI" value="Panel en vivo" />
                <MiniStat icon={<Users size={16} />} label="CRM" value="Clientes" />
                <MiniStat icon={<Boxes size={16} />} label="Procesos" value="Estandarizados" />
                <MiniStat icon={<TrendingUp size={16} />} label="Automatización" value="Activa" />
              </div>

              <a
                href="#empresas"
                className="mt-8 inline-flex items-center justify-center w-fit rounded-full bg-aster-black px-6 py-3 text-[15px] font-semibold text-white hover:bg-black transition-colors duration-200"
              >
                Ver soluciones para empresas
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function MiniStat({
  icon,
  label,
  value,
  tone = 'green',
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone?: 'green' | 'red';
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${tone === 'red' ? 'text-aster-red' : 'text-aster-green'}`}>
        {icon}
        {label}
      </div>
      <p className="mt-1.5 text-base font-bold text-aster-black">{value}</p>
    </div>
  );
}
