import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ProjectRow from '../components/ProjectRow';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <PageTransition>
      <SEO
        title="Projects | Amaan Javaid"
        description="Internal web tools and software applications designed and built by Amaan Javaid for travel automation, invoicing, and itineraries."
      />

      {/* Header */}
      <section className="container" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <ScrollReveal>
          <p className="label mb-4" style={{ color: 'var(--color-silver)' }}>
            03 / Works
          </p>
          <h1 className="hero-heading mb-6">Projects</h1>
          <p
            className="text-lg md:text-xl"
            style={{ color: 'var(--color-muted)', maxWidth: '680px', lineHeight: '1.6' }}
          >
            Internal tools built for Trust Tour and Travels to automate daily travel operations, itinerary generation, and GST billing.
          </p>
        </ScrollReveal>
      </section>

      {/* Projects List */}
      <section className="container section" style={{ paddingTop: 0 }}>
        <SectionHeading number="01" title="Selected Tools" />

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
          <div className="border-t" style={{ borderColor: 'var(--color-border)' }} />
        </div>

        {/* Note that more projects will be added over time */}
        <ScrollReveal delay={0.1}>
          <div
            className="mt-16 p-8 rounded-sm border text-sm"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-secondary)',
              color: 'var(--color-muted)',
            }}
          >
            <p className="label mb-2" style={{ color: 'var(--color-silver)' }}>
              Note
            </p>
            <p>
              More projects will be added over time as development and documentation progress.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
