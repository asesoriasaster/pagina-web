import {
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Store,
  TrendingUp,
  Users,
} from 'lucide-react';

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function TwoAreas() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Dos realidades. Un mismo objetivo: tomar mejores decisiones."
          subtitle="ASTER adapta tecnología, gestión y asesoría al tamaño y complejidad de cada operación."
        />

        <Reveal delay={80}>
          <div
            className="relative mt-12 overflow-hidden rounded-[32px] bg-cover bg-center shadow-cardHover"
            style={{
              backgroundImage:
                "url('/assets/images/4.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            <div className="relative grid min-h-[580px] lg:grid-cols-2">
              <div className="flex items-end border-b border-white/25 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div className="w-full max-w-xl rounded-[28px] border border-white/35 bg-black/10 p-7 text-white shadow-xl sm:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-aster-green shadow-sm">
                      <Store size={21} />
                    </span>

                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                      ASTER para Pymes
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold leading-tight drop-shadow-md sm:text-[2.15rem]">
                    Ordena, controla y haz crecer tu negocio.
                  </h3>

                  <p className="mt-4 max-w-lg text-[15px] font-medium leading-relaxed text-white drop-shadow-sm sm:text-base">
                    Para comercios y negocios que necesitan
                    tener ventas, inventario, clientes y
                    gestión bajo control sin complicar su
                    operación.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Tag
                      icon={<Boxes size={14} />}
                      label="Inventario"
                    />

                    <Tag
                      icon={<TrendingUp size={14} />}
                      label="Ventas"
                    />

                    <Tag
                      icon={<Users size={14} />}
                      label="Clientes"
                    />

                    <Tag
                      icon={<Store size={14} />}
                      label="Operación diaria"
                    />
                  </div>

                  <a
                    href="#comercio"
                    className="mt-7 inline-flex items-center justify-center rounded-full bg-aster-green px-6 py-3 text-[14px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-aster-greenDark hover:shadow-lg"
                  >
                    Conocer Aster para Pymes
                  </a>
                </div>
              </div>

              <div className="flex items-end p-7 sm:p-10 lg:p-12">
                <div className="w-full max-w-xl rounded-[28px] border border-white/35 bg-black/10 p-7 text-white shadow-xl sm:p-9">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-aster-green shadow-sm">
                      <BriefcaseBusiness size={21} />
                    </span>

                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                      ASTER para Empresas
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold leading-tight drop-shadow-md sm:text-[2.15rem]">
                    Más control para operaciones que necesitan escalar.
                  </h3>

                  <p className="mt-4 max-w-lg text-[15px] font-medium leading-relaxed text-white drop-shadow-sm sm:text-base">
                    Para empresas y equipos que necesitan
                    controlar procesos, indicadores,
                    operaciones y oportunidades con una
                    visión más amplia del negocio.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Tag
                      icon={<BarChart3 size={14} />}
                      label="Indicadores"
                    />

                    <Tag
                      icon={<BriefcaseBusiness size={14} />}
                      label="Operaciones"
                    />

                    <Tag
                      icon={<Boxes size={14} />}
                      label="Procesos"
                    />

                    <Tag
                      icon={<TrendingUp size={14} />}
                      label="Estrategia"
                    />
                  </div>

                  <a
                    href="#empresas"
                    className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-bold text-aster-black shadow-sm transition-all duration-200 hover:bg-aster-green hover:text-white hover:shadow-lg"
                  >
                    Conocer Aster para Empresas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-medium leading-relaxed text-aster-gray">
            Desde un negocio que necesita ordenar su
            operación diaria hasta una empresa que requiere
            mayor control y capacidad de gestión: ASTER
            adapta sus soluciones a cada realidad.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function Tag({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-black/10 px-3 py-2 text-xs font-semibold text-white">
      {icon}
      {label}
    </span>
  );
}