export interface PlanOption {
  label: string;
  price: string;
  detail?: string;
  saving?: string;
}

export interface PlanModalSection {
  heading: string;
  items: string[];
}

export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
  precededBy?: string;
  highlight?: string;
  discountBadge?: string;
  pricePrimary: string;
  priceUnit?: string;
  pricePrimaryLabel: string;
  priceSecondary?: string;
  priceSecondaryLabel?: string;
  extra?: string;
  options?: PlanOption[];
  modalIntro: string;
  modalSections: PlanModalSection[];
  modalProcess?: string[];
  modalFooter?: string;
}

export const plans: Plan[] = [
  {
    id: 'inicia',
    name: 'Aster Inicia',
    subtitle: 'Empieza a ordenar y digitalizar tu negocio.',
    features: [
      'Aster App Básico',
      'Hasta 5 usuarios',
      'Ventas, inventario y caja',
      'Clientes y dashboard',
      'Reportes básicos',
      'Capacitación y soporte',
    ],
    cta: 'Conocer Aster Inicia',
    highlight: '15 días de prueba',
    discountBadge: '50% de descuento en el primer mes',
    pricePrimary: '$29.990',
    priceUnit: '/ mes',
    pricePrimaryLabel: 'IVA incluido',
    priceSecondary: 'Primer mes: $14.995 · Implementación: $55.000',
    priceSecondaryLabel: 'Total inicial: $69.995 · IVA incluido',
    options: [
      { label: 'Mensual', price: '$29.990/mes' },
      { label: 'Trimestral', price: '$24.990/mes', detail: '$74.970 total', saving: 'Ahorro: $15.000' },
      { label: 'Semestral', price: '$20.990/mes', detail: '$125.940 total', saving: 'Ahorro: $54.000' },
    ],
    modalIntro:
      'Aster Inicia es el punto de partida para ordenar y digitalizar tu negocio. Incluye la app, implementación inicial, capacitación y soporte para que comiences a operar con tu información visible.',
    modalSections: [
      {
        heading: 'Servicios incluidos',
        items: [
          'Aster App Básico',
          'Hasta 5 usuarios',
          'Dashboard, ventas, inventario, caja y clientes',
          'Reportes básicos',
          'Entrega de credenciales',
          'Capacitación inicial',
          'Soporte Aster',
          'Tips de buenas prácticas',
        ],
      },
      {
        heading: 'Implementación',
        items: [
          'Implementación inicial: $55.000 · IVA incluido',
          'Entrega de credenciales y configuración de usuarios',
          'Capacitación inicial para comenzar a operar',
        ],
      },
      {
        heading: 'Opciones de contratación',
        items: [
          'Mensual: $29.990/mes · IVA incluido',
          'Trimestral: $24.990/mes · $74.970 total · Ahorro: $15.000',
          'Semestral: $20.990/mes · $125.940 total · Ahorro: $54.000',
          '15 días de prueba',
          '50% de descuento en el primer mes — Primer mes: $14.995 · IVA incluido',
        ],
      },
    ],
    modalFooter: 'Todos los valores incluyen IVA.',
  },
  {
    id: 'avanzado',
    name: 'Aster Avanzado',
    subtitle: 'Más control para tu negocio. Más estrategia para hacerlo crecer.',
    badge: 'Recomendado',
    featured: true,
    precededBy: 'Programa inicial de 3 meses',
    features: [
      'Todo Aster Inicia',
      'Hasta 10 usuarios',
      'Alertas y CRM avanzado',
      'Gastos y Balances',
      'Diagnóstico y análisis comercial',
      'Reportes semanales y mensuales',
      '3 estrategias comerciales sugeridas',
      'Informe final',
    ],
    cta: 'Conocer Aster Avanzado',
    pricePrimary: '$108.963',
    priceUnit: '/ mes',
    pricePrimaryLabel: 'durante 3 meses · IVA incluido',
    priceSecondary: 'Valor total programa: $326.890',
    priceSecondaryLabel: 'IVA incluido',
    extra: 'Después del programa: $33.900/mes · IVA incluido',
    modalIntro:
      'Durante 3 meses, Aster combina tecnología, diagnóstico, análisis y estrategia comercial para entregar mayor control y claridad sobre tu negocio.',
    modalSections: [
      {
        heading: 'Diagnóstico y análisis comercial',
        items: [
          'Funcionamiento general del negocio',
          'Situación comercial',
          'Ventas',
          'Clientes',
          'Comportamiento de compra',
          'Mercado',
          'Competencia',
          'Fortalezas',
          'Oportunidades',
          'Información obtenida desde Aster',
          'Evolución de indicadores',
        ],
      },
      {
        heading: 'Reportes',
        items: [
          'Reportes semanales',
          'Reportes mensuales',
          'Informe final al terminar los 3 meses',
        ],
      },
      {
        heading: '3 estrategias comerciales sugeridas según el tipo de negocio',
        items: [
          'Estrategia de referidos',
          'Estrategia de fidelización',
          'Recuperación de clientes',
          'Estrategia WhatsApp Business',
          'Plan de ventas aceleradas',
          'Plan cliente frecuente',
          'Plan nuevos clientes',
        ],
      },
    ],
    modalFooter:
      'Después del programa inicial, el cliente continúa pagando solamente $33.900/mes · IVA incluido por Aster Avanzado.',
  },
  {
    id: 'pro',
    name: 'Aster Pro',
    subtitle: 'Gestión avanzada, estrategia comercial y marketing para hacer crecer tu negocio.',
    precededBy: 'Programa inicial de 3 meses',
    features: [
      'Todo Aster Avanzado',
      'Hasta 15 usuarios',
      'Gastos y Balances',
      'Automatizaciones e integraciones',
      'Diagnóstico y estrategias',
      'Plan de Marketing Digital',
      'Meta Ads',
      'Publicidad pagada en Meta incluida',
    ],
    cta: 'Conocer Aster Pro',
    pricePrimary: '$417.660',
    priceUnit: '/ mes',
    pricePrimaryLabel: 'durante 3 meses · IVA incluido',
    priceSecondary: 'Valor total programa: $1.252.980',
    priceSecondaryLabel: 'IVA incluido',
    extra: 'Después: $59.990/mes · IVA incluido',
    modalIntro:
      'Aster Pro combina gestión avanzada, estrategia comercial y un plan de marketing digital completo para hacer crecer tu negocio durante 3 meses.',
    modalSections: [
      {
        heading: 'Diagnóstico y análisis comercial',
        items: [
          'Funcionamiento general del negocio',
          'Situación comercial, ventas y clientes',
          'Comportamiento de compra, mercado y competencia',
          'Fortalezas y oportunidades',
          'Información obtenida desde Aster',
          'Evolución de indicadores',
        ],
      },
      {
        heading: 'Reportes',
        items: [
          'Reportes semanales',
          'Reportes mensuales',
          'Informe final al terminar los 3 meses',
        ],
      },
      {
        heading: '3 estrategias comerciales sugeridas según el tipo de negocio',
        items: [
          'Estrategia de referidos',
          'Estrategia de fidelización',
          'Recuperación de clientes',
          'Estrategia WhatsApp Business',
          'Plan de ventas aceleradas',
          'Plan cliente frecuente',
          'Plan nuevos clientes',
        ],
      },
      {
        heading: 'Plan de Marketing Digital',
        items: [
          'Vinculación/configuración de cuentas Meta',
          'Facebook, Instagram, Meta Business Suite y Meta Ads',
          'Definición de públicos y segmentación',
          'Planificación de campañas',
          'Contenido comercial y copies publicitarios',
          'Piezas para campañas',
          'Promoción de productos o servicios',
          'Seguimiento, medición y optimización',
        ],
      },
      {
        heading: 'Publicidad pagada en Meta',
        items: [
          'El presupuesto destinado a publicidad pagada en Meta está incluido dentro del valor del programa',
          'Campañas orientadas a alcance, reconocimiento, tráfico, interacción, consultas, WhatsApp, productos, servicios, promociones, captación de clientes y ventas cuando corresponda',
        ],
      },
    ],
    modalProcess: ['Información', 'Diagnóstico', 'Estrategia', 'Marketing', 'Difusión', 'Medición'],
    modalFooter:
      'Después de 3 meses, el cliente continúa pagando solamente $59.990/mes · IVA incluido por Aster Pro.',
  },
  {
    id: 'integral',
    name: 'Aster Integral',
    subtitle: 'Tecnología, estrategia, marketing y gestión continua para tu negocio.',
    precededBy: 'Programa inicial de 3 meses',
    features: [
      'Todo Aster Pro',
      'Gastos y Balances',
      'Diagnóstico y estrategias',
      'Plan de Marketing Digital',
      'Publicidad pagada en Meta incluida',
      'Community Manager por 3 meses',
      'Gestión continua de redes sociales',
      'Seguimiento y optimización',
    ],
    cta: 'Conocer Aster Integral',
    pricePrimary: '$617.660',
    priceUnit: '/ mes',
    pricePrimaryLabel: 'durante 3 meses · IVA incluido',
    priceSecondary: 'Valor total programa: $1.852.980',
    priceSecondaryLabel: 'IVA incluido',
    extra: 'Después, si no se renuevan servicios adicionales: $59.990/mes · IVA incluido por Aster Pro',
    modalIntro:
      'Aster Integral es la solución más completa: tecnología, estrategia comercial, marketing digital y gestión continua de redes sociales durante 3 meses.',
    modalSections: [
      {
        heading: 'Diagnóstico y análisis comercial',
        items: [
          'Funcionamiento general del negocio',
          'Situación comercial, ventas y clientes',
          'Comportamiento de compra, mercado y competencia',
          'Fortalezas y oportunidades',
          'Información obtenida desde Aster',
          'Evolución de indicadores',
        ],
      },
      {
        heading: 'Reportes',
        items: [
          'Reportes semanales',
          'Reportes mensuales',
          'Informe final al terminar los 3 meses',
        ],
      },
      {
        heading: '3 estrategias comerciales sugeridas según el tipo de negocio',
        items: [
          'Estrategia de referidos',
          'Estrategia de fidelización',
          'Recuperación de clientes',
          'Estrategia WhatsApp Business',
          'Plan de ventas aceleradas',
          'Plan cliente frecuente',
          'Plan nuevos clientes',
        ],
      },
      {
        heading: 'Plan de Marketing Digital',
        items: [
          'Vinculación/configuración de cuentas Meta',
          'Facebook, Instagram, Meta Business Suite y Meta Ads',
          'Definición de públicos, segmentación y planificación de campañas',
          'Contenido comercial, copies publicitarios y piezas para campañas',
          'Promoción de productos o servicios',
          'Seguimiento, medición y optimización',
        ],
      },
      {
        heading: 'Publicidad pagada en Meta',
        items: [
          'El presupuesto destinado a publicidad pagada en Meta está incluido dentro del valor del programa',
          'Campañas orientadas a alcance, reconocimiento, tráfico, interacción, consultas, WhatsApp, productos, servicios, promociones, captación de clientes y ventas cuando corresponda',
        ],
      },
      {
        heading: 'Community Manager (primeros 3 meses)',
        items: [
          'Administración continua de redes sociales',
          'Coordinación con el Plan de Marketing',
          'Programación y publicación de contenido',
          'Comunicación de productos, servicios y promociones',
          'Gestión básica de interacción',
          'Revisión de comentarios y actividad',
          'Coordinación entre contenido orgánico y campañas pagadas',
          'Adaptación de comunicación según estrategias comerciales',
          'Seguimiento de actividad digital',
          'Construcción de una presencia digital coherente',
        ],
      },
    ],
    modalProcess: ['Aster App', 'Diagnóstico', 'Estrategia', 'Marketing', 'Community Manager', 'Publicidad', 'Medición'],
    modalFooter:
      'El servicio de Community Manager incluido corresponde a los primeros 3 meses. Después, si no se renuevan servicios adicionales: $59.990/mes · IVA incluido por Aster Pro.',
  },
];
