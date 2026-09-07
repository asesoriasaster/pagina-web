import {
  CheckCircle2,
  MessageCircle,
  Settings2,
  ShoppingBag,
  Wrench,
} from 'lucide-react';

import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

const tags = [
  'App',
  'POS',
  'Mercado Pago',
  'Inventario',
  'Usuarios',
  'Configuración',
  'Reportes',
  'Equipamiento',
];

export default function Postventa() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-aster-green">
              Soporte Aster
            </p>

            <h2 className="mt-4 max-w-5xl text-[clamp(2rem,4.8vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-aster-black">
              Implementamos, acompañamos y respondemos.
            </h2>

            <p className="mt-5 max-w-5xl text-base leading-relaxed text-aster-gray sm:text-lg lg:text-[1.65rem] lg:leading-relaxed">
              No quedas solo después de implementar. Aster registra,
              da seguimiento y responde a solicitudes operativas para que tu
              negocio siga funcionando con más continuidad y claridad.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-7 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-aster-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 rounded-[28px] border border-gray-200 bg-[#fafbf8] p-6 shadow-card sm:p-7">
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xl font-extrabold text-aster-black">
                      Ticket activo
                    </p>

                    <span className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-extrabold text-white">
                      AST-000348
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aster-greenSoft text-aster-green">
                        <CheckCircle2 size={18} />
                      </span>
                      <div>
                        <p className="font-bold text-aster-black">Recibido</p>
                        <p className="text-sm text-aster-gray">
                          Solicitud registrada correctamente.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aster-greenSoft text-aster-green">
                        <CheckCircle2 size={18} />
                      </span>
                      <div>
                        <p className="font-bold text-aster-black">En revisión</p>
                        <p className="text-sm text-aster-gray">
                          Se está validando causa y alcance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-aster-green text-aster-green">
                        <Wrench size={17} />
                      </span>
                      <div>
                        <p className="font-bold text-aster-black">En proceso</p>
                        <p className="text-sm text-aster-gray">
                          Seguimiento visible hasta el cierre.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[20px] bg-white p-4 shadow-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-aster-greenSoft text-aster-green">
                      <Settings2 size={20} />
                    </span>
                    <p className="mt-3 text-sm font-bold text-aster-black">
                      Seguimiento visible
                    </p>
                  </div>

                  <div className="rounded-[20px] bg-white p-4 shadow-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-aster-greenSoft text-aster-green">
                      <ShoppingBag size={20} />
                    </span>
                    <p className="mt-3 text-sm font-bold text-aster-black">
                      Continuidad operativa
                    </p>
                  </div>

                  <div className="rounded-[20px] bg-white p-4 shadow-sm sm:col-span-2">
                    <a
                      href="#contacto"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-aster-green px-6 py-3.5 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-aster-greenDark"
                    >
                      <MessageCircle size={17} />
                      Hablar con Aster
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
