import type { ReactNode } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  CalendarDays,
  Package,
  ShoppingCart,
  Wallet,
} from 'lucide-react';

export default function PhoneMockup() {
  return (
    <>
      <style>
        {`
          @keyframes asterPhoneFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes asterDashboardBreath {
            0%, 100% {
              transform: scale(0.985);
            }

            50% {
              transform: scale(1);
            }
          }

          @keyframes asterPhoneGlow {
            0%, 100% {
              opacity: 0.35;
              transform: scale(0.96);
            }

            50% {
              opacity: 0.58;
              transform: scale(1.03);
            }
          }

          .aster-phone-float {
            animation: asterPhoneFloat 6s ease-in-out infinite;
          }

          .aster-dashboard-breath {
            animation: asterDashboardBreath 8s ease-in-out infinite;
            transform-origin: center top;
          }

          .aster-phone-glow {
            animation: asterPhoneGlow 6s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .aster-phone-float,
            .aster-dashboard-breath,
            .aster-phone-glow {
              animation: none;
            }
          }
        `}
      </style>

      <div className="relative mx-auto w-[225px] sm:w-[245px] lg:w-[270px]">
        <div className="aster-phone-glow absolute -inset-10 rounded-[70px] bg-aster-green/15 blur-3xl" />

        <div className="absolute -bottom-8 left-1/2 h-16 w-[78%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl" />

        <div
          className="relative"
          style={{
            transform: 'perspective(1100px) rotateY(-4deg) rotateZ(1.2deg)',
            transformOrigin: 'center center',
          }}
        >
          <div className="aster-phone-float">
            <div className="relative rounded-[44px] bg-[#090909] p-[7px] shadow-[0_35px_80px_rgba(0,0,0,0.26),0_15px_35px_rgba(16,115,74,0.12)]">
              <div className="absolute -left-[3px] top-[105px] h-11 w-[3px] rounded-l-md bg-[#2b2b2b]" />
              <div className="absolute -left-[3px] top-[160px] h-16 w-[3px] rounded-l-md bg-[#2b2b2b]" />
              <div className="absolute -right-[3px] top-[145px] h-20 w-[3px] rounded-r-md bg-[#2b2b2b]" />

              <div className="relative aspect-[768/1664] overflow-hidden rounded-[38px] bg-[#f3f8f4]">
                <img
                  src="/assets/images/dashboard.jpeg"
                  alt="Dashboard de Aster App"
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-[0.16]"
                />

                <div className="aster-dashboard-breath absolute inset-0 z-10 px-3 pb-3 pt-4">
                  <div className="rounded-[20px] border border-white/70 bg-white/90 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-aster-green">
                          Dashboard global
                        </p>
                        <h3 className="mt-1 text-[16px] font-extrabold leading-tight text-aster-black">
                          Resumen del negocio
                        </h3>
                        <p className="mt-1 text-[9px] leading-relaxed text-aster-gray">
                          Vista consolidada de ventas, inventario y operación.
                        </p>
                      </div>

                      <div className="rounded-full bg-aster-greenSoft px-2 py-1 text-[8px] font-bold text-aster-green">
                        En vivo
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 grid grid-cols-2 gap-2">
                    <MetricCard
                      icon={<ArrowUpRight size={12} />}
                      title="Ventas hoy"
                      value="$186.400"
                      detail="+8,4% vs ayer"
                      tone="green"
                    />

                    <MetricCard
                      icon={<CalendarDays size={12} />}
                      title="Ventas mes"
                      value="$4.280.900"
                      detail="Meta: 78%"
                      tone="green"
                    />

                    <MetricCard
                      icon={<ShoppingCart size={12} />}
                      title="Transacciones"
                      value="37"
                      detail="12 en proceso"
                      tone="neutral"
                    />

                    <MetricCard
                      icon={<Wallet size={12} />}
                      title="Ticket promedio"
                      value="$115.700"
                      detail="Buen rendimiento"
                      tone="neutral"
                    />
                  </div>

                  <div className="mt-2.5 rounded-[20px] border border-white/70 bg-white/92 p-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[10px] font-bold text-aster-black">
                          Alertas activas
                        </p>
                        <p className="mt-0.5 text-[9px] text-aster-gray">
                          Revisión rápida del estado
                        </p>
                      </div>

                      <div className="rounded-full bg-red-50 px-2 py-1 text-[8px] font-bold text-red-500">
                        2 críticas
                      </div>
                    </div>

                    <div className="mt-2.5 space-y-2">
                      <AlertRow
                        icon={<AlertTriangle size={11} />}
                        label="Stock crítico"
                        value="4 SKU"
                        tone="red"
                      />

                      <AlertRow
                        icon={<Package size={11} />}
                        label="Por vencer"
                        value="3 unid."
                        tone="amber"
                      />
                    </div>
                  </div>

                  <div className="mt-2.5 rounded-[20px] border border-white/70 bg-white/92 p-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-aster-black">
                          Métodos de pago
                        </p>
                        <p className="mt-0.5 text-[9px] text-aster-gray">
                          Distribución del día
                        </p>
                      </div>

                      <span className="text-[8px] font-semibold text-aster-gray">
                        26 Ago
                      </span>
                    </div>

                    <div className="mt-2.5 space-y-2">
                      <PaymentRow
                        label="Débito"
                        value="47%"
                        width="47%"
                      />

                      <PaymentRow
                        label="Efectivo"
                        value="33%"
                        width="33%"
                      />

                      <PaymentRow
                        label="Crédito"
                        value="20%"
                        width="20%"
                      />
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/[0.025]" />
                <div className="pointer-events-none absolute left-[12%] top-0 h-[1px] w-[55%] bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MetricCard({
  icon,
  title,
  value,
  detail,
  tone = 'neutral',
}: {
  icon: ReactNode;
  title: string;
  value: string;
  detail: string;
  tone?: 'green' | 'neutral';
}) {
  const iconWrapClass =
    tone === 'green'
      ? 'bg-aster-greenSoft text-aster-green'
      : 'bg-slate-100 text-slate-600';

  return (
    <div className="rounded-[18px] border border-white/70 bg-white/92 p-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full ${iconWrapClass}`}
        >
          {icon}
        </div>

        <p className="text-[9px] font-semibold leading-tight text-aster-gray">
          {title}
        </p>
      </div>

      <p className="mt-2 text-[15px] font-extrabold leading-none text-aster-black">
        {value}
      </p>

      <p className="mt-1 text-[9px] font-medium text-aster-gray">
        {detail}
      </p>
    </div>
  );
}

function AlertRow({
  icon,
  label,
  value,
  tone = 'red',
}: {
  icon: ReactNode;
  label: string;
  value: string;
  tone?: 'red' | 'amber';
}) {
  const toneClass =
    tone === 'red'
      ? 'bg-red-50 text-red-500'
      : 'bg-amber-50 text-amber-500';

  return (
    <div className="flex items-center justify-between rounded-[14px] bg-slate-50/90 px-2.5 py-2">
      <div className="flex items-center gap-2">
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full ${toneClass}`}
        >
          {icon}
        </div>

        <span className="text-[9px] font-semibold text-aster-black">
          {label}
        </span>
      </div>

      <span className="text-[9px] font-bold text-aster-gray">
        {value}
      </span>
    </div>
  );
}

function PaymentRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[9px]">
        <span className="font-semibold text-aster-black">
          {label}
        </span>

        <span className="font-bold text-aster-gray">
          {value}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-aster-green"
          style={{ width }}
        />
      </div>
    </div>
  );
}