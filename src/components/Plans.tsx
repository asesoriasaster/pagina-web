import {
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

type Plan = {
  name: string;
  badge?: string;
  featured?: boolean;
  description: string;
  price: string;
  note?: string;
  points: string[];
};

const plans: Plan[] = [
  {
    name: 'Aster Inicia',
    badge: 'Entrada',
    description:
      'Para comenzar a ordenar ventas, inventario y operación.',
    price: '$29.990 / mes',
    note: '15 días de prueba',
    points: [
      'Inventario y ventas',
      'Contactos y control',
    ],
  },
  {
    name: 'CRM Avanzado',
    badge: 'Recomendado',
    featured: true,
    description:
      'Mayor control operativo y una visión comercial más profunda.',
    price: 'Personalizado',
    note: 'Según alcance y objetivos',
    points: [
      'Diagnóstico comercial',
      'Gestión y seguimiento',
    ],
  },
  {
    name: 'Aster Pro',
    description:
      'Estrategia comercial y herramientas para impulsar el negocio.',
    price: 'Personalizado',
    note: 'Según etapa del negocio',
    points: [
      'Estrategia comercial',
      'Marketing y crecimiento',
    ],
  },
  {
    name: 'Aster Integral',
    description:
      'Tecnología, estrategia y acompañamiento continuo.',
    price: 'Personalizado',
    note: 'Según necesidades',
    points: [
      'Gestión continua',
      'Visión integral',
    ],
  },
];

export default function Plans() {
  return (
    <section
      id="planes"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(1.9rem,3.8vw,3.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-aster-black">
            Planes para cada etapa de tu negocio.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-aster-gray sm:text-base">
            Compara lo esencial y conversemos para definir la alternativa adecuada.
          </p>
        </div>

        {/*
          IMPORTANTE:
          desde el ancho más angosto mostramos dos columnas.
          En escritorio pasan a cuatro.
        */}
        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={(index % 4) * 35}
            >
              <article
                className={`relative flex h-full min-w-0 flex-col rounded-[18px] border p-3.5 sm:rounded-[20px] sm:p-4 lg:p-5 ${
                  plan.featured
                    ? 'border-aster-green bg-aster-greenSoft/55 shadow-card'
                    : 'border-aster-green/15 bg-[#f8fbf4]'
                }`}
              >
                {plan.badge && (
                  <span
                    className={`inline-flex w-fit max-w-full items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.09em] sm:text-[10px] ${
                      plan.featured
                        ? 'bg-aster-green text-white'
                        : 'bg-aster-green text-white'
                    }`}
                  >
                    {plan.featured && <Sparkles size={10} />}
                    {plan.badge}
                  </span>
                )}

                <h3 className="mt-3 break-words text-lg font-extrabold leading-tight text-aster-black sm:text-xl lg:text-[1.45rem]">
                  {plan.name}
                </h3>

                <p className="mt-2 text-[11px] leading-relaxed text-aster-gray sm:text-xs lg:text-sm">
                  {plan.description}
                </p>

                <div className="mt-3 rounded-[14px] bg-white p-3 sm:p-3.5">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-aster-green sm:text-[10px]">
                    Resumen
                  </p>

                  <p className="mt-1.5 break-words text-lg font-extrabold leading-tight text-aster-black sm:text-xl lg:text-[1.45rem]">
                    {plan.price}
                  </p>

                  {plan.note && (
                    <p className="mt-1.5 text-[10px] leading-snug text-aster-gray sm:text-[11px]">
                      {plan.note}
                    </p>
                  )}

                  <ul className="mt-3 space-y-1.5">
                    {plan.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-1.5 text-[10px] font-medium leading-snug text-aster-black sm:text-[11px] lg:text-xs"
                      >
                        <CheckCircle2
                          size={13}
                          className="mt-px shrink-0 text-aster-green"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contacto"
                  className={`mt-3 inline-flex w-full items-center justify-center rounded-full px-3 py-2.5 text-center text-[10px] font-bold transition-colors sm:text-xs ${
                    plan.featured
                      ? 'bg-aster-green text-white hover:bg-aster-greenDark'
                      : 'border border-aster-green/25 bg-white text-aster-green hover:bg-aster-greenSoft'
                  }`}
                >
                  Conocer más
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
