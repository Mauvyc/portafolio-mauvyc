import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 cuphead-border bg-card px-2 py-1">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 text-sm font-body transition-all duration-200 rounded ${
          language === 'es'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-muted'
        }`}
      >
        ES
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-body transition-all duration-200 rounded ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-muted'
        }`}
      >
        EN
      </button>
    </div>
  );
}
