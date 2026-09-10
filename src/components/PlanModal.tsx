import { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

import type { Plan } from '@/data/plans';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface PlanModalProps {
  plan: Plan;
  onClose: () => void;
}

export default function PlanModal({
  plan,
  onClose,
}: PlanModalProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm animate-fadeUp sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[24px] bg-white p-5 shadow-pop sm:rounded-[28px] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-aster-soft text-aster-black transition-colors hover:bg-gray-200"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <h3 className="pr-10 text-2xl font-extrabold text-aster-black">
          {plan.name}
        </h3>

        <p className="mt-1.5 text-[15px] font-medium text-aster-gray">
          {plan.subtitle}
        </p>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-aster-gray">
          {plan.modalIntro}
        </p>

        {plan.modalSections.map((section) => {
          const esOpcionesContratacion =
            (plan.id === 'inicia' || plan.id === 'avanzado') &&
            section.heading === 'Opciones de contratación' &&
            plan.options &&
            plan.options.length > 0;

          if (esOpcionesContratacion) {
            return (
              <div
                key={section.heading}
                className="mt-8"
              >
                <h4 className="text-sm font-bold uppercase tracking-wide text-aster-green">
                  {section.heading}
                </h4>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {plan.options!.map((option) => (
                    <div
                      key={option.label}
                      className="flex min-h-[180px] flex-col rounded-2xl border border-aster-green/25 bg-white p-5 shadow-sm"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-aster-green">
                          {option.label}
                        </p>

                        {option.saving && (
                          <span className="shrink-0 rounded-full bg-aster-green px-2.5 py-1 text-[10.5px] font-extrabold text-white">
                            {option.saving}
                          </span>
                        )}
                      </div>

                      <p className="mt-4 text-[21px] font-extrabold leading-tight tracking-tight text-aster-black">
                        {option.price}
                      </p>

                      {option.detail && (
                        <p className="mt-3 text-[12px] font-medium leading-relaxed text-aster-gray">
                          {option.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div
              key={section.heading}
              className="mt-7"
            >
              <h4 className="text-sm font-bold uppercase tracking-wide text-aster-green">
                {section.heading}
              </h4>

              <ul className="mt-3 space-y-2.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aster-greenSoft text-aster-green">
                      <Check size={12} strokeWidth={3} />
                    </span>

                    <span className="text-[14px] leading-snug text-aster-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {(() => {
          const process = plan.modalProcess;

          if (!process || process.length === 0) {
            return null;
          }

          return (
            <div className="mt-7 rounded-2xl bg-aster-soft p-5">
              <div className="flex flex-wrap items-center gap-2">
                {process.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded-xl bg-white px-3.5 py-2 text-[13px] font-bold text-aster-black shadow-sm">
                      {step}
                    </span>

                    {index < process.length - 1 && (
                      <ArrowRight
                        size={15}
                        className="text-aster-green"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {plan.modalFooter && (
          <p className="mt-7 rounded-2xl border border-aster-green/15 bg-aster-greenSoft p-5 text-[13px] font-semibold leading-relaxed text-aster-black">
            {plan.modalFooter}
          </p>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/56983480052"
            onClick={onClose}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-aster-green px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-aster-greenDark"
          >
            <WhatsAppIcon size={18} />
            Hablar con Aster
          </a>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-aster-soft px-6 py-3.5 text-[15px] font-semibold text-aster-black transition-colors duration-200 hover:bg-gray-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}