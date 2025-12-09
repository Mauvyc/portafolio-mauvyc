import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects, type Project } from '@/data/projects';

const filters = [
  { key: 'all', label: 'all' },
  { key: 'analysis', label: 'analysis' },
  { key: 'visualization', label: 'visualization' },
  { key: 'ml', label: 'ml' },
  { key: 'sql', label: 'sql' },
];

interface ProjectCardProps {
  project: Project;
  language: 'es' | 'en';
  onClick: () => void;
}

function ProjectCard({ project, language, onClick }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <article
      onClick={onClick}
      className="cuphead-card overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src={project.image}
          alt={project.title[language]}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        
        {/* Category badge */}
        <span className="absolute top-3 right-3 px-3 py-1 text-xs font-body bg-primary text-primary-foreground cuphead-border">
          {t(`projects.filter.${project.category}`)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <Calendar size={14} />
          <span className="font-body">{project.date}</span>
        </div>

        <h3 className="font-display text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title[language]}
        </h3>

        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.shortDescription[language]}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-body bg-muted text-foreground rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-body text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 text-8xl opacity-5 rotate-12">📊</div>
      <div className="absolute bottom-20 right-5 text-8xl opacity-5 -rotate-12">📈</div>

      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-6 vintage-text-shadow">
          {t('projects.title')}
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 font-body text-sm cuphead-button transition-all ${
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              {t(`projects.filter.${filter.label}`)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <ProjectCard
                project={project}
                language={language}
                onClick={() => navigate(`/project/${project.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
