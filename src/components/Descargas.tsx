import { FileText, BookOpen, FileSpreadsheet, FileType, Download } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

interface Resource {
  icon: typeof FileText;
  title: string;
  type: string;
}

const resources: Resource[] = [
  { icon: FileText, title: 'Manual de uso de ASTER App', type: 'PDF' },
  { icon: BookOpen, title: 'Guías de implementación', type: 'PDF' },
  { icon: FileSpreadsheet, title: 'Plantillas para tu negocio', type: 'Excel' },
  { icon: FileType, title: 'Documentos útiles', type: 'PDF' },
];

export default function Descargas() {
  return (
    <section id="descargas" className="py-24 sm:py-28 bg-aster-soft scroll-mt-20">
      <Container>
        <SectionHeading
          title="Descargas"
          subtitle="Recursos gratuitos para ayudarte a implementar, comprender y aprovechar mejor las herramientas de Aster."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {resources.map((resource, i) => {
            const ResourceIcon = resource.icon;
            return (
              <Reveal key={resource.title} delay={(i % 4) * 90}>
                <div className="h-full flex flex-col items-start rounded-2xl bg-white p-6 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between w-full mb-5">
                    <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-aster-greenSoft text-aster-green">
                      <ResourceIcon size={22} />
                    </span>
                    <span className="rounded-full bg-aster-soft text-aster-gray text-xs font-bold uppercase px-3 py-1">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-aster-black leading-snug">{resource.title}</h3>
                  <div className="mt-auto pt-6 w-full">
                    <span className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-aster-soft text-aster-gray text-sm font-semibold px-4 py-2.5 border border-gray-200">
                      <Download size={15} /> Próximamente
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-aster-gray max-w-xl mx-auto">
            Pronto podrás descargar estos recursos de forma gratuita. Aún no tenemos archivos disponibles.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
