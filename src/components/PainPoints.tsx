import { HelpCircle } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import EditorialImage from '@/components/EditorialImage';

const questions = [
  '¿Sabes exactamente cuánto stock tienes?',
  '¿Puedes saber cuánto vendiste sin llamar al local?',
  '¿Desaparecen productos y no sabes por qué?',
  '¿Descubres pérdidas cuando ya ocurrieron?',
  '¿Tus trabajadores manejan caja sin suficiente trazabilidad?',
  '¿Sabes qué productos realmente te dejan dinero?',
  '¿Hay productos detenidos o próximos a vencer?',
  '¿Compras mercadería principalmente por intuición?',
  '¿Conoces quiénes son tus mejores clientes?',
  '¿Puedes ausentarte sin perder visibilidad de tu negocio?',
];

export default function PainPoints() {
  return (
    <section id="comercio" className="py-24 sm:py-28 bg-aster-soft">
      <Container>
        <SectionHeading title="¿Tu negocio puede funcionar sin que estés encima todo el día?" />

        <Reveal delay={80}>
          <EditorialImage
            src="/assets/images/2.jpg"
            alt="Dueña de negocio mostrando ASTER App en su celular"
            title={<>Tu negocio, <strong>bajo control.</strong></>}
            subtitle={<>Ventas, inventario, caja y alertas. La información que necesitas, <strong>siempre a tu alcance.</strong></>}
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {questions.map((q, i) => (
            <Reveal key={q} delay={(i % 3) * 100}>
              <div className="h-full flex gap-3 items-start rounded-2xl bg-white p-5 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-aster-greenSoft text-aster-green shrink-0">
                  <HelpCircle size={16} />
                </span>
                <p className="text-[15px] font-semibold text-aster-black leading-snug">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-16 text-center text-2xl sm:text-3xl font-extrabold text-aster-black">
            Aster Comercio fue creado para cambiar eso.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
