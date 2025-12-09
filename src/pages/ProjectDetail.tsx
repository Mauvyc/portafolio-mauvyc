import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Database, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectById } from '@/data/projects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <button
            onClick={() => navigate('/#projects')}
            className="flex items-center gap-2 font-body text-muted-foreground hover:text-primary transition-colors mb-8 cuphead-button bg-card px-4 py-2"
          >
            <ArrowLeft size={18} />
            {t('projects.back')}
          </button>

          <article className="cuphead-card p-8 animate-fade-in-up">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <Calendar size={16} />
              <span>{project.date}</span>
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs cuphead-border ml-2">
                {t(`projects.filter.${project.category}`)}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl mb-4 vintage-text-shadow">
              {project.title[language]}
            </h1>

            <img
              src={project.image}
              alt={project.title[language]}
              className="w-full h-64 object-cover cuphead-border mb-6"
            />

            <p className="font-body text-lg text-foreground mb-8">
              {project.fullDescription[language]}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cuphead-button bg-card px-4 py-2 flex items-center gap-2 font-body">
                  <Github size={18} /> {t('projects.viewCode')}
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cuphead-button bg-primary text-primary-foreground px-4 py-2 flex items-center gap-2 font-body">
                  <ExternalLink size={18} /> {t('projects.viewProject')}
                </a>
              )}
              {project.dataUrl && (
                <a href={project.dataUrl} target="_blank" rel="noopener noreferrer" className="cuphead-button bg-card px-4 py-2 flex items-center gap-2 font-body">
                  <Database size={18} /> {t('projects.viewData')}
                </a>
              )}
            </div>

            <div className="vintage-divider mb-8" />

            <section className="mb-8">
              <h2 className="font-display text-2xl mb-4">{t('projects.technologies')}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 cuphead-border bg-muted font-body">{tech}</span>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl mb-4">{t('projects.methodology')}</h2>
              <ol className="space-y-3">
                {project.methodology[language].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 font-body">
                    <span className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full text-sm flex-shrink-0">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-display text-2xl mb-4">{t('projects.results')}</h2>
              <p className="font-body text-foreground bg-muted p-4 cuphead-border">{project.results[language]}</p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
