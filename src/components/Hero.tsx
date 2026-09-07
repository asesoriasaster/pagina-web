import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
} from 'lucide-react';

import Container from '@/components/Container';
import FloatingCard from '@/components/hero/FloatingCard';
import PhoneMockup from '@/components/hero/PhoneMockup';
import {
  PUBLIC_CONTACT_HREF,
} from '@/lib/publicLinks';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-gray-100 bg-white pb-16 pt-28 sm:pb-18 sm:pt-36 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-40 -top-44 h-[30rem] w-[30rem] rounded-full bg-aster-greenSoft/70 blur-3xl" />
        <div className="absolute -right-40 top-16 h-[26rem] w-[26rem] rounded-full bg-aster-greenSoft/45 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12">
          <div className="animate-fadeUp">
            <span className="inline-flex items-center rounded-full border border-aster-green/10 bg-aster-greenSoft px-4 py-2 text-sm font-bold text-aster-green">
              Asesoría 360 para negocios y empresas
            </span>

            <h1 className="mt-6 max-w-4xl text-[clamp(2.35rem,5vw,4.15rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-aster-black">
              Información para decidir.
              <span className="block">
                Libertad para avanzar.
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-aster-black/75 sm:text-lg lg:text-[1.15rem]">
              Te ayudamos a ordenar tu negocio, mejorar tus ventas y tomar
              decisiones con información clara.
            </p>

            <div className="mt-5 max-w-3xl">
              <div className="flex gap-4">
                <div className="w-[3px] shrink-0 rounded-full bg-aster-green" />

                <div>
                  <p className="text-base font-bold leading-relaxed text-aster-black sm:text-lg">
                    En Aster 360, te ayudamos con el control de tus operaciones,
                    la gestión de tu negocio y la información que necesitas
                    para tomar mejores decisiones.
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-aster-gray sm:text-[15px]">
                    Combinamos tecnología, asesoría e implementación para
                    convertir esa información en acciones concretas que te
                    permitan mejorar y crecer con mayor claridad.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-aster-green/15 bg-white px-4 py-2 text-xs font-semibold text-aster-black shadow-sm sm:text-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aster-greenSoft text-aster-green">
                <CreditCard size={15} />
              </span>
              <span className="min-w-0">
                Integrable con Mercado Pago y Point 2 para agilizar pagos en tienda.
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#comercio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-aster-green px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(99,174,11,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-aster-greenDark sm:text-base"
              >
                Conocer Aster
                <ArrowRight size={18} />
              </a>

              <a
                href={PUBLIC_CONTACT_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-aster-black shadow-sm transition-all duration-200 hover:border-aster-green hover:text-aster-green sm:text-base"
              >
                Hablar con Aster
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-[40px] bg-aster-greenSoft/55 blur-2xl"
              />

              <div className="relative rounded-[30px] border border-gray-200/80 bg-[#f7f9f5] px-5 py-7 shadow-[0_24px_70px_rgba(17,17,17,0.10)] sm:px-7">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-aster-green">
                      ASTER APP
                    </p>
                    <p className="mt-1 text-base font-bold text-aster-black sm:text-lg">
                      Tu negocio en tu mano.
                    </p>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-aster-greenSoft px-3 py-1.5 text-xs font-bold text-aster-green">
                    CRM ASTER
                  </span>
                </div>

                <div className="relative flex justify-center">
                  <PhoneMockup />

                  <FloatingCard
                    icon={<CheckCircle2 size={16} />}
                    label="Ventas al día"
                    tone="green"
                    className="-left-10 top-10 sm:-left-14"
                    delay="0s"
                  />

                  <FloatingCard
                    icon={<CreditCard size={16} />}
                    label="Pago integrado"
                    tone="green"
                    className="-right-10 top-28 sm:-right-14"
                    delay="0.8s"
                  />
                </div>

                <div className="mt-5 rounded-[18px] border border-aster-green/10 bg-aster-greenSoft px-4 py-3">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <p className="text-sm font-bold text-aster-black">
                      Tecnología + asesoría + implementación
                    </p>

                    <span className="text-xs font-bold text-aster-green">
                      ASTER 360
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
