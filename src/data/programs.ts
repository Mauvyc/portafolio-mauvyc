export interface Program {
  id: string;
  name: string;
  organization: string;
  period: {
    start: string;
    end: string | null;
  };
  description: {
    es: string;
    en: string;
  };
  highlights: {
    es: string[];
    en: string[];
  };
  skills: string[];
  status: 'completed' | 'in-progress';
}

export const programs: Program[] = [
  {
    id: 'techy-winter-lab',
    name: 'Techy Winter Lab',
    organization: 'Techy',
    period: {
      start: '2025-09',
      end: '2025-12',
    },
    description: {
      es: 'Programa intensivo de formación en Data Science, seleccionado entre los 21 finalistas de 160 postulantes (13% de aceptación).',
      en: 'Intensive Data Science training program, selected among the 21 finalists from 160 applicants (13% acceptance rate).',
    },
    highlights: {
      es: [
        'Entrenamiento intensivo en Python y fundamentos de Machine Learning',
        'Aplicación de técnicas analíticas en proyectos de ciencia de datos',
        'Desarrollo de habilidades blandas: trabajo en equipo, comunicación efectiva y resolución de problemas',
        'Uso estratégico de herramientas de IA para optimizar el flujo de trabajo en proyectos de datos',
        'Implementación de metodologías ágiles para gestión de proyectos analíticos',
        'Networking con profesionales del sector tecnológico y data science',
      ],
      en: [
        'Intensive training in Python and Machine Learning fundamentals',
        'Application of analytical techniques in data science projects',
        'Development of soft skills: teamwork, effective communication, and problem-solving',
        'Strategic use of AI tools to optimize workflow in data projects',
        'Implementation of agile methodologies for analytical project management',
        'Networking with professionals from the technology and data science sector',
      ],
    },
    skills: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'AI Tools',
      'Team Collaboration',
      'Agile Methodologies',
    ],
    status: 'completed',
  },
];

export const getProgramById = (id: string): Program | undefined => {
  return programs.find(program => program.id === id);
};
