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
              transform: translateY(-6px);
            }
          }

          @keyframes asterPhoneGlow {
            0%, 100% {
              opacity: 0.30;
              transform: scale(0.97);
            }

            50% {
              opacity: 0.48;
              transform: scale(1.02);
            }
          }

          @keyframes asterDashboardEnter {
            from {
              opacity: 0;
              transform: translateY(8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .aster-phone-float {
            animation: asterPhoneFloat 6s ease-in-out infinite;
          }

          .aster-phone-glow {
            animation: asterPhoneGlow 6s ease-in-out infinite;
          }

          .aster-dashboard-enter {
            animation: asterDashboardEnter 0.8s ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .aster-phone-float,
            .aster-phone-glow,
            .aster-dashboard-enter {
              animation: none;
            }
          }
        `}
      </style>

      <div className="relative mx-auto w-[225px] sm:w-[245px] lg:w-[270px]">
        {/* Resplandor verde ASTER */}
        <div className="aster-phone-glow absolute -inset-10 rounded-[70px] bg-aster-green/15 blur-3xl" />

        {/* Sombra inferior */}
        <div className="absolute -bottom-7 left-1/2 h-14 w-[76%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl" />

        {/* Perspectiva */}
        <div
          className="relative"
          style={{
            transform:
              'perspective(1100px) rotateY(-4deg) rotateZ(1.2deg)',
            transformOrigin: 'center center',
          }}
        >
          <div className="aster-phone-float">
            {/* Cuerpo del teléfono */}
            <div className="relative rounded-[44px] bg-[#090909] p-[7px] shadow-[0_32px_70px_rgba(0,0,0,0.25),0_14px_32px_rgba(16,115,74,0.10)]">
              {/* Botones laterales */}
              <div className="absolute -left-[3px] top-[105px] h-11 w-[3px] rounded-l-md bg-[#2b2b2b]" />

              <div className="absolute -left-[3px] top-[160px] h-16 w-[3px] rounded-l-md bg-[#2b2b2b]" />

              <div className="absolute -right-[3px] top-[145px] h-20 w-[3px] rounded-r-md bg-[#2b2b2b]" />

              {/* Pantalla */}
              <div className="relative aspect-[768/1664] overflow-hidden rounded-[38px] bg-[#f4f8f5]">
                {/* Imagen real de Aster como apoyo */}
                <img
                  src="/assets/images/dashboard.jpeg"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-[0.08]"
                />

                {/* Dashboard demostrativo */}
                <div className="aster-dashboard-enter absolute inset-0 z-10 px-3 pb-3 pt-4">
                  {/* Cabecera */}
                  <div className="rounded-[20px] border border-white/80 bg-white/95 px-3 py-2.5 shadow-[0_8px_22px_rgba(0,0,0,0.07)]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-aster-green">
                          Dashboard global
                        </p>

                        <h3 className="mt-1 text-[16px] font-extrabold leading-tight text-aster-black">
                          Resumen del negocio
                        </h3>

                        <p className="mt-1 text-[9px] leading-relaxed text-aster-gray">
                          Ventas, inventario y operación en una sola vista.
                        </p>
                      </div>

                      <div className="shrink-0 rounded-full bg-aster-greenSoft px-2 py-1 text-center text-[7.5px] font-bold leading-tight text-aster-green">
                        Datos
                        <br />
                        demo
                      </div>
                    </div>
                  </div>

                  {/* Métricas */}
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
                      title="Ventas del mes"
                      value="$4.280.900"
                      detail="Meta mensual: 78%"
                      tone="green"
                      compactValue
                    />

                    <MetricCard
                      icon={<ShoppingCart size={12} />}
                      title="Transacciones mes"
                      value="37"
                      detail="Ventas confirmadas"
                      tone="neutral"
                    />

                    <MetricCard
                      icon={<Wallet size={12} />}
                      title="Ticket promedio"
                      value="$115.700"
                      detail="Promedio mensual"
                      tone="neutral"
                    />
                  </div>

                  {/* Alertas */}
                  <div className="mt-2.5 rounded-[20px] border border-white/80 bg-white/95 p-2.5 shadow-[0_8px_22px_rgba(0,0,0,0.07)]">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[10px] font-bold text-aster-black">
                          Alertas activas
                        </p>

                        <p className="mt-0.5 text-[9px] text-aster-gray">
                          Revisión rápida de la operación
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-red-50 px-2 py-1 text-[8px] font-bold text-red-500">
                        2 críticas
                      </span>
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
                        label="Productos por vencer"
                        value="3 unid."
                        tone="amber"
                      />
                    </div>
                  </div>

                  {/* Métodos de pago */}
                  <div className="mt-2.5 rounded-[20px] border border-white/80 bg-white/95 p-2.5 shadow-[0_8px_22px_rgba(0,0,0,0.07)]">
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

                {/* Reflejo */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/[0.02]" />
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
  compactValue = false,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  detail: string;
  tone?: 'green' | 'neutral';
  compactValue?: boolean;
}) {
  const iconClass =
    tone === 'green'
      ? 'bg-aster-greenSoft text-aster-green'
      : 'bg-slate-100 text-slate-600';

  return (
    <div className="min-w-0 rounded-[18px] border border-white/80 bg-white/95 p-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.065)]">
      <div className="flex items-center gap-2">
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          {icon}
        </span>

        <p className="min-w-0 text-[9px] font-semibold leading-tight text-aster-gray">
          {title}
        </p>
      </div>

      <p
        className={`mt-2 whitespace-nowrap font-extrabold leading-none text-aster-black ${
          compactValue
            ? 'text-[13px] tracking-[-0.03em]'
            : 'text-[15px]'
        }`}
      >
        {value}
      </p>

      <p className="mt-1 text-[8.5px] font-medium leading-tight text-aster-gray">
        {detail}
      </p>
    </div>
  );
}

function AlertRow({
  icon,
  label,
  value,
  tone,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  tone: 'red' | 'amber';
}) {
  const toneClass =
    tone === 'red'
      ? 'bg-red-50 text-red-500'
      : 'bg-amber-50 text-amber-500';

  return (
    <div className="flex items-center justify-between gap-1.5 rounded-[14px] bg-slate-50/95 px-2 py-2">
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${toneClass}`}
        >
          {icon}
        </span>

        <span className="whitespace-nowrap text-[8px] font-semibold leading-tight text-aster-black">
          {label}
        </span>
      </div>

      <span className="shrink-0 whitespace-nowrap text-[8.5px] font-bold text-aster-gray">
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

      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-aster-green"
          style={{ width }}
        />
      </div>
    </div>
  );
}