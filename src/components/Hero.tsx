import {
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

import Container from '@/components/Container';
import PhoneMockup from '@/components/hero/PhoneMockup';
import FloatingCard from '@/components/hero/FloatingCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-aster-greenSoft/60 via-white to-white" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(460px,0.95fr)] lg:gap-8">
          {/* Texto principal */}
          <div className="animate-fadeUp">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-aster-greenSoft px-4 py-1.5 text-sm font-semibold text-aster-green">
              Asesoría 360 para negocios y empresas
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-aster-black sm:text-5xl lg:text-[3.4rem]">
              Información para decidir. Libertad para avanzar.
            </h1>

            <p className="mt-6 text-lg font-medium leading-relaxed text-aster-black/80 sm:text-xl">
              Asesoría administrativa, comercial, estratégica y tecnológica
              para ayudarte a entender, controlar y mejorar tu negocio.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-aster-gray sm:text-lg">
              Aster combina diagnóstico, estrategia, implementación,
              tecnología y acompañamiento para transformar problemas reales
              en soluciones que funcionen.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#comercio"
                className="inline-flex items-center justify-center rounded-full bg-aster-green px-7 py-3.5 text-base font-semibold text-white shadow-cardHover transition-all duration-200 hover:-translate-y-0.5 hover:bg-aster-greenDark"
              >
                Conocer Aster
              </a>

              <a
                href="https://wa.me/56983480052"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-aster-black transition-all duration-200 hover:border-aster-green hover:text-aster-green"
              >
                <WhatsAppIcon size={19} />
                Hablar con Aster
              </a>
            </div>
          </div>

          {/* Mockup Aster App */}
          <div className="relative flex min-h-[500px] items-center justify-center sm:min-h-[560px] lg:min-h-[590px]">
            <div className="relative mx-auto w-full max-w-[540px]">
              <PhoneMockup />

              {/* Escritorio / tablet */}
              <FloatingCard
                icon={<TrendingUp size={16} />}
                label="Ventas +8,4%"
                tone="green"
                className="-left-4 top-28 hidden sm:flex lg:left-0"
                delay="0s"
              />

              <FloatingCard
                icon={<AlertTriangle size={16} />}
                label="Stock crítico"
                tone="red"
                className="-right-10 top-52 hidden sm:flex lg:-right-6"
                delay="1.2s"
              />

              <FloatingCard
                icon={<CheckCircle2 size={16} />}
                label="Meta diaria alcanzada"
                tone="green"
                className="-right-8 bottom-24 hidden sm:flex lg:-right-4"
                delay="0.6s"
              />

              {/* Móvil */}
              <FloatingCard
                icon={<TrendingUp size={15} />}
                label="Ventas +8,4%"
                tone="green"
                className="-left-3 top-28 flex scale-[0.82] sm:hidden"
                delay="0s"
              />

              <FloatingCard
                icon={<CheckCircle2 size={15} />}
                label="Meta alcanzada"
                tone="green"
                className="-right-3 bottom-20 flex scale-[0.82] sm:hidden"
                delay="0.8s"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}