import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { implementationSteps } from '@/data/implementationSteps';

export default function Implementation() {
  return (
    <section className="py-24 sm:py-28 bg-aster-soft">
      <Container>
        <SectionHeading
          title="No solo te entregamos el sistema. Te ayudamos a ponerlo en funcionamiento."
          align="center"
        />

        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-card">
            <img
              src="/assets/images/8.jpg"
              alt="Persona gestionando su negocio con calma desde una tablet en una cafetería"
              className="block w-full aspect-[16/8] object-cover object-center"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gray-200" />
          <div className="grid lg:grid-cols-4 gap-x-6 gap-y-10">
            {implementationSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <Reveal key={step.number} delay={(i % 4) * 90}>
                  <div className="relative flex lg:flex-col gap-4 lg:gap-0">
                    <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-2xl bg-white shadow-card text-aster-green shrink-0 lg:mb-5">
                      <StepIcon size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-aster-green">{step.number}</span>
                      <h3 className="text-lg font-bold text-aster-black mt-0.5">{step.title}</h3>
                      <p className="text-sm text-aster-gray mt-1 leading-snug">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
