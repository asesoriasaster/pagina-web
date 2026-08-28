import { useState } from 'react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { appModules } from '@/data/appModules';

export default function AppModules() {
  const [activeId, setActiveId] = useState(appModules[0].id);
  const active = appModules.find((m) => m.id === activeId) ?? appModules[0];
  const Icon = active.icon;

  return (
    <section id="aster-app" className="py-24 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Aster App"
          title="Tu negocio en tu mano."
          subtitle="Aster reúne información clave de tu operación y la transforma en información útil para decidir."
        />

        <Reveal delay={100}>
          <div className="mt-14 grid lg:grid-cols-[320px_1fr] gap-6">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
              {appModules.map((mod) => {
                const ModIcon = mod.icon;
                const isActive = mod.id === activeId;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveId(mod.id)}
                    className={`flex items-center gap-3 shrink-0 lg:shrink text-left rounded-2xl px-4 py-3.5 transition-all duration-200 border ${
                      isActive
                        ? 'bg-aster-black border-aster-black text-white shadow-cardHover'
                        : 'bg-aster-soft border-transparent text-aster-black hover:bg-aster-greenSoft'
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center h-9 w-9 rounded-full shrink-0 ${
                        isActive ? 'bg-white/10 text-aster-green' : 'bg-white text-aster-green'
                      }`}
                    >
                      <ModIcon size={18} />
                    </span>
                    <span className="text-[15px] font-semibold whitespace-nowrap lg:whitespace-normal">{mod.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[26px] bg-aster-greenSoft p-8 sm:p-10 min-h-[360px] flex flex-col">
              <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white text-aster-green shadow-sm mb-6">
                <Icon size={22} />
              </span>
              <h3 className="text-2xl font-extrabold text-aster-black">{active.name}</h3>
              <p className="mt-3 text-base text-aster-gray leading-relaxed max-w-xl">{active.description}</p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white text-aster-black text-sm font-medium px-4 py-2 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
