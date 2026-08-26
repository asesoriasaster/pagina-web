import { Globe, ShoppingCart } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

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
    description: 'Una presencia profesional para presentar tu negocio, servicios e información de contacto.',
  },
  {
    icon: ShoppingCart,
    name: 'Página web con carrito de compra',
    price: '$120.000',
    description: 'Una solución web para presentar productos y habilitar una experiencia de compra online.',
  },
];

export default function PaginasWeb() {
  return (
    <section id="paginas-web" className="py-24 sm:py-28 bg-aster-soft scroll-mt-20">
      <Container>
        <SectionHeading
          title="Páginas web para tu negocio"
          subtitle="Diseñamos soluciones web simples, claras y adaptadas a las necesidades de cada negocio."
        />

        <div className="grid sm:grid-cols-2 gap-6 mt-14 max-w-3xl mx-auto">
          {webPlans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <Reveal key={plan.name} delay={i * 100}>
                <div className="h-full flex flex-col rounded-[26px] bg-white p-8 shadow-card hover:shadow-cardHover transition-shadow duration-300">
                  <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-aster-greenSoft text-aster-green mb-5">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-aster-black leading-snug">{plan.name}</h3>
                  <p className="mt-3 text-2xl font-extrabold text-aster-black">
                    {plan.price} <span className="text-sm font-semibold text-aster-gray">· IVA incluido</span>
                  </p>
                  <p className="mt-4 text-[14px] text-aster-gray leading-relaxed">{plan.description}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center w-full rounded-full bg-aster-green px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-aster-greenDark transition-colors duration-200"
                    >
                      Hablar con Aster
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-aster-gray max-w-xl mx-auto">
            Incluye hosting y dominio según las condiciones definidas para cada proyecto.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
