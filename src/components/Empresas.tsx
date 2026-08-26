import {
  BarChart3,
  Users,
  Boxes,
  Settings2,
  Headphones,
  Wrench,
  LucideIcon,
} from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

import EditorialImage from '@/components/EditorialImage';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Settings2, title: 'Gestión administrativa', description: 'Procesos, documentación, control y estandarización.' },
  { icon: Users, title: 'Gestión comercial', description: 'CRM, ventas, seguimiento, clientes e indicadores.' },
  { icon: Boxes, title: 'Inventarios y operaciones', description: 'Abastecimiento, movimientos, trazabilidad y análisis.' },
  { icon: BarChart3, title: 'Datos y control de gestión', description: 'Dashboards, KPI, reportes y herramientas.' },
  { icon: Settings2, title: 'Automatización', description: 'Digitalización y reducción de tareas manuales.' },
  { icon: Headphones, title: 'Clientes y postventa', description: 'Solicitudes, reclamos, garantías y experiencia.' },
  { icon: Wrench, title: 'Servicio técnico', description: 'Órdenes, diagnósticos, responsables, repuestos y seguimiento.' },
];

export default function Empresas() {
  return (
    <section id="empresas" className="py-24 sm:py-28 bg-aster-soft">
      <Container>
        <SectionHeading
          title="Soluciones diseñadas alrededor de tu operación."
          subtitle="Para organizaciones de mayor complejidad, Aster diagnostica problemas y diseña soluciones administrativas, comerciales, estratégicas y tecnológicas adaptadas a cada realidad."
        />

        <Reveal delay={80}>
          <EditorialImage
            src="/assets/images/6.png"
            alt="Profesional de operaciones tomando decisiones con información clara"
            title={<>No tomes decisiones importantes con información incompleta.</>}
            subtitle={<><strong>Más claridad para decidir.</strong> Más control para avanzar.</>}
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {services.map((service, i) => {
            const ServiceIcon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-aster-greenSoft text-aster-green mb-5">
                    <ServiceIcon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-aster-black">{service.title}</h3>
                  <p className="mt-2 text-[15px] text-aster-gray leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={180}>
            <div className="h-full rounded-2xl bg-aster-greenSoft border border-aster-green/20 p-6 flex flex-col justify-center">
              <p className="text-[15px] font-semibold text-aster-black leading-relaxed">
                La aplicación Aster puede integrarse cuando aporte valor, pero no es obligatoria para todos los proyectos empresariales.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
