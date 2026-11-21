import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import TimelineItem from '../components/TimelineItem';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <PageTransition>
      <SEO
        title="Experience | Amaan Javaid"
        description="Work history and professional background of Amaan Javaid: operational management, remote administration, and design workflows."
      />

      {/* Header */}
      <section className="container" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <ScrollReveal>
          <p className="label mb-4" style={{ color: 'var(--color-silver)' }}>
            02 / Career
          </p>
          <h1 className="hero-heading mb-6">Experience</h1>
          <p
            className="text-lg md:text-xl"
            style={{ color: 'var(--color-muted)', maxWidth: '680px', lineHeight: '1.6' }}
          >
            Chronological record of operational management, international freelance support, and design internships.
          </p>
        </ScrollReveal>
      </section>

      {/* Timeline Section */}
      <section className="container section" style={{ paddingTop: 0 }}>
        <SectionHeading number="01" title="Timeline" />

        <div className="flex flex-col">
          {experience.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
          <div className="border-t" style={{ borderColor: 'var(--color-border)' }} />
        </div>
      </section>
    </PageTransition>
  );
}
