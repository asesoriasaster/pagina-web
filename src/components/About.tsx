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
              La buena administración no debería ser exclusiva de las grandes empresas
            </h2>
            <p className="mt-6 text-base sm:text-lg text-aster-gray leading-relaxed">
              Muchos negocios crecen gracias al esfuerzo y experiencia de sus propietarios, pero sus herramientas administrativas no siempre crecen al mismo ritmo. Aster nace para reducir esa brecha, acercando estrategia, tecnología, procesos e información a organizaciones de distintas escalas.
            </p>
          </Reveal>
        </div>
        {/* Experiencia del equipo ASTER 360 */}
        <div className="mx-auto mt-12 max-w-4xl rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-aster-black sm:text-3xl">
            Experiencia que se transforma en soluciones
          </h3>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-aster-gray sm:text-lg">
            <p>
              En ASTER 360 reunimos experiencia en gestión comercial, administración,
              operaciones y liderazgo de equipos, con una visión compartida:
              ayudar a que los negocios funcionen mejor.
            </p>

            <p>
              Nuestro equipo combina más de dos décadas de trayectoria en gestión
              administrativa y operacional con una sólida experiencia en dirección
              comercial, desarrollo de ventas y mejora continua. Hemos participado
              en industrias como retail, gastronomía, logística y servicios,
              enfrentando desafíos reales de crecimiento, productividad y control.
            </p>

            <p>
              Contamos con formación en Ingeniería en Marketing, estudios en
              Psicología organizacional y capacitación en excelencia operacional,
              integrando una mirada estratégica con un profundo conocimiento
              del trabajo diario de las empresas.
            </p>

            <p className="border-l-4 border-aster-green pl-5 font-bold text-aster-black">
              Conocemos los desafíos de gestionar un negocio porque hemos
              trabajado directamente con ellos.
            </p>

            <p>
              Por eso, en ASTER 360 no nos limitamos a entregar herramientas
              o recomendaciones. Combinamos experiencia, tecnología y acompañamiento
              para desarrollar soluciones prácticas, adaptadas a cada operación
              y orientadas a resultados.
            </p>

            <p className="rounded-2xl bg-aster-greenSoft p-5 font-bold text-aster-black sm:p-6">
              Nuestra filosofía es simple: comprender primero, proponer con
              criterio y acompañar la implementación.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
