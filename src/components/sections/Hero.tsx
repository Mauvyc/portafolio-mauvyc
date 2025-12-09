import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-vintage-sepia rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border-4 border-primary opacity-20 animate-wobble-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <span className="font-body text-xl text-muted-foreground mb-2 block">
            {t('hero.greeting')}
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 vintage-text-shadow">
            {t('hero.name')}
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-primary mb-6">
            {t('hero.title')}
          </p>
          
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="cuphead-button bg-primary text-primary-foreground px-8 py-3 font-body text-lg hover:bg-primary/90"
            >
              {t('hero.cta.projects')}
            </a>
            <a
              href="#contact"
              className="cuphead-button bg-card text-foreground px-8 py-3 font-body text-lg hover:bg-muted"
            >
              {t('hero.cta.contact')}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/mauricio-aldana-chipana/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 cuphead-border bg-card hover:bg-muted transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Mauvyc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 cuphead-border bg-card hover:bg-muted transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:aldanamauricio48@gmail.com"
              className="p-3 cuphead-border bg-card hover:bg-muted transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
