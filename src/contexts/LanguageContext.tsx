import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.programs': 'Programas',
    'nav.projects': 'Proyectos',
    'nav.certifications': 'Certificaciones',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': '¡Hola! Soy',
    'hero.name': 'Mauricio Aldana',
    'hero.title': 'Aspiring Data Scientist',
    'hero.description': 'Apasionado por transformar datos en insights accionables. Especializado en Python, SQL y visualización de datos.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.contact': 'Contáctame',
    
    // About
    'about.title': 'Sobre Mí',
    'about.description': 'Soy estudiante de Ingeniería de Sistemas con una fuerte pasión por el análisis de datos y la ciencia de datos. Tengo experiencia realizando reportes ejecutivos, limpieza de datos y automatizaciones en América Móvil Perú. Actualmente me encuentro trabajando en Apoyo Consultoría como practicante de Analytics.',
    'about.location': 'Lima, Perú',
    'about.university': 'Universidad Nacional Mayor de San Marcos (Mayo 2022 - Diciembre 2026 | VIII ciclo)',
    'about.passion': 'Mi objetivo es convertirme en un Data Scientist, combinando mis habilidades técnicas con mi curiosidad por descubrir patrones ocultos en los datos.',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.analysis': 'Análisis de Datos',
    'skills.visualization': 'Visualización',
    'skills.ml': 'Machine Learning',
    'skills.tools': 'Herramientas',
    
    // Experience
    'experience.title': 'Experiencia Laboral',
    'experience.present': 'Presente',

    // Programs
    'programs.title': 'Programas de Formación',
    
    // Projects
    'projects.title': 'Proyectos',
    'projects.filter.all': 'Todos',
    'projects.filter.analysis': 'Análisis',
    'projects.filter.visualization': 'Visualización',
    'projects.filter.ml': 'Machine Learning',
    'projects.filter.sql': 'SQL',
    'projects.viewProject': 'Ver Proyecto',
    'projects.viewCode': 'Ver Código',
    'projects.viewData': 'Ver Datos',
    'projects.methodology': 'Metodología',
    'projects.technologies': 'Tecnologías Utilizadas',
    'projects.results': 'Resultados',
    'projects.back': 'Volver a Proyectos',
    
    // Certifications
    'certifications.title': 'Certificaciones',
    'certifications.verify': 'Verificar Credencial',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¡Hablemos!',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado con éxito!',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.programs': 'Programs',
    'nav.projects': 'Projects',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello! I am',
    'hero.name': 'Mauricio Aldana',
    'hero.title': 'Aspiring Data Scientist',
    'hero.description': 'Passionate about transforming data into actionable insights. Specialized in Python, SQL, and data visualization.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact Me',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I am a Systems Engineering student with a strong passion for data analysis and data science. I have experience creating executive reports, data cleaning, and automation at América Móvil Peru. Currently working at Apoyo Consultoría as an Analytics Intern.',
    'about.location': 'Lima, Peru',
    'about.university': 'Universidad Nacional Mayor de San Marcos (May 2022 - December 2026 | 8th cycle)',
    'about.passion': 'My goal is to become a Data Scientist, combining my technical skills with my curiosity to discover hidden patterns in data.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.analysis': 'Data Analysis',
    'skills.visualization': 'Visualization',
    'skills.ml': 'Machine Learning',
    'skills.tools': 'Tools',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.present': 'Present',

    // Programs
    'programs.title': 'Training Programs',
    
    // Projects
    'projects.title': 'Projects',
    'projects.filter.all': 'All',
    'projects.filter.analysis': 'Analysis',
    'projects.filter.visualization': 'Visualization',
    'projects.filter.ml': 'Machine Learning',
    'projects.filter.sql': 'SQL',
    'projects.viewProject': 'View Project',
    'projects.viewCode': 'View Code',
    'projects.viewData': 'View Data',
    'projects.methodology': 'Methodology',
    'projects.technologies': 'Technologies Used',
    'projects.results': 'Results',
    'projects.back': 'Back to Projects',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.verify': 'Verify Credential',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Have a project in mind? Let\'s talk!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('portfolio-language');
    return (stored as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
