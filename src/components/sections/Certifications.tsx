import { ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { certifications } from '@/data/certifications';

export function Certifications() {
  const { t, language } = useLanguage();

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    // Using day 2 to avoid timezone-related off-by-one errors when parsing YYYY-MM
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, 2));
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      timeZone: 'UTC',
    });
  };

  return (
    <section id="certifications" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">🏆</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-wobble-slow">🎓</div>

      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 vintage-text-shadow">
          {t('certifications.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cuphead-card p-6 animate-fade-in-up group"
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:animate-wobble">{cert.logo}</div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-foreground mb-1">
                    {cert.name[language]}
                  </h3>
                  <p className="font-body text-primary text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <p className="font-body text-muted-foreground text-xs mb-3">
                    {formatDate(cert.date)}
                  </p>
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:text-primary transition-colors font-body"
                    >
                      <Award size={14} />
                      {t('certifications.verify')}
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
