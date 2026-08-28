import Container from '@/components/Container';
import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-28 bg-aster-soft">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold tracking-wide text-aster-green uppercase mb-4">Sobre Aster</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-tight text-aster-black">
              La buena administración no debería ser exclusiva de las grandes empresas.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-aster-gray leading-relaxed">
              Muchos negocios crecen gracias al esfuerzo y experiencia de sus propietarios, pero sus herramientas administrativas no siempre crecen al mismo ritmo. Aster nace para reducir esa brecha, acercando estrategia, tecnología, procesos e información a organizaciones de distintas escalas.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
