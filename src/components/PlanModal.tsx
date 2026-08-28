import { useEffect } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import type { Plan } from '@/data/plans';

interface PlanModalProps {
  plan: Plan;
  onClose: () => void;
}

export default function PlanModal({ plan, onClose }: PlanModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeUp"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 sm:p-9 shadow-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center h-9 w-9 rounded-full bg-aster-soft text-aster-black hover:bg-gray-200 transition-colors"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <h3 className="text-2xl font-extrabold text-aster-black pr-8">{plan.name}</h3>
        <p className="mt-1.5 text-[15px] text-aster-gray font-medium">{plan.subtitle}</p>

        <p className="mt-5 text-sm text-aster-gray leading-relaxed">{plan.modalIntro}</p>

        {plan.modalSections.map((section) => (
          <div key={section.heading} className="mt-7">
            <h4 className="text-sm font-bold text-aster-green uppercase tracking-wide">{section.heading}</h4>
            <ul className="mt-3 space-y-2.5">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-aster-greenSoft text-aster-green shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[14px] text-aster-black leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {(() => {
          const process = plan.modalProcess;
          if (!process || process.length === 0) return null;
          return (
            <div className="mt-7 rounded-2xl bg-aster-soft p-5">
              <div className="flex flex-wrap items-center gap-2">
                {process.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-xl bg-white px-3.5 py-2 text-[13px] font-bold text-aster-black shadow-sm">
                      {step}
                    </span>
                    {i < process.length - 1 && <ArrowRight size={15} className="text-aster-green" />}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {plan.modalFooter && (
          <p className="mt-6 rounded-xl bg-aster-greenSoft border border-aster-green/15 p-4 text-[13px] font-semibold text-aster-black leading-relaxed">
            {plan.modalFooter}
          </p>
        )}

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href="#contacto"
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center rounded-full bg-aster-green px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-aster-greenDark transition-colors duration-200"
          >
            Hablar con Aster
          </a>
          <button
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center rounded-full bg-aster-soft px-6 py-3.5 text-[15px] font-semibold text-aster-black hover:bg-gray-200 transition-colors duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
