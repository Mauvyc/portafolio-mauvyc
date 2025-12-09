import { useLanguage } from '@/contexts/LanguageContext';
import { skillCategories } from '@/data/skills';

export function Skills() {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 animate-wobble-slow">⚙️</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-10 animate-float">💡</div>

      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 vintage-text-shadow">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto stagger-children">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="cuphead-card p-6 animate-fade-in-up opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              <h3 className="font-display text-xl mb-6 text-primary text-center">
                {category.name[language]}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl group-hover:animate-wobble">{skill.icon}</span>
                        <span className="font-body text-sm">{skill.name}</span>
                      </div>
                    </div>
                    
                    {/* Skill level bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
