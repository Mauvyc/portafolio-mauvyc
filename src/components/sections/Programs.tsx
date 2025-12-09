import { Calendar, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { programs } from '@/data/programs';

export function Programs() {
  const { t, language } = useLanguage();

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    // Using day 2 to avoid timezone-related off-by-one errors when parsing YYYY-MM
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, 2));
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'short',
      timeZone: 'UTC',
    });
  };

  const getStatusBadge = (status: 'completed' | 'in-progress') => {
    if (status === 'in-progress') {
      return (
        <span className="px-3 py-1 text-xs font-body bg-accent/20 text-accent cuphead-border">
          {language === 'es' ? 'En Curso' : 'In Progress'}
        </span>
      );
    }
    return (
      <span className="px-3 py-1 text-xs font-body bg-primary/20 text-primary cuphead-border">
        {language === 'es' ? 'Completado' : 'Completed'}
      </span>
    );
  };

  return (
    <section id="programs" className="py-20 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 vintage-text-shadow">
          {t('programs.title')}
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="cuphead-card p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 cuphead-border">
                    <Award size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-1">
                      {program.name}
                    </h3>
                    <p className="font-body text-lg text-primary">
                      {program.organization}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {getStatusBadge(program.status)}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>
                      {formatDate(program.period.start)} - {program.period.end ? formatDate(program.period.end) : t('experience.present')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {program.description[language]}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-display text-lg text-foreground mb-3">
                  {language === 'es' ? 'Destacados del Programa' : 'Program Highlights'}
                </h4>
                <ul className="space-y-2">
                  {program.highlights[language].map((highlight, i) => (
                    <li key={i} className="font-body text-muted-foreground flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-display text-sm text-muted-foreground mb-3">
                  {language === 'es' ? 'Habilidades Desarrolladas' : 'Skills Developed'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-body bg-muted text-foreground cuphead-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-24 h-24 border-4 border-accent/20 rounded-full animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary/5 rotate-45 animate-wobble-slow pointer-events-none" />
      </div>
    </section>
  );
}
