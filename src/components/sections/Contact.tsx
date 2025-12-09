import { useState } from 'react';
import { Send, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t('contact.success'),
      description: 'Thank you for reaching out!',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">✉️</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-10 animate-wobble-slow">💬</div>

      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 vintage-text-shadow">
          {t('contact.title')}
        </h2>
        <p className="font-body text-center text-muted-foreground mb-12">
          {t('contact.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="cuphead-card p-6">
              <h3 className="font-display text-xl mb-6 text-primary">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:aldanamauricio48@gmail.com"
                  className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  aldanamauricio48@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/mauricio-aldana-chipana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  linkedin.com/in/mauricio-aldana-chipana
                </a>

                <a
                  href="https://github.com/Mauvyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Github size={20} />
                  </div>
                  github.com/Mauvyc
                </a>

                <div className="flex items-center gap-3 font-body text-muted-foreground">
                  <div className="p-2 bg-muted rounded-lg">
                    <MapPin size={20} />
                  </div>
                  Lima, Perú
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <label htmlFor="name" className="block font-body text-sm mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 cuphead-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-body text-sm mb-2">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 cuphead-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 cuphead-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cuphead-button bg-primary text-primary-foreground py-3 font-body text-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <>
                  <Send size={18} />
                  {t('contact.send')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
