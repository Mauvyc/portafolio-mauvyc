export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  shortDescription: {
    es: string;
    en: string;
  };
  fullDescription: {
    es: string;
    en: string;
  };
  image: string;
  gallery?: string[];
  technologies: string[];
  category: 'analysis' | 'visualization' | 'ml' | 'sql';
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  dataUrl?: string;
  methodology: {
    es: string[];
    en: string[];
  };
  results: {
    es: string;
    en: string;
  };
}

export const projects: Project[] = [
  {
    id: 'dashboard-kpis',
    title: {
      es: 'Dashboard de KPIs Comerciales',
      en: 'Commercial KPIs Dashboard',
    },
    shortDescription: {
      es: 'Dashboard interactivo en Power BI para monitorear KPIs de ventas y rendimiento comercial.',
      en: 'Interactive Power BI dashboard to monitor sales and commercial performance KPIs.',
    },
    fullDescription: {
      es: 'Desarrollo de un dashboard completo en Power BI que permite visualizar y analizar los principales indicadores de rendimiento comercial. Incluye métricas de ventas, conversión, ticket promedio y análisis por región.',
      en: 'Development of a complete Power BI dashboard that allows visualizing and analyzing key commercial performance indicators. Includes sales metrics, conversion, average ticket, and regional analysis.',
    },
    image: '/placeholder.svg',
    technologies: ['Power BI', 'DAX', 'Excel', 'SQL Server'],
    category: 'visualization',
    date: '2024-01',
    githubUrl: 'https://github.com/Mauvyc/dashboard-kpis',
    methodology: {
      es: [
        'Recopilación de datos de múltiples fuentes (SQL Server, Excel)',
        'Limpieza y transformación de datos con Power Query',
        'Diseño del modelo de datos en estrella',
        'Creación de medidas DAX para KPIs',
        'Diseño visual e interactivo del dashboard',
      ],
      en: [
        'Data collection from multiple sources (SQL Server, Excel)',
        'Data cleaning and transformation with Power Query',
        'Star schema data model design',
        'DAX measures creation for KPIs',
        'Visual and interactive dashboard design',
      ],
    },
    results: {
      es: 'Reducción del 40% en tiempo de generación de reportes mensuales. Los gerentes ahora pueden tomar decisiones basadas en datos en tiempo real.',
      en: '40% reduction in monthly report generation time. Managers can now make real-time data-driven decisions.',
    },
  },
  {
    id: 'analisis-ventas',
    title: {
      es: 'Análisis Exploratorio de Ventas',
      en: 'Sales Exploratory Analysis',
    },
    shortDescription: {
      es: 'Análisis profundo de datos de ventas utilizando Python y bibliotecas de ciencia de datos.',
      en: 'Deep analysis of sales data using Python and data science libraries.',
    },
    fullDescription: {
      es: 'Proyecto completo de análisis exploratorio de datos (EDA) sobre un dataset de ventas. Se identificaron patrones estacionales, productos más rentables y segmentos de clientes clave.',
      en: 'Complete exploratory data analysis (EDA) project on a sales dataset. Seasonal patterns, most profitable products, and key customer segments were identified.',
    },
    image: '/placeholder.svg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    category: 'analysis',
    date: '2024-02',
    githubUrl: 'https://github.com/Mauvyc/sales-eda',
    dataUrl: 'https://kaggle.com/datasets/sales-data',
    methodology: {
      es: [
        'Importación y exploración inicial del dataset',
        'Limpieza de datos: valores nulos, duplicados, tipos de datos',
        'Análisis univariado y bivariado',
        'Visualización de patrones y tendencias',
        'Generación de insights y recomendaciones',
      ],
      en: [
        'Dataset import and initial exploration',
        'Data cleaning: null values, duplicates, data types',
        'Univariate and bivariate analysis',
        'Pattern and trend visualization',
        'Insights and recommendations generation',
      ],
    },
    results: {
      es: 'Se identificaron 3 productos que representan el 45% de las ventas totales y se descubrió un patrón estacional que permite optimizar el inventario.',
      en: '3 products representing 45% of total sales were identified, and a seasonal pattern was discovered to optimize inventory.',
    },
  },
  {
    id: 'modelo-churn',
    title: {
      es: 'Modelo Predictivo de Churn',
      en: 'Churn Prediction Model',
    },
    shortDescription: {
      es: 'Modelo de Machine Learning para predecir la probabilidad de abandono de clientes.',
      en: 'Machine Learning model to predict customer churn probability.',
    },
    fullDescription: {
      es: 'Desarrollo de un modelo predictivo utilizando técnicas de Machine Learning para identificar clientes con alta probabilidad de abandono (churn). El modelo permite tomar acciones preventivas para retención.',
      en: 'Development of a predictive model using Machine Learning techniques to identify customers with high churn probability. The model allows taking preventive retention actions.',
    },
    image: '/placeholder.svg',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost', 'Jupyter'],
    category: 'ml',
    date: '2024-03',
    githubUrl: 'https://github.com/Mauvyc/churn-prediction',
    dataUrl: 'https://kaggle.com/datasets/churn-data',
    methodology: {
      es: [
        'Análisis exploratorio y feature engineering',
        'Preprocesamiento: encoding, scaling, manejo de desbalanceo',
        'Entrenamiento de múltiples modelos (Logistic Regression, Random Forest, XGBoost)',
        'Evaluación con métricas: AUC-ROC, Precision, Recall, F1-Score',
        'Optimización de hiperparámetros con GridSearchCV',
      ],
      en: [
        'Exploratory analysis and feature engineering',
        'Preprocessing: encoding, scaling, imbalance handling',
        'Training multiple models (Logistic Regression, Random Forest, XGBoost)',
        'Evaluation with metrics: AUC-ROC, Precision, Recall, F1-Score',
        'Hyperparameter optimization with GridSearchCV',
      ],
    },
    results: {
      es: 'El modelo XGBoost alcanzó un AUC-ROC de 0.87, permitiendo identificar correctamente el 82% de los clientes en riesgo de abandono.',
      en: 'The XGBoost model achieved an AUC-ROC of 0.87, correctly identifying 82% of customers at risk of churn.',
    },
  },
  {
    id: 'database-optimization',
    title: {
      es: 'Optimización de Base de Datos',
      en: 'Database Optimization',
    },
    shortDescription: {
      es: 'Diseño y optimización de base de datos SQL para mejorar el rendimiento de consultas.',
      en: 'SQL database design and optimization to improve query performance.',
    },
    fullDescription: {
      es: 'Proyecto de diseño y optimización de una base de datos relacional. Se implementaron índices, vistas materializadas y procedimientos almacenados para mejorar significativamente el rendimiento.',
      en: 'Relational database design and optimization project. Indexes, materialized views, and stored procedures were implemented to significantly improve performance.',
    },
    image: '/placeholder.svg',
    technologies: ['SQL', 'PostgreSQL', 'Performance Tuning', 'Database Design'],
    category: 'sql',
    date: '2024-04',
    githubUrl: 'https://github.com/Mauvyc/db-optimization',
    methodology: {
      es: [
        'Análisis del esquema existente y consultas lentas',
        'Normalización y rediseño del modelo de datos',
        'Implementación de índices estratégicos',
        'Creación de vistas y procedimientos almacenados',
        'Benchmarking y documentación de mejoras',
      ],
      en: [
        'Existing schema and slow queries analysis',
        'Normalization and data model redesign',
        'Strategic indexes implementation',
        'Views and stored procedures creation',
        'Benchmarking and improvements documentation',
      ],
    },
    results: {
      es: 'Reducción del 65% en tiempo de ejecución de consultas críticas. El tiempo de respuesta promedio pasó de 4.2s a 1.5s.',
      en: '65% reduction in critical query execution time. Average response time went from 4.2s to 1.5s.',
    },
  },
  {
    id: 'etl-pipeline',
    title: {
      es: 'Pipeline ETL Automatizado',
      en: 'Automated ETL Pipeline',
    },
    shortDescription: {
      es: 'Pipeline de extracción, transformación y carga de datos automatizado con Python.',
      en: 'Automated data extraction, transformation, and loading pipeline with Python.',
    },
    fullDescription: {
      es: 'Desarrollo de un pipeline ETL automatizado que extrae datos de múltiples fuentes, los transforma según reglas de negocio y los carga en un data warehouse para análisis.',
      en: 'Development of an automated ETL pipeline that extracts data from multiple sources, transforms it according to business rules, and loads it into a data warehouse for analysis.',
    },
    image: '/placeholder.svg',
    technologies: ['Python', 'Pandas', 'SQL', 'Airflow', 'Docker'],
    category: 'analysis',
    date: '2024-05',
    githubUrl: 'https://github.com/Mauvyc/etl-pipeline',
    methodology: {
      es: [
        'Diseño de la arquitectura del pipeline',
        'Desarrollo de scripts de extracción para cada fuente',
        'Implementación de transformaciones con Pandas',
        'Configuración de Airflow para orquestación',
        'Dockerización y despliegue en producción',
      ],
      en: [
        'Pipeline architecture design',
        'Extraction scripts development for each source',
        'Transformations implementation with Pandas',
        'Airflow configuration for orchestration',
        'Dockerization and production deployment',
      ],
    },
    results: {
      es: 'Automatización completa del proceso de integración de datos. El tiempo de preparación de datos se redujo de 8 horas a 45 minutos.',
      en: 'Complete automation of the data integration process. Data preparation time reduced from 8 hours to 45 minutes.',
    },
  },
  {
    id: 'sentiment-analysis',
    title: {
      es: 'Análisis de Sentimiento',
      en: 'Sentiment Analysis',
    },
    shortDescription: {
      es: 'Análisis de sentimiento de reseñas de productos usando NLP y Machine Learning.',
      en: 'Product reviews sentiment analysis using NLP and Machine Learning.',
    },
    fullDescription: {
      es: 'Proyecto de procesamiento de lenguaje natural para clasificar automáticamente el sentimiento de reseñas de clientes como positivo, negativo o neutral.',
      en: 'Natural language processing project to automatically classify customer review sentiment as positive, negative, or neutral.',
    },
    image: '/placeholder.svg',
    technologies: ['Python', 'NLTK', 'Scikit-Learn', 'TextBlob', 'Pandas'],
    category: 'ml',
    date: '2024-06',
    githubUrl: 'https://github.com/Mauvyc/sentiment-analysis',
    dataUrl: 'https://kaggle.com/datasets/reviews-data',
    methodology: {
      es: [
        'Preprocesamiento de texto: tokenización, stemming, lematización',
        'Vectorización con TF-IDF y Word Embeddings',
        'Entrenamiento de clasificadores (Naive Bayes, SVM, LSTM)',
        'Evaluación y comparación de modelos',
        'Desarrollo de API para predicción en tiempo real',
      ],
      en: [
        'Text preprocessing: tokenization, stemming, lemmatization',
        'Vectorization with TF-IDF and Word Embeddings',
        'Classifier training (Naive Bayes, SVM, LSTM)',
        'Model evaluation and comparison',
        'API development for real-time prediction',
      ],
    },
    results: {
      es: 'Precisión del 89% en clasificación de sentimiento. Se identificaron patrones en quejas recurrentes de clientes.',
      en: '89% accuracy in sentiment classification. Patterns in recurring customer complaints were identified.',
    },
  },
  {
    id: 'covid-dashboard',
    title: {
      es: 'Dashboard COVID-19',
      en: 'COVID-19 Dashboard',
    },
    shortDescription: {
      es: 'Dashboard interactivo para visualizar la evolución de la pandemia COVID-19 en Perú.',
      en: 'Interactive dashboard to visualize COVID-19 pandemic evolution in Peru.',
    },
    fullDescription: {
      es: 'Desarrollo de un dashboard interactivo que muestra la evolución de casos, fallecidos y vacunación durante la pandemia de COVID-19 en Perú, con datos actualizados diariamente.',
      en: 'Development of an interactive dashboard showing the evolution of cases, deaths, and vaccination during the COVID-19 pandemic in Peru, with daily updated data.',
    },
    image: '/placeholder.svg',
    technologies: ['Python', 'Plotly', 'Dash', 'Pandas', 'API REST'],
    category: 'visualization',
    date: '2023-08',
    githubUrl: 'https://github.com/Mauvyc/covid-dashboard',
    liveUrl: 'https://covid-peru-dashboard.herokuapp.com',
    methodology: {
      es: [
        'Conexión a API de datos COVID-19 del MINSA',
        'Limpieza y procesamiento de datos diarios',
        'Diseño de visualizaciones interactivas con Plotly',
        'Desarrollo de la aplicación web con Dash',
        'Despliegue en Heroku con actualización automática',
      ],
      en: [
        'Connection to MINSA COVID-19 data API',
        'Daily data cleaning and processing',
        'Interactive visualizations design with Plotly',
        'Web application development with Dash',
        'Deployment on Heroku with automatic updates',
      ],
    },
    results: {
      es: 'Más de 5,000 usuarios únicos durante la pandemia. Herramienta utilizada por investigadores y periodistas.',
      en: 'Over 5,000 unique users during the pandemic. Tool used by researchers and journalists.',
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};
