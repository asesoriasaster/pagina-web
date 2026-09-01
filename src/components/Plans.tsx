import { useState } from 'react';
import { Check } from 'lucide-react';

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import PlanModal from '@/components/PlanModal';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { plans, type Plan } from '@/data/plans';

function getCardStyle(plan: Plan) {
  if (plan.id === 'avanzado') {
    return [
      'border-2 border-aster-green',
      'bg-gradient-to-b',
      'from-aster-green/30',
      'via-aster-green/15',
      'to-white',
      'shadow-[0_16px_38px_rgba(16,115,74,0.20)]',
      'xl:-translate-y-3',
    ].join(' ');
  }

  if (plan.id === 'integral') {
    return [
      'border border-aster-green/30',
      'bg-gradient-to-b',
      'from-aster-green/25',
      'via-aster-greenSoft',
      'to-white',
      'shadow-[0_10px_26px_rgba(16,115,74,0.12)]',
      'hover:-translate-y-1',
      'hover:shadow-[0_14px_32px_rgba(16,115,74,0.16)]',
    ].join(' ');
  }

  if (plan.id === 'pro') {
    return [
      'border border-aster-green/25',
      'bg-gradient-to-b',
      'from-aster-green/20',
      'via-aster-greenSoft',
      'to-white',
      'shadow-[0_10px_26px_rgba(16,115,74,0.11)]',
      'hover:-translate-y-1',
      'hover:shadow-[0_14px_32px_rgba(16,115,74,0.15)]',
    ].join(' ');
  }

  return [
    'border border-aster-green/25',
    'bg-gradient-to-b',
    'from-aster-green/20',
    'via-aster-greenSoft',
    'to-white',
    'shadow-[0_10px_26px_rgba(16,115,74,0.11)]',
    'hover:-translate-y-1',
    'hover:shadow-[0_14px_32px_rgba(16,115,74,0.15)]',
  ].join(' ');
}

