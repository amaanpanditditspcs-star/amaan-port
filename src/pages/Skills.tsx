import { Code2, Palette, Briefcase, Sparkles, type LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import SkillTag from '../components/SkillTag';
import { skillGroups } from '../data/skills';

const groupIcons: Record<string, LucideIcon> = {
  'programming-web': Code2,
  'creative': Palette,
  'business-office': Briefcase,
  'interests-learning': Sparkles,
};

export default function Skills() {
  const provenGroups = skillGroups.filter((g) => !g.isLearning);
  const learningGroup = skillGroups.find((g) => g.isLearning);

  return (
    <PageTransition>
      <SEO
        title="Skills | Amaan Javaid"
        description="Technical, creative and business skills of Amaan Javaid, spanning programming, design workflows, and travel business operations."
      />

      {/* Header */}
      <section className="container" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <ScrollReveal>
          <p className="label mb-4" style={{ color: 'var(--color-silver)' }}>
            04 / Capabilities
          </p>
          <h1 className="hero-heading mb-6">Skills</h1>
          <p
            className="text-lg md:text-xl"
            style={{ color: 'var(--color-muted)', maxWidth: '680px', lineHeight: '1.6' }}
          >
            Categorised competencies across software development, creative design software, and commercial operations.
          </p>
        </ScrollReveal>
      </section>

      {/* Proven Skills Section */}
      <section className="container section" style={{ paddingTop: 0 }}>
        <SectionHeading number="01" title="Core Disciplines" />

        <div className="flex flex-col gap-14">
          {provenGroups.map((group, index) => {
            const Icon = groupIcons[group.id] || Code2;
            const num = String(index + 1).padStart(2, '0');

            return (
              <ScrollReveal key={group.id}>
                <div
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pt-8 border-t"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="md:col-span-4">
                    <span className="label block mb-2" style={{ color: 'var(--color-silver)' }}>
                      01.{num}
                    </span>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} style={{ color: 'var(--color-accent)' }} />
                      <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
                        {group.label}
                      </h2>
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => (
                        <SkillTag key={skill} label={skill} />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
          <div className="border-t" style={{ borderColor: 'var(--color-border)' }} />
        </div>
      </section>

      {/* Visually Separate Section for Interests and Currently Learning */}
      {learningGroup && (
        <section className="container section border-t" style={{ borderColor: 'var(--color-border)' }}>
          <SectionHeading number="02" title="Exploration" />

          <ScrollReveal>
            <div
              className="p-8 md:p-10 rounded-sm border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg-secondary)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} style={{ color: 'var(--color-accent)' }} />
                <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
                  {learningGroup.label}
                </h2>
              </div>

              <p className="text-sm mb-6" style={{ color: 'var(--color-muted)', maxWidth: '580px' }}>
                The following competencies represent active study and technical curiosity. Kept separate from proven skills.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {learningGroup.skills.map((skill) => (
                  <SkillTag key={skill} label={skill} isLearning />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}
    </PageTransition>
  );
}
