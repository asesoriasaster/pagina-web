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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fadeUp"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-pop sm:p-9"
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

        <h3 className="pr-8 text-2xl font-extrabold text-aster-black">
          {plan.name}
        </h3>

        <p className="mt-1.5 text-[15px] font-medium text-aster-gray">
          {plan.subtitle}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-aster-gray">
          {plan.modalIntro}
        </p>

        {plan.modalSections.map((section) => (
          <div key={section.heading} className="mt-7">
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
        ))}

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
          <p className="mt-6 rounded-xl border border-aster-green/15 bg-aster-greenSoft p-4 text-[13px] font-semibold leading-relaxed text-aster-black">
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