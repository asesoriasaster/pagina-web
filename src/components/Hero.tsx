import { AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';
import Container from '@/components/Container';
import PhoneMockup from '@/components/hero/PhoneMockup';
import FloatingCard from '@/components/hero/FloatingCard';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-aster-greenSoft/60 via-white to-white -z-10" />
      <Container>
        <div className="grid lg:grid-cols-[55%_45%] gap-14 lg:gap-8 items-center">
          <div className="animate-fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full bg-aster-greenSoft text-aster-green text-sm font-semibold px-4 py-1.5 mb-6">
              Asesoría 360 para negocios y empresas
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight text-aster-black">
              Información para decidir. Libertad para avanzar.
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-medium text-aster-black/80 leading-relaxed">
              Asesoría administrativa, comercial, estratégica y tecnológica para ayudarte a entender, controlar y mejorar tu negocio.
            </p>
            <p className="mt-4 text-base sm:text-lg text-aster-gray leading-relaxed max-w-xl">
              Aster combina diagnóstico, estrategia, implementación, tecnología y acompañamiento para transformar problemas reales en soluciones que funcionen.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#comercio"
                className="inline-flex items-center justify-center rounded-full bg-aster-green px-7 py-3.5 text-base font-semibold text-white shadow-cardHover hover:bg-aster-greenDark transition-all duration-200 hover:-translate-y-0.5"
              >
                Conocer Aster
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-aster-black hover:border-aster-green hover:text-aster-green transition-all duration-200"
              >
                Hablar con Aster
              </a>
            </div>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-aster-green">
              <CheckCircle2 size={16} className="shrink-0" />
              Sitio actualizado automáticamente
            </span>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <PhoneMockup />
              <FloatingCard
                icon={<TrendingUp size={16} />}
                label="Ventas +8,4%"
                tone="green"
                className="-left-20 top-12"
                delay="0s"
              />
              <FloatingCard
                icon={<AlertTriangle size={16} />}
                label="Stock crítico"
                tone="red"
                className="-right-16 top-40"
                delay="1.2s"
              />
              <FloatingCard
                icon={<AlertTriangle size={16} />}
                label="3 productos por vencer"
                tone="red"
                className="-left-24 bottom-48"
                delay="2s"
              />
              <FloatingCard
                icon={<CheckCircle2 size={16} />}
                label="Meta diaria alcanzada"
                tone="green"
                className="-right-14 bottom-20"
                delay="0.6s"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
