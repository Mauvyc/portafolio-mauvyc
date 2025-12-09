import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t-4 border-foreground bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-2xl text-primary">MA</div>
          
          <div className="flex items-center gap-2 font-body text-muted-foreground">
            <span>© {currentYear} Mauricio Aldana.</span>
            <span>{t('footer.rights')}</span>
          </div>

          <div className="flex items-center gap-1 font-body text-sm text-muted-foreground">
            Made with <Heart size={14} className="text-destructive fill-destructive animate-pulse" /> 
            <span className="ml-1">& ☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
