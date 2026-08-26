import {
  Boxes,
  Wallet,
  BellRing,
  Heart,
  Users,
  RotateCcw,
  Wrench,
  Scale,
  LucideIcon,
} from 'lucide-react';

export interface AppModule {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
}

export const appModules: AppModule[] = [
  {
    id: 'inventario',
    name: 'Inventario',
    icon: Boxes,
    description: 'Stock, entradas, salidas, compras, mermas, vencimientos, proveedores, costos, márgenes y rotación.',
    tags: ['Stock', 'Entradas', 'Salidas', 'Compras', 'Mermas', 'Vencimientos', 'Proveedores', 'Costos', 'Márgenes', 'Rotación'],
  },
  {
    id: 'ventas',
    name: 'Ventas y caja',
    icon: Wallet,
    description: 'Ventas por periodo, producto, trabajador, horario, ticket promedio, métodos de pago, aperturas, cierres y diferencias.',
    tags: ['Por periodo', 'Por producto', 'Por trabajador', 'Ticket promedio', 'Métodos de pago', 'Aperturas', 'Cierres', 'Diferencias'],
  },
  {
    id: 'alertas',
    name: 'Alertas',
    icon: BellRing,
    description: 'Stock crítico, vencimientos, diferencias de caja, movimientos importantes y cambios relevantes.',
    tags: ['Stock crítico', 'Vencimientos', 'Diferencias de caja', 'Movimientos importantes', 'Cambios relevantes'],
  },
  {
    id: 'clientes',
    name: 'Clientes y fidelización',
    icon: Heart,
    description: 'Base de clientes, historial, frecuencia, última compra, promociones y beneficios.',
    tags: ['Base de clientes', 'Historial', 'Frecuencia', 'Última compra', 'Promociones', 'Beneficios'],
  },
  {
    id: 'personal',
    name: 'Personal y permisos',
    icon: Users,
    description: 'Usuarios, perfiles, accesos, responsabilidades e historial de operaciones.',
    tags: ['Usuarios', 'Perfiles', 'Accesos', 'Responsabilidades', 'Historial de operaciones'],
  },
  {
    id: 'postventa',
    name: 'Postventa',
    icon: RotateCcw,
    description: 'Reclamos, cambios, devoluciones, garantías, solicitudes y seguimiento.',
    tags: ['Reclamos', 'Cambios', 'Devoluciones', 'Garantías', 'Solicitudes', 'Seguimiento'],
  },
  {
    id: 'servicio-tecnico',
    name: 'Servicio técnico',
    icon: Wrench,
    description: 'Ingreso, diagnóstico, presupuesto, aprobación, reparación y entrega.',
    tags: ['Ingreso', 'Diagnóstico', 'Presupuesto', 'Aprobación', 'Reparación', 'Entrega'],
  },
  {
    id: 'gastos-balances',
    name: 'Gastos y Balances',
    icon: Scale,
    description:
      'Una visión más completa de lo que vende, gasta y genera tu negocio. Permite registrar y visualizar gastos fijos, gastos variables y otros gastos. El balance se muestra dentro del dashboard junto con ventas y otros indicadores para entregar al cliente una visión global y precisa de su negocio.',
    tags: ['Gastos fijos', 'Gastos variables', 'Otros gastos', 'Balance', 'Dashboard'],
  },
];
