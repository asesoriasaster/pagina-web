import {
  ClipboardList,
  Search,
  Boxes,
  Settings,
  MonitorSmartphone,
  GraduationCap,
  Rocket,
  LifeBuoy,
  LucideIcon,
} from 'lucide-react';

export interface ImplementationStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const implementationSteps: ImplementationStep[] = [
  { number: '01', title: 'Diagnóstico', description: 'Entendemos tu operación y tus necesidades reales.', icon: Search },
  { number: '02', title: 'Levantamiento', description: 'Relevamos procesos, productos y puntos críticos.', icon: ClipboardList },
  { number: '03', title: 'Inventario inicial', description: 'Cargamos tu inventario para partir con datos reales.', icon: Boxes },
  { number: '04', title: 'Configuración', description: 'Ajustamos Aster a la realidad de tu negocio.', icon: Settings },
  { number: '05', title: 'Equipamiento', description: 'Instalamos los dispositivos que tu operación requiere.', icon: MonitorSmartphone },
  { number: '06', title: 'Capacitación', description: 'Formamos a tu equipo para usar Aster con confianza.', icon: GraduationCap },
  { number: '07', title: 'Puesta en marcha', description: 'Tu negocio comienza a operar con Aster activo.', icon: Rocket },
  { number: '08', title: 'Soporte', description: 'Te acompañamos después de la implementación.', icon: LifeBuoy },
];
