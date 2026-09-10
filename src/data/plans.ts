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
        price: '$29.990/mes',
        detail: 'Pago mensual · IVA incluido',
      },
      {
        label: 'Pack 3 meses',
        price: '$74.970 total',
        detail:
          'Equivale a $24.990/mes · IVA incluido',
        saving: 'Ahorras $15.000',
      },
      {
        label: 'Pack 6 meses',
        price: '$125.940 total',
        detail:
          'Equivale a $20.990/mes · IVA incluido',
        saving: 'Ahorras $54.000',
      },
    ],

    modalIntro:
      'Una solución simple para comenzar a digitalizar tu negocio, centralizar la información y tener mayor control sobre ventas, inventario, caja y clientes.',

    modalSections: [
      {
        heading: 'Gestión de tu negocio',
        items: [
          'Ventas y punto de venta',
          'Inventario y movimientos de productos',
          'Control de caja y operaciones',
          'Gestión de clientes y contactos',
          'Dashboard con información del negocio',
          'Reportes básicos',
          'Hasta 5 usuarios',
        ],
      },
      {
        heading: 'Carga de información',
        items: [
          'Carga masiva de productos e inventario',
          'Importación de información para facilitar la puesta en marcha',
          'Carga de compras y mercadería',
          'Digitalización de facturas de compra para agilizar el ingreso de productos y alimentar el inventario',
        ],
      },
      {
        heading: 'Medios de pago e integraciones',
        items: [
          'Posibilidad de integración con Mercado Pago Point',
          'Posibilidad de vinculación con otras soluciones POS compatibles',
          'Integración de los medios de pago del negocio con la operación registrada en Aster',
          'Centralización de información de ventas y pagos en un mismo ecosistema',
        ],
      },
      {
        heading: 'Implementación y acompañamiento',
        items: [
          'Configuración inicial de Aster App',
          'Entrega de credenciales',
          'Capacitación inicial',
          'Soporte Aster',
          'Hasta 5 usuarios incluidos',
        ],
      },
      {
        heading: 'Opciones de contratación',
        items: [
          'Mensual: $29.990/mes · IVA incluido',
          'Pack 3 meses: $74.970 total · Equivale a $24.990/mes · Ahorras $15.000',
          'Pack 6 meses: $125.940 total · Equivale a $20.990/mes · Ahorras $54.000',
        ],
      },
    ],

    modalFooter:
      'Los packs de 3 y 6 meses se pagan por adelantado. Al finalizar el período puedes renovar el pack para mantener el descuento o continuar con el plan mensual al valor vigente. Valores IVA incluido.',
  },

  {
    id: 'avanzado',
    name: 'Aster App Plus',

    subtitle:
      'Más control y herramientas para gestionar tu negocio.',

    badge: 'Recomendado',
    featured: true,

    features: [
      'Todo Aster App Inicia',
      'Hasta 10 usuarios',
      'Manufacturación',
      'Gastos y gestión',
      'Integraciones POS',
      'Herramientas avanzadas',
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
        detail: 'Pago mensual · IVA incluido',
      },
      {
        label: 'Pack 3 meses',
        price: '$89.970 total',
        detail:
          'Equivale a $29.990/mes · IVA incluido',
        saving: 'Ahorras $18.000',
      },
      {
        label: 'Pack 6 meses',
        price: '$151.140 total',
        detail:
          'Equivale a $25.190/mes · IVA incluido',
        saving: 'Ahorras $64.800',
      },
    ],

    modalIntro:
      'Aster App Plus incorpora más herramientas para controlar, gestionar y conectar distintas áreas del negocio desde una misma plataforma.',

    modalSections: [
      {
        heading: 'Todo Aster App Inicia',
        items: [
          'Ventas y punto de venta',
          'Inventario y movimientos',
          'Caja',
          'Clientes y contactos',
          'Dashboard',
          'Reportes',
          'Capacitación y soporte',
        ],
      },
      {
        heading: 'Gestión avanzada',
        items: [
          'Hasta 10 usuarios',
          'Entrega y configuración de credenciales',
          'Toma de inventario inicial',
          'Módulo de Manufacturación',
          'Módulo de gastos',
          'Gestión avanzada de clientes',
          'Herramientas adicionales de control y seguimiento',
        ],
      },
      {
        heading: 'Carga y digitalización',
        items: [
          'Carga masiva de productos e inventario',
          'Importación masiva de información desde planillas u otros registros',
          'Carga de compras y mercadería',
          'Digitalización de facturas de compra para agilizar el ingreso de productos',
          'Las compras registradas pueden alimentar y actualizar el inventario',
        ],
      },
      {
        heading: 'Integraciones de pago',
        items: [
          'Integración con Mercado Pago Point',
          'Posibilidad de integración con otras soluciones POS compatibles',
          'Conexión de medios de pago con la operación de Aster',
          'Centralización de ventas, pagos e información operacional',
        ],
      },
      {
        heading: 'Más información para gestionar',
        items: [
          'Mayor visibilidad sobre la operación del negocio',
          'Información de ventas, inventario, clientes y gastos en un mismo sistema',
          'Trazabilidad de operaciones para conocer qué ocurrió, quién realizó la acción y cuándo',
          'Información disponible para apoyar decisiones de compra, venta y gestión',
        ],
      },
      {
        heading: 'Opciones de contratación',
        items: [
          'Mensual: $35.990/mes · IVA incluido',
          'Pack 3 meses: $89.970 total · Equivale a $29.990/mes · Ahorras $18.000',
          'Pack 6 meses: $151.140 total · Equivale a $25.190/mes · Ahorras $64.800',
        ],
      },
    ],

    modalFooter:
      'Los packs de 3 y 6 meses se pagan por adelantado. Al finalizar el período puedes renovar el pack para mantener el descuento o continuar con el plan mensual al valor vigente. Valores IVA incluido.',
  },

  {
    id: 'aster-avanzado',
    name: 'Plan Aster Avanzado',

    subtitle:
      'Aster App Plus y diagnóstico comercial para llevar tu negocio al siguiente nivel.',

    features: [
      'Aster App Plus',
      'Diagnóstico comercial completo',
      '3 estrategias comerciales sugeridas',
      'Reportes semanales y mensuales',
      'Informe final',
      'Acompañamiento',
    ],

    cta: 'Conocer Aster Avanzado',

    priceMessage:
      'El alcance y valor de Aster Avanzado se definen según las necesidades y objetivos de cada negocio.',

    modalIntro:
      'Una solución personalizada que combina Aster App Plus con diagnóstico, análisis y acompañamiento comercial para detectar oportunidades y trabajar sobre ellas.',

    modalSections: [
      {
        heading: 'Tecnología y gestión',
        items: [
          'Aster App Plus',
          'Hasta 10 usuarios',
          'Entrega de credenciales',
          'Toma de inventario inicial',
          'Capacitación de Aster App',
          'Dashboard',
          'Manufacturación',
          'Módulo de gastos',
          'Gestión de clientes',
          'Integraciones y herramientas de control',
        ],
      },
      {
        heading: 'Diagnóstico comercial',
        items: [
          'Estudio del negocio',
          'Análisis comercial',
          'Estudio de mercado y competencia',
          'Identificación de problemas y oportunidades',
          'Definición de prioridades comerciales',
        ],
      },
      {
        heading: 'Estrategias y seguimiento',
        items: [
          'Entrega de 3 estrategias sugeridas según la realidad del negocio',
          'Reportes semanales',
          'Reportes mensuales',
          'Informe final',
          'Acompañamiento durante el proceso',
        ],
      },
    ],

    modalProcess: [
      'App',
      'Diagnóstico',
      'Estrategias',
      'Acompañamiento',
    ],

    modalFooter:
      'Aster Avanzado combina tecnología e intervención comercial. El alcance y valor se definen según las necesidades y objetivos de cada negocio.',
  },

  {
    id: 'pro',
    name: 'Plan Aster Pro',

    subtitle:
      'Gestión avanzada, estrategia comercial y marketing para hacer crecer tu negocio.',

    features: [
      'Todo Aster Avanzado',
      'Hasta 15 usuarios',
      'Gastos y balances',
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
      'Una solución personalizada que conecta tecnología, gestión, estrategia comercial y marketing para trabajar distintas áreas del crecimiento del negocio.',

    modalSections: [
      {
        heading: 'Gestión avanzada',
        items: [
          'Todo lo incluido en Aster Avanzado',
          'Aster App para hasta 15 usuarios',
          'Automatizaciones e integraciones',
          'Gastos, balances y seguimiento',
          'Herramientas de gestión adaptadas a la operación',
        ],
      },
      {
        heading: 'Estrategia comercial',
        items: [
          'Diagnóstico del negocio',
          'Análisis comercial',
          'Estrategias comerciales',
          'Seguimiento de acciones',
          'Medición y recomendaciones',
        ],
      },
      {
        heading: 'Marketing',
        items: [
          'Plan de Marketing Digital',
          'Meta Ads',
          'Campañas publicitarias',
          'Publicidad pagada en Meta incluida según alcance definido',
          'Seguimiento de resultados',
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
      'El alcance y valor de Aster Pro se definen según las necesidades, objetivos y realidad de cada negocio.',
  },

  {
    id: 'integral',
    name: 'Plan Aster Integral',

    subtitle:
      'Tecnología, estrategia, marketing y gestión continua para tu negocio.',

    features: [
      'Todo Aster Pro',
      'Gastos y balances',
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
      'La solución más completa de Aster para conectar tecnología, gestión, estrategia comercial, marketing y presencia digital.',

    modalSections: [
      {
        heading: 'Solución integral',
        items: [
          'Todo lo incluido en Aster Pro',
          'Tecnología y gestión',
          'Diagnóstico y estrategia comercial',
          'Marketing Digital',
          'Publicidad',
          'Community Manager',
        ],
      },
      {
        heading: 'Gestión continua',
        items: [
          'Gestión continua de redes sociales',
          'Seguimiento comercial',
          'Seguimiento de acciones de marketing',
          'Medición de resultados',
          'Optimización según información y desempeño',
        ],
      },
      {
        heading: 'Todo conectado',
        items: [
          'Información para detectar oportunidades',
          'Estrategias para definir acciones',
          'Tecnología para controlar la operación',
          'Marketing para ejecutar y comunicar',
          'Seguimiento para medir y mejorar',
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
      'El alcance y valor de Aster Integral se definen según la realidad, necesidades y objetivos de cada negocio.',
  },
];