export default function Plans() {
  const [activePlan, setActivePlan] =
    useState<Plan | null>(null);

  return (
    <section
      id="planes"
      className="bg-white py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          title="Elige el nivel de Aster que necesita tu negocio."
        />

        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.id}
              delay={index * 80}
              className="h-full"
            >
              <article
                className={`flex h-full flex-col rounded-[26px] p-7 transition-all duration-300 ${getCardStyle(
                  plan,
                )}`}
              >
                <div className="mb-4 flex min-h-[30px] flex-wrap items-center gap-2">
                  {plan.badge && (
                    <span className="inline-flex w-fit rounded-full bg-aster-green px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                      {plan.badge}
                    </span>
                  )}

                  {plan.highlight && (
                    <span className="inline-flex w-fit rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-aster-green shadow-sm">
                      {plan.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-aster-black">
                  {plan.name}
                </h3>

                <p className="mt-1.5 min-h-[62px] text-[14px] font-medium leading-relaxed text-aster-gray">
                  {plan.subtitle}
                </p>

                {plan.priceMessage ? (
                  <div className="mt-6 border-b border-aster-green/20 pb-5">
                    <div className="flex min-h-[128px] items-center rounded-2xl border border-aster-green/20 bg-white/85 p-5 shadow-sm">
                      <div>
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-aster-green">
                          Plan personalizado
                        </p>

                        <p className="mt-3 text-[15px] font-semibold leading-relaxed text-aster-black">
                          {plan.priceMessage}
                        </p>

                        <p className="mt-4 text-xs font-medium leading-relaxed text-aster-gray">
                          Conversemos para definir el
                          alcance adecuado para tu negocio.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 border-b border-aster-green/20 pb-5">
                    <div className="min-h-[128px]">
                      {plan.precededBy && (
                        <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-aster-green">
                          {plan.precededBy}
                        </p>
                      )}

                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold tracking-tight text-aster-black">
                          {plan.pricePrimary}
                        </span>

                        {plan.priceUnit && (
                          <span className="text-sm font-semibold text-aster-gray">
                            {plan.priceUnit}
                          </span>
                        )}
                      </div>

                      {plan.pricePrimaryLabel && (
                        <p className="mt-1 text-xs font-semibold leading-relaxed text-aster-gray">
                          {plan.pricePrimaryLabel}
                        </p>
                      )}

                      {plan.priceSecondary && (
                        <p className="mt-3 text-[12.5px] font-semibold leading-relaxed text-aster-black">
                          {plan.priceSecondary}
                        </p>
                      )}

                      {plan.priceSecondaryLabel && (
                        <p className="text-[12px] font-medium leading-relaxed text-aster-gray">
                          {plan.priceSecondaryLabel}
                        </p>
                      )}
                    </div>
                    {plan.continuityPrice && (
                      <div
                        className={`mt-5 rounded-2xl border-2 p-4 ${
                          plan.featured
                            ? 'border-aster-green bg-aster-green text-white shadow-[0_10px_22px_rgba(16,115,74,0.18)]'
                            : 'border-aster-green/35 bg-white/95 shadow-sm'
                        }`}
                      >
                        <p
                          className={`text-[10.5px] font-extrabold uppercase tracking-[0.14em] ${
                            plan.featured
                              ? 'text-white/80'
                              : 'text-aster-green'
                          }`}
                        >
                          {plan.continuityTitle}
                        </p>

                        <div className="mt-1 flex items-baseline gap-1.5">
                          <span
                            className={`text-[28px] font-extrabold tracking-tight ${
                              plan.featured
                                ? 'text-white'
                                : 'text-aster-green'
                            }`}
                          >
                            {plan.continuityPrice}
                          </span>

                          {plan.continuityUnit && (
                            <span
                              className={`text-sm font-bold ${
                                plan.featured
                                  ? 'text-white/85'
                                  : 'text-aster-green'
                              }`}
                            >
                              {plan.continuityUnit}
                            </span>
                          )}
                        </div>

                        {plan.continuityDetail && (
                          <p
                            className={`mt-0.5 text-[11.5px] font-semibold ${
                              plan.featured
                                ? 'text-white/75'
                                : 'text-aster-gray'
                            }`}
                          >
                            {plan.continuityDetail}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <ul className="mt-6 space-y-3">
                  {plan.features.map(
                    (feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-aster-green shadow-sm">
                          <Check
                            size={12}
                            strokeWidth={3}
                          />
                        </span>

                        <span className="text-[13.5px] leading-snug text-aster-black">
                          {feature}
                        </span>
                      </li>
                    ),
                  )}
                </ul>

                <div className="mt-auto flex flex-col gap-2.5 pt-8">
                  <a
                    href="https://wa.me/56983480052"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold transition-all duration-200 ${
                      plan.featured
                        ? 'bg-aster-green text-white shadow-sm hover:bg-aster-greenDark hover:shadow-[0_10px_20px_rgba(16,115,74,0.18)]'
                        : 'bg-aster-black text-white hover:bg-black'
                    }`}
                  >
                    <WhatsAppIcon size={17} />
                    Hablar con Aster
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      setActivePlan(plan)
                    }
                    className="inline-flex items-center justify-center rounded-full border border-aster-green/30 bg-white/75 px-5 py-3 text-[14px] font-semibold text-aster-green transition-all duration-200 hover:border-aster-green hover:bg-aster-green hover:text-white hover:shadow-[0_7px_16px_rgba(16,115,74,0.14)]"
                  >
                    {plan.cta}
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm leading-relaxed text-aster-gray">
              Todos los valores publicados
              incluyen IVA.
            </p>

            <p className="mt-1 text-xs leading-relaxed text-aster-gray/70">
              Equipamiento, inventario inicial,
              configuraciones especiales o
              servicios fuera del alcance
              indicado pueden cotizarse según
              las necesidades de cada negocio.
            </p>
          </div>
        </Reveal>
      </Container>

      {activePlan && (
        <PlanModal
          plan={activePlan}
          onClose={() =>
            setActivePlan(null)
          }
        />
      )}
    </section>
  );
}
