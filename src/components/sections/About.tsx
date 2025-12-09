import { MapPin, GraduationCap, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 vintage-text-shadow">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo with vintage frame */}
          <div className="relative mx-auto">
            <div className="cuphead-card p-4 bg-card animate-wobble-slow">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src="/mauricio.png"
                  alt="Mauricio Aldana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-primary" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-primary" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-primary" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-primary" />
          </div>

          {/* About content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="font-body text-lg leading-relaxed">
              {t('about.description')}
            </p>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span className="font-body">{t('about.location')}</span>
            </div>

            <div className="vintage-divider my-6" />

            <div className="flex items-start gap-3">
              <Target size={20} className="text-accent mt-1 flex-shrink-0" />
              <p className="font-body text-muted-foreground">
                {t('about.passion')}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap size={20} className="text-accent mt-1 flex-shrink-0" />
              <p className="font-body text-muted-foreground">
                {t('about.university')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
