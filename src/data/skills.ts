export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface SkillCategory {
  id: string;
  name: {
    es: string;
    en: string;
  };
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'analysis',
    name: {
      es: 'Análisis de Datos',
      en: 'Data Analysis',
    },
    skills: [
      { name: 'Python', icon: '🐍', level: 4 },
      { name: 'Pandas', icon: '🐼', level: 4 },
      { name: 'NumPy', icon: '🔢', level: 4 },
      { name: 'SQL', icon: '💾', level: 5 },
      { name: 'Excel', icon: '📊', level: 5 },
    ],
  },
  {
    id: 'visualization',
    name: {
      es: 'Visualización',
      en: 'Visualization',
    },
    skills: [
      { name: 'Power BI', icon: '📈', level: 5 },
      { name: 'Matplotlib', icon: '📉', level: 4 },
      { name: 'Seaborn', icon: '🎨', level: 4 },
      { name: 'Plotly', icon: '📊', level: 3 },
    ],
  },
  {
    id: 'ml',
    name: {
      es: 'Machine Learning',
      en: 'Machine Learning',
    },
    skills: [
      { name: 'Scikit-Learn', icon: '🤖', level: 3 },
      { name: 'Statistics', icon: '📐', level: 4 },
      { name: 'Feature Engineering', icon: '⚙️', level: 3 },
    ],
  },
  {
    id: 'tools',
    name: {
      es: 'Herramientas',
      en: 'Tools',
    },
    skills: [
      { name: 'Git/GitHub', icon: '🔀', level: 4 },
      { name: 'Azure', icon: '☁️', level: 3 },
      { name: 'Power Automate', icon: '⚡', level: 4 },
      { name: 'Jupyter', icon: '📓', level: 5 },
    ],
  },
];
