export interface Certification {
  id: string;
  name: {
    es: string;
    en: string;
  };
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo: string;
}

export const certifications: Certification[] = [
  {
    id: 'oracle-sql',
    name: {
      es: 'Taller: Storytelling Aplicado en Proyectos Digitales',
      en: 'Workshop: Storytelling Applied in Digital Projects',
    },
    issuer: 'Usil EPG',
    date: '2025-11',
    credentialUrl: 'https://docs.usil.edu.pe/verificar-documento/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNJTFJFUE9TSVRPUlkiLCJwYXNzIjoieDk3bHNIVUJoMmdvIiwiY2QiOjI4MDAxMywiaWF0IjoiMTc2MjQ2MTExNiJ9ovlk.bNQFU2S5PSrfckiJKWh602QizbueGOlUwEmMyzoAtgA',
    logo: '💡',
  },
  {
    id: 'cisco-networking',
    name: {
      es: 'Introducción a la Ciberseguridad',
      en: 'Introduction to Cybersecurity',
    },
    issuer: 'Cisco',
    date: '2025-05',
    credentialUrl: 'https://www.credly.com/badges/8e2f3db4-4a76-45a2-9bef-104cf0fb3abc',
    logo: '🌐',
  },
  {
    id: 'guayerd-data',
    name: {
      es: 'Especialización en Ciencia de Datos con Python',
      en: 'Specialization in Data Science with Python',
    },
    issuer: 'Data Analitica',
    date: '2023-07',
    credentialUrl: 'https://drive.google.com/file/d/1_i_qqZS10XNgUuAnV4oNk7WstsY-tVja/view?usp=sharing',
    logo: '📊',
  },
  {
    id: 'google-analytics',
    name: {
      es: 'Análisis de Datos con Python',
      en: 'Data Analysis with Python',
    },
    issuer: 'freeCodeCamp',
    date: '2025-11',
    credentialUrl: 'https://www.freecodecamp.org/certification/mauvyc/data-analysis-with-python-v7',
    logo: '🗄️'},
  {
    id: 'python-coursera',
    name: {
      es: 'SQL',
      en: 'SQL',
    },
    issuer: '365DataScience',
    date: '2025-11',
    credentialUrl: 'https://drive.google.com/file/d/1YizzA19JdzTUBVL9Slm5lxKbCf4RYwBD/view?usp=sharing',
    logo: '🐍',
  },
  {
    id: 'power-bi',
    name: {
      es: 'Extraer, transformar y cargar datos en Power BI',
      en: 'MExtract, Transform and Load Data in Power BI',
    },
    issuer: 'Coursera',
    date: '2025-12',
    credentialUrl: 'https://coursera.org/share/9befc6f63405ee443ac5847e62032f71',
    logo: '📈',
  },
];
