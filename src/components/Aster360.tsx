import { CalendarDays, GraduationCap, HeartHandshake, LucideIcon } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

interface Area {
  icon: LucideIcon;
  title: string;
  items: string[];
  tone: 'green' | 'soft' | 'dark';
}

const areas: Area[] = [
  {
    icon: HeartHandshake,
    title: 'Personas y bienestar',
    items: ['Manejo del estrés', 'Resolución de conflictos', 'Comunicación', 'Liderazgo', 'Clima laboral', 'Trabajo en equipo', 'Bienestar', 'Capacitaciones'],
    tone: 'green',
  },
  {
    icon: CalendarDays,
    title: 'Planificación y ejecución de eventos',
    items: ['Planificación', 'Presupuesto', 'Proveedores', 'Cotizaciones', 'Cronograma', 'Coordinación', 'Ejecución', 'Evaluación'],
    tone: 'soft',
  },
  {
    icon: GraduationCap,
    title: 'Formación y recursos',
    items: ['Cursos', 'Capacitaciones', 'Videos', 'Manuales', 'PDF', 'Guías', 'Plantillas', 'Excel', 'Documentos empresariales', 'Contenido educativo'],
    tone: 'dark',
  },
];

const toneStyles: Record<string, { bg: string; icon: string; chip: string }> = {
  green: { bg: 'bg-aster-greenSoft border border-aster-green/20', icon: 'bg-white text-aster-green', chip: 'bg-white text-aster-black' },
  soft: { bg: 'bg-aster-soft border border-gray-200/70', icon: 'bg-white text-aster-black', chip: 'bg-white text-aster-black' },
  dark: { bg: 'bg-aster-black border border-aster-black', icon: 'bg-white/10 text-aster-green', chip: 'bg-white/10 text-white' },
};

export default function Aster360() {
  return (
    <section id="servicios" className="py-24 sm:py-28 bg-white">
      <Container>
        <SectionHeading eyebrow="Aster 360" title="Otras áreas donde aportamos valor." />

        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {areas.map((area, i) => {
            const AreaIcon = area.icon;
            const styles = toneStyles[area.tone];
            return (
              <Reveal key={area.title} delay={i * 100}>
                <div className={`h-full rounded-[26px] p-8 ${styles.bg} flex flex-col`}>
                  <span className={`flex items-center justify-center h-12 w-12 rounded-2xl mb-5 ${styles.icon}`}>
                    <AreaIcon size={22} />
                  </span>
                  <h3 className={`text-xl font-extrabold ${area.tone === 'dark' ? 'text-white' : 'text-aster-black'}`}>{area.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {area.items.map((item) => (
                      <span key={item} className={`rounded-full text-sm font-medium px-3 py-1.5 ${styles.chip}`}>{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
