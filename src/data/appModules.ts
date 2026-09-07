import { Boxes, Wallet, BellRing, Heart, Users, RotateCcw, Wrench, Scale, type LucideIcon } from 'lucide-react';

export interface AppModule {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
}

export const appModules: AppModule[] = [
  {
    id: 'inventario', name: 'Inventario', icon: Boxes,
    description: 'Conoce tu stock y planifica tus compras con información real.',
    tags: ['Stock y movimientos', 'Compras y proveedores', 'Mermas y vencimientos', 'Costos, márgenes y rotación'],
  },
  {
    id: 'ventas', name: 'Ventas', icon: Wallet,
    description: 'Revisa cuánto vendes, cómo te pagan y cómo cierra tu caja.',
    tags: ['Por fecha, producto y vendedor', 'Horarios y ticket promedio', 'Métodos de pago', 'Aperturas, cierres y diferencias'],
  },
  {
    id: 'gastos-balances', name: 'Gastos y balances', icon: Scale,
    description: 'Compara ventas y gastos para entender el resultado de tu negocio.',
    tags: ['Gastos fijos y variables', 'Otros gastos', 'Balance del negocio', 'Indicadores en el panel'],
  },
  {
    id: 'alertas', name: 'Alertas', icon: BellRing,
    description: 'Identifica a tiempo lo que necesita tu atención.',
    tags: ['Stock crítico', 'Próximos vencimientos', 'Diferencias de caja', 'Movimientos y cambios relevantes'],
  },
  {
    id: 'clientes', name: 'Clientes', icon: Heart,
    description: 'Conoce sus hábitos de compra y crea motivos para que vuelvan.',
    tags: ['Base e historial de clientes', 'Frecuencia y última compra', 'Promociones y beneficios'],
  },
  {
    id: 'personal', name: 'Equipo y permisos', icon: Users,
    description: 'Define quién puede hacer qué y consulta su actividad.',
    tags: ['Usuarios y perfiles', 'Accesos y responsabilidades', 'Historial de operaciones'],
  },
  {
    id: 'postventa', name: 'Postventa', icon: RotateCcw,
    description: 'Da seguimiento a cada solicitud después de la venta.',
    tags: ['Reclamos y solicitudes', 'Cambios y devoluciones', 'Garantías y seguimiento'],
  },
  {
    id: 'servicio-tecnico', name: 'Servicio técnico', icon: Wrench,
    description: 'Organiza cada reparación, desde el ingreso hasta la entrega.',
    tags: ['Ingreso y diagnóstico', 'Presupuesto y aprobación', 'Reparación y entrega'],
  },
];
