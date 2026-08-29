import { Globe, ShoppingCart } from 'lucide-react';

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface WebPlan {
  icon: typeof Globe;
  name: string;
  price: string;
  description: string;
}

const webPlans: WebPlan[] = [
  {
    icon: Globe,
    name: 'Página web corporativa',
    price: '$105.000',
    description:
      'Una presencia profesional para presentar tu negocio, servicios e información de contacto.',
  },
  {
    icon: ShoppingCart,
    name: 'Página web con carrito de compra',
    price: '$120.000',
    description:
      'Una solución web para presentar productos y habilitar una experiencia de compra online.',
  },
];

export default function PaginasWeb() {
  return (
    <section
      id="paginas-web"
      className="scroll-mt-20 bg-aster-soft py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          title="Páginas web para tu negocio"
          subtitle="Diseñamos soluciones web simples, claras y adaptadas a las necesidades de cada negocio."
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {webPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <Reveal key={plan.name} delay={index * 100}>
                <div className="flex h-full flex-col rounded-[26px] bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-cardHover">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-aster-greenSoft text-aster-green">
                    <Icon size={22} />
                  </span>

                  <h3 className="text-lg font-bold leading-snug text-aster-black">
                    {plan.name}
                  </h3>

                  <p className="mt-3 text-2xl font-extrabold text-aster-black">
                    {plan.price}{' '}
                    <span className="text-sm font-semibold text-aster-gray">
                      · IVA incluido
                    </span>
                  </p>

                  <p className="mt-4 text-[14px] leading-relaxed text-aster-gray">
                    {plan.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <a
                      href="https://wa.me/56983480052"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-aster-green px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-aster-greenDark"
                    >
                      <WhatsAppIcon size={18} />
                      Hablar con Aster
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-aster-gray">
            Incluye hosting y dominio según las condiciones definidas para
            cada proyecto.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}