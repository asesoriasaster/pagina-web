import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { plans, type Plan } from '@/data/plans';
import PlanModal from '@/components/PlanModal';

export default function Plans() {
  const [activePlan, setActivePlan] = useState<Plan | null>(null);

  return (
    <section id="planes" className="py-24 sm:py-28 bg-white">
      <Container>
        <SectionHeading title="Elige el nivel de Aster que necesita tu negocio." />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80} className="h-full">
              <div
                className={`h-full flex flex-col rounded-[26px] p-7 transition-all duration-300 ${
                  plan.featured
                    ? 'bg-white border-2 border-aster-green shadow-pop xl:-translate-y-3'
                    : 'bg-aster-soft border border-gray-200/70 shadow-card hover:shadow-cardHover'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  {plan.badge && (
                    <span className="inline-block w-fit text-xs font-bold tracking-wide text-white uppercase bg-aster-green rounded-full px-3 py-1.5">
                      {plan.badge}
                    </span>
                  )}
                  {plan.highlight && (
                    <span className="inline-block w-fit text-xs font-bold tracking-wide text-aster-green uppercase bg-aster-greenSoft rounded-full px-3 py-1.5">
                      {plan.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-aster-black">{plan.name}</h3>
                <p className="mt-1.5 text-[14px] text-aster-gray font-medium leading-snug">{plan.subtitle}</p>

                <div className="mt-6 pb-5 border-b border-gray-200/70">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-aster-black tracking-tight">{plan.pricePrimary}</span>
                    {plan.priceUnit && (
                      <span className="text-sm font-semibold text-aster-gray">{plan.priceUnit}</span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-aster-gray mt-1">{plan.pricePrimaryLabel}</p>

                  {plan.discountBadge && (
                    <p className="mt-3 inline-block w-fit text-xs font-bold text-white bg-aster-green rounded-full px-3 py-1.5">
                      {plan.discountBadge}
                    </p>
                  )}

                  {plan.priceSecondary && (
                    <p className="mt-3 text-[12.5px] font-medium text-aster-gray leading-relaxed">{plan.priceSecondary}</p>
                  )}
                  {plan.priceSecondaryLabel && (
                    <p className="text-[12px] font-medium text-aster-gray/80 leading-relaxed">{plan.priceSecondaryLabel}</p>
                  )}

                  {plan.extra && (
                    <p className="mt-2 text-[12px] font-medium text-aster-gray/80 leading-relaxed">{plan.extra}</p>
                  )}
                </div>

                <ul className="space-y-2.5 mt-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="flex items-center justify-center h-5 w-5 rounded-full bg-aster-greenSoft text-aster-green shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[13.5px] text-aster-black leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7 flex flex-col gap-2.5">
                  <a
                    href="#contacto"
                    className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-[14px] font-semibold transition-colors duration-200 ${
                      plan.featured
                        ? 'bg-aster-green text-white hover:bg-aster-greenDark'
                        : 'bg-aster-black text-white hover:bg-black'
                    }`}
                  >
                    Hablar con Aster
                  </a>
                  <button
                    onClick={() => setActivePlan(plan)}
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-[14px] font-semibold text-aster-black hover:border-aster-green hover:text-aster-green transition-colors duration-200"
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-sm text-aster-gray leading-relaxed">
              Todos los valores publicados incluyen IVA.
            </p>
            <p className="mt-1 text-xs text-aster-gray/70 leading-relaxed">
              Equipamiento, inventario inicial, configuraciones especiales o servicios fuera del alcance indicado pueden cotizarse según las necesidades de cada negocio.
            </p>
          </div>
        </Reveal>
      </Container>

      {activePlan && <PlanModal plan={activePlan} onClose={() => setActivePlan(null)} />}
    </section>
  );
}
