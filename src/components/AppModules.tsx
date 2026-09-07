import { useState } from 'react';
import { Check } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { appModules } from '@/data/appModules';

export default function AppModules() {
  const [activeId, setActiveId] = useState(appModules[0].id);
  const active = appModules.find((m) => m.id === activeId) ?? appModules[0];
  const Icon = active.icon;

  return (
    <section id="aster-app" className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="ASTER App"
          title="Todo lo esencial, en un solo lugar."
          subtitle="Ventas, inventario y gestión conectados para decidir con claridad."
        />
        <Reveal delay={100}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 sm:rounded-3xl">
            <div role="group" aria-label="Módulos de ASTER App" className="grid grid-cols-2 gap-2 bg-aster-soft p-3 sm:grid-cols-4 sm:p-4">
              {appModules.map((mod) => {
                const ModIcon = mod.icon;
                const isActive = mod.id === activeId;
                return (
                  <button
                    type="button"
                    key={mod.id}
                    aria-pressed={isActive}
                    aria-controls="module-detail"
                    onClick={() => setActiveId(mod.id)}
                    className={`flex min-h-12 min-w-0 items-center gap-2 rounded-xl border px-3 py-3 text-left text-sm font-semibold transition-colors ${
                      isActive
                        ? 'border-aster-black bg-aster-black text-white'
                        : 'border-transparent bg-white text-aster-black hover:border-aster-green/40 hover:bg-aster-greenSoft'
                    }`}
                  >
                    <ModIcon size={18} aria-hidden="true" className={`shrink-0 ${isActive ? 'text-[#A3E65A]' : 'text-aster-greenDark'}`} />
                    <span>{mod.name}</span>
                  </button>
                );
              })}
            </div>
            <div id="module-detail" role="region" aria-live="polite" aria-atomic="true" aria-labelledby="module-title" className="grid gap-6 p-5 sm:p-7 lg:grid-cols-2 lg:items-center lg:gap-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aster-greenSoft text-aster-greenDark">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 id="module-title" className="text-xl font-extrabold text-aster-black sm:text-2xl">{active.name}</h3>
                </div>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-aster-gray">{active.description}</p>
              </div>
              <ul className="grid gap-3 rounded-xl bg-aster-greenSoft p-4 sm:grid-cols-2 sm:p-5">
                {active.tags.map((tag) => (
                  <li key={tag} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-aster-black">
                    <Check size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-aster-greenDark" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
