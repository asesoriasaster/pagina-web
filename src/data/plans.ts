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

  pricePrimary?: string;
  priceUnit?: string;
  pricePrimaryLabel?: string;
  priceSecondary?: string;
  priceSecondaryLabel?: string;
  extra?: string;

  continuityTitle?: string;
  continuityPrice?: string;
  continuityUnit?: string;
  continuityDetail?: string;

  priceMessage?: string;

  options?: PlanOption[];

  modalIntro: string;
  modalSections: PlanModalSection[];
  modalProcess?: string[];
  modalFooter?: string;
}

export const plans: Plan[] = [
  {
    id: 'inicia',
    name: 'Aster App Inicia',

    subtitle:
      'Empieza a ordenar y digitalizar tu negocio.',

    features: [
      'Aster App Básico',
      'Hasta 5 usuarios',
      'Ventas, inventario y caja',
      'Clientes y dashboard',
      'Reportes básicos',
      'Capacitación y soporte',
    ],

    cta: 'Conocer Aster Inicia',

    pricePrimary: '$29.990',
    priceUnit: '/mes',

    pricePrimaryLabel:
      'Valores IVA incluido',

    options: [
      {
        label: 'Mensual',
        price: 'Desde $29.990/mes',
        detail: 'IVA incluido',
      },
      {
        label: 'Pack 3 meses',
        price: 'Desde $24.990 mensual',
        detail: 'IVA incluido',
        saving: '17% OFF',
      },
      {
        label: 'Pack 6 meses',
        price: 'Desde $20.990 mensual',
        detail: 'IVA incluido',
        saving: '30% OFF',
      },
    ],

    modalIntro:
      'La forma más simple de comenzar a ordenar y controlar tu negocio con Aster.',

    modalSections: [
      {
        heading: 'Incluye',
        items: [
          'Ventas, inventario, caja y clientes',
          'Dashboard y reportes básicos',
          'Hasta 5 usuarios',
          'Capacitación y soporte inicial',
        ],
      },
      {
        heading: 'Opciones de contratación',
        items: [
          'Mensual: Desde $29.990/mes · IVA incluido',
          'Pack 3 meses: Desde $24.990 mensual · 17% OFF · IVA incluido',
          'Pack 6 meses: Desde $20.990 mensual · 30% OFF · IVA incluido',
        ],
      },
    ],

    modalFooter:
      'Valores IVA incluido.',
  },

  {
    id: 'avanzado',
    name: 'Aster App Plus',

    subtitle:
      'Más control y herramientas para gestionar tu negocio.',

    badge: 'Recomendado',
    featured: true,

    features: [
      'Dashboard',
      'Capacitación',
      'Manufacturación',
      'Integración Mercado Pago',
      'Módulo de gastos',
      'Módulo de gestión de clientes',
    ],

    cta: 'Conocer Aster App Plus',

    pricePrimary: '$35.990',
    priceUnit: '/mes',

    pricePrimaryLabel:
      'IVA incluido',

    options: [
      {
        label: 'Mensual',
        price: '$35.990/mes',
        detail: 'IVA incluido',
      },
      {
        label: 'Pack 3 meses',
        price: '$29.990 Mensual',
        detail: 'IVA incluido',
        saving: '17% OFF',
      },
      {
        label: 'Pack 6 meses',
        price: '$25.190 Mensual',
        detail: 'IVA incluido',
        saving: '30% OFF',
      },
    ],

    modalIntro:
      'Más herramientas para controlar y gestionar tu negocio con Aster.',

    modalSections: [
      {
        heading: 'Incluye',
        items: [
          '10 usuarios',
          'Entrega de credenciales',
          'Toma de inventario inicial',
          'Capacitación del CRM',
          'Dashboard',
          'Módulo Manufacturación',
          'Módulo de gastos',
          'Módulo de gestión de clientes',
        ],
      },
      {
        heading: 'Opciones de contratación',
        items: [
          'Mensual: $35.990/mes · IVA incluido',
          'Pack 3 meses: $29.990 mensual · 17% OFF · IVA incluido',
          'Pack 6 meses: $25.190 mensual · 30% OFF · IVA incluido',
        ],
      },
    ],

    modalFooter:
      'Valores IVA incluido.',
  },

  {
    id: 'pro',
    name: 'Plan Aster Pro',

    subtitle:
      'Gestión avanzada, estrategia comercial y marketing para hacer crecer tu negocio.',

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

    priceMessage:
      'El alcance y valor de Aster Pro se definen según las necesidades y objetivos de cada negocio.',

    modalIntro:
      'Una solución personalizada que conecta gestión, estrategia comercial y marketing.',

    modalSections: [
      {
        heading: 'Gestión avanzada',
        items: [
          'Aster App para hasta 15 usuarios',
          'Automatizaciones e integraciones',
          'Gastos, balances y seguimiento',
        ],
      },
      {
        heading: 'Estrategia y marketing',
        items: [
          'Diagnóstico y estrategias comerciales',
          'Plan de Marketing Digital',
          'Campañas y publicidad en Meta',
        ],
      },
    ],

    modalProcess: [
      'Diagnóstico',
      'Estrategia',
      'Ejecución',
      'Medición',
    ],

    modalFooter:
      'Alcance y valor definidos según las necesidades de cada negocio.',
  },

  {
    id: 'integral',
    name: 'Plan Aster Integral',

    subtitle:
      'Tecnología, estrategia, marketing y gestión continua para tu negocio.',

    features: [
      'Todo Aster Pro',
      'Gastos y Balances',
      'Diagnóstico y estrategias',
      'Plan de Marketing Digital',
      'Publicidad pagada en Meta incluida',
      'Community Manager',
      'Gestión continua de redes sociales',
      'Seguimiento y optimización',
    ],

    cta: 'Conocer Aster Integral',

    priceMessage:
      'El alcance y valor de Aster Integral se definen según la realidad y necesidades de cada negocio.',

    modalIntro:
      'La solución más completa de Aster para centralizar gestión, estrategia y presencia digital.',

    modalSections: [
      {
        heading: 'Solución integral',
        items: [
          'Todo lo incluido en Aster Pro',
          'Community Manager',
          'Gestión continua de redes sociales',
          'Seguimiento y optimización',
        ],
      },
      {
        heading: 'Todo conectado',
        items: [
          'Información para detectar oportunidades',
          'Estrategias para actuar',
          'Marketing para ejecutar y medir resultados',
        ],
      },
    ],

    modalProcess: [
      'Gestión',
      'Estrategia',
      'Marketing',
      'Optimización',
    ],

    modalFooter:
      'Alcance y valor definidos según la realidad y necesidades de cada negocio.',
  },
];
