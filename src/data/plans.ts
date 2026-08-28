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
    name: 'Aster Inicia',

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

    precededBy:
      'Programa inicial · primer pago',

    pricePrimary: '$84.990',

    pricePrimaryLabel:
      'Implementación + primera mensualidad · IVA incluido',

    priceSecondary:
      '$55.000 implementación + $29.990 primer mes',

    continuityTitle:
      'Continuidad mensual',

    continuityPrice: '$29.990',

    continuityUnit: '/ mes',

    continuityDetail:
      'Desde el segundo mes · IVA incluido',

    options: [
      {
        label: 'Mensual',
        price: '$29.990/mes',
        detail: 'IVA incluido',
      },
      {
        label: 'Trimestral',
        price: '$24.990/mes',
        detail:
          '$74.970 total · IVA incluido',
        saving: 'Ahorras $15.000',
      },
      {
        label: 'Semestral',
        price: '$20.990/mes',
        detail:
          '$125.940 total · IVA incluido',
        saving: 'Ahorras $54.000',
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
        heading: 'Primer pago',
        items: [
          'Programa inicial: $84.990 · IVA incluido',
          'Incluye implementación de $55.000',
          'Incluye primera mensualidad de $29.990',
        ],
      },
      {
        heading: 'Continuidad',
        items: [
          'Desde el segundo mes: $29.990/mes · IVA incluido',
          'También disponibles modalidades trimestral y semestral',
        ],
      },
    ],

    modalFooter:
      'Ideal para negocios que necesitan comenzar a digitalizar y centralizar su operación.',
  },

  {
    id: 'avanzado',
    name: 'Aster Avanzado',

    subtitle:
      'Más control para tu negocio. Más estrategia para hacerlo crecer.',

    badge: 'Recomendado',
    featured: true,
    precededBy:
      'Programa inicial de 3 meses',

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

    pricePrimaryLabel:
      'durante 3 meses · IVA incluido',

    priceSecondary:
      'Valor total programa: $326.890',

    priceSecondaryLabel:
      'IVA incluido',

    continuityTitle:
      'Después del programa',

    continuityPrice: '$33.900',

    continuityUnit: '/ mes',

    continuityDetail:
      'IVA incluido',

    modalIntro:
      'Tecnología y acompañamiento comercial para entender mejor tu negocio y tomar mejores decisiones.',

    modalSections: [
      {
        heading: 'Más control',
        items: [
          'Aster App para hasta 10 usuarios',
          'CRM, alertas, gastos y balances',
          'Reportes y seguimiento comercial',
        ],
      },
      {
        heading: 'Más estrategia',
        items: [
          'Diagnóstico comercial',
          '3 estrategias sugeridas según tu negocio',
          'Informe final con oportunidades y recomendaciones',
        ],
      },
      {
        heading: 'Continuidad',
        items: [
          'Programa inicial de 3 meses',
          'Valor total del programa: $326.890 · IVA incluido',
          'Después del programa: $33.900/mes · IVA incluido',
        ],
      },
    ],

    modalFooter:
      'Después del programa inicial continúas con Aster Avanzado por $33.900/mes · IVA incluido.',
  },

  {
    id: 'pro',
    name: 'Aster Pro',

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
    name: 'Aster Integral',

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