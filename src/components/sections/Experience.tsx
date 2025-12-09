import { Calendar, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { experiences } from '@/data/experience';

export function Experience() {
  const { t, language } = useLanguage();

  const formatDate = (dateStr: string) => {
    const date = new Date(`${dateStr}-02`);
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 vintage-text-shadow">
          {t('experience.title')}
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-9 h-9 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-primary" />
                </div>

                <div className="cuphead-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl text-foreground">
                        {exp.position[language]}
                      </h3>
                      <p className="font-body text-primary text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm cuphead-border px-3 py-1 bg-muted">
                      <Calendar size={14} />
                      <span>
                        {formatDate(exp.period.start)} - {exp.period.end ? formatDate(exp.period.end) : t('experience.present')}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description[language].map((item, i) => (
                      <li key={i} className="font-body text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-body bg-muted text-foreground cuphead-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
