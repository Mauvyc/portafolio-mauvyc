export interface Experience {
  id: string;
  company: string;
  position: {
    es: string;
    en: string;
  };
  period: {
    start: string;
    end: string | null;
  };
  description: {
    es: string[];
    en: string[];
  };
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: 'america-movil',
    company: 'América Móvil Perú',
    position: {
      es: 'Practicante de Información Comercial',
      en: 'Commercial Information Intern',
    },
    period: {
      start: '2025-06',
      end: '2025-12',
    },
    description: {
      es: [
        'Desarrollo de dashboards en Power BI para monitoreo de KPIs comerciales',
        'Automatización de reportes utilizando Python y Power Automate',
        'Análisis de datos de ventas para identificar oportunidades de mejora',
        'Colaboración con equipos de ventas y marketing para optimizar estrategias',
        'Reducción del 40% en tiempo de generación de reportes mensuales',
      ],
      en: [
        'Development of Power BI dashboards for commercial KPIs monitoring',
        'Report automation using Python and Power Automate',
        'Sales data analysis to identify improvement opportunities',
        'Collaboration with sales and marketing teams to optimize strategies',
        '40% reduction in monthly report generation time',
      ],
    },
    technologies: ['Power BI', 'Python', 'SQL', 'Power Automate', 'Excel'],
  },
  {
    id: 'apoyo-consultoria',
    company: 'Apoyo Consultoría',
    position: {
      es: 'Practicante de Analytics',
      en: 'Analytics Intern',
    },
    period: {
      start: '2026-01',
      end: null,
    },
    description: {
      es: [
        'Desarrollo de reportes ejecutivos para análisis de mercado y clientes',
        'Construcción de modelos de Machine Learning para predicción y segmentación',
        'Limpieza, transformación y procesamiento de grandes volúmenes de datos',
        'Automatización de procesos analíticos utilizando Python y SQL',
        'Colaboración con equipos multifuncionales en proyectos de consultoría',
      ],
      en: [
        'Development of executive reports for market and customer analysis',
        'Building Machine Learning models for prediction and segmentation',
        'Cleaning, transformation, and processing of large data volumes',
        'Automation of analytical processes using Python and SQL',
        'Collaboration with cross-functional teams on consulting projects',
      ],
    },
    technologies: ['Python', 'SQL', 'Pandas', 'Scikit-Learn', 'Power BI', 'Excel'],
  },
];
