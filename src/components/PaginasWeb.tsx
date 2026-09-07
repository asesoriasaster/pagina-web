import {
  Globe,
  Megaphone,
  ShoppingCart,
} from 'lucide-react';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

const services = [
  {
    icon: Globe,
    name: 'Web corporativa',
    price: '$105.000',
    note: 'Hosting y dominio',
    description:
      'Presenta tu negocio, servicios y canales de contacto de forma profesional.',
  },
  {
    icon: ShoppingCart,
    name: 'Web con carrito',
    price: '$120.000',
    note: 'Hosting y dominio',
    description:
      'Muestra productos y habilita una experiencia de compra online.',
  },
  {
    icon: Megaphone,
    name: 'Estrategia RRSS',
    price: '$300.000',
    note: 'Plan comercial',
    description:
      'Ordena contenido, difusión y presencia digital para conectar con clientes.',
  },
];

export default function PaginasWeb() {
  return (
    <section
      id="otros-servicios"
      className="bg-aster-soft py-12 sm:py-14 lg:py-16"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-aster-green sm:text-xs">
            Otros servicios
          </p>

          <h2 className="mt-2 text-[clamp(1.85rem,3.7vw,3.25rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-aster-black">
            Servicios para complementar Aster.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-aster-gray sm:text-base">
            Soluciones concretas para fortalecer presencia y gestión comercial.
          </p>
        </div>

        <div className="mt-7 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.name}
                delay={(index % 3) * 40}
              >
                <article className="flex h-full items-start gap-3 rounded-[18px] bg-white p-4 shadow-sm sm:block sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-aster-greenSoft text-aster-green sm:h-11 sm:w-11">
                    <Icon size={20} />
                  </span>

                  <div className="min-w-0 flex-1 sm:mt-3">
                    <h3 className="text-base font-extrabold leading-tight text-aster-black sm:text-lg">
                      {service.name}
                    </h3>

                    <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                      <p className="text-xl font-extrabold text-aster-black sm:text-2xl">
                        {service.price}
                      </p>

                      <span className="text-[10px] font-semibold text-aster-gray sm:text-xs">
                        IVA incluido
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] font-bold text-aster-green sm:text-xs">
                      {service.note}
                    </p>

                    <p className="mt-2 text-[11px] leading-relaxed text-aster-gray sm:text-xs lg:text-sm">
                      {service.description}
                    </p>

                    <a
                      href="#contacto"
                      className="mt-3 inline-flex items-center text-[11px] font-bold text-aster-green hover:text-aster-greenDark sm:text-xs"
                    >
                      Cotizar / conocer más →
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
