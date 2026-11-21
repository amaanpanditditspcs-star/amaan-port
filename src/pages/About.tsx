import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { site } from '../data/site';
import { aboutData } from '../data/about';
import { education } from '../data/education';

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About | Amaan Javaid"
        description="Background, education and interests of Amaan Javaid, an Information Technology student and designer from Srinagar."
      />

      {/* Hero header */}
      <section className="container" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <ScrollReveal>
          <p className="label mb-4" style={{ color: 'var(--color-silver)' }}>
            01 / Profile
          </p>
          <h1 className="hero-heading mb-6">About</h1>
          <p
            className="text-lg md:text-xl"
            style={{ color: 'var(--color-muted)', maxWidth: '680px', lineHeight: '1.6' }}
          >
            {aboutData.subtitle}
          </p>
        </ScrollReveal>
      </section>

      {/* Main intro section with photo */}
      <section className="container section" style={{ paddingTop: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7 flex flex-col justify-center">
            <ScrollReveal>
              <h2 className="section-heading mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                Introduction
              </h2>
              <p
                className="text-base md:text-lg mb-8"
                style={{
                  color: 'var(--color-text)',
                  lineHeight: '1.75',
                }}
              >
                {aboutData.openingText}
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal delay={0.1}>
              <ImagePlaceholder
                alt="About composition for Amaan Javaid"
                src={site.images.profileAbout}
                aspectRatio="4 / 5"
                loading="eager"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Narrative blocks: Academic Journey, Creative Background, Work, Interests */}
      <section className="container section border-t" style={{ borderColor: 'var(--color-border)' }}>
        <SectionHeading number="02" title="Background" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {/* Academic Journey */}
          <ScrollReveal>
            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
              <span className="label block mb-3" style={{ color: 'var(--color-silver)' }}>
                02.1
              </span>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                {aboutData.sections.academicJourney.label}
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.7' }}>
                {aboutData.sections.academicJourney.content}
              </p>
            </div>
          </ScrollReveal>

          {/* Creative Background */}
          <ScrollReveal delay={0.05}>
            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
              <span className="label block mb-3" style={{ color: 'var(--color-silver)' }}>
                02.2
              </span>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                {aboutData.sections.creativeBackground.label}
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.7' }}>
                {aboutData.sections.creativeBackground.content}
              </p>
            </div>
          </ScrollReveal>

          {/* Work Alongside Studies */}
          <ScrollReveal delay={0.1}>
            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
              <span className="label block mb-3" style={{ color: 'var(--color-silver)' }}>
                02.3
              </span>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                {aboutData.sections.workAlongsideStudies.label}
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.7' }}>
                {aboutData.sections.workAlongsideStudies.content}
              </p>
            </div>
          </ScrollReveal>

          {/* Interests */}
          <ScrollReveal delay={0.15}>
            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
              <span className="label block mb-3" style={{ color: 'var(--color-silver)' }}>
                02.4
              </span>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                {aboutData.sections.interests.label}
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.7' }}>
                {aboutData.sections.interests.content}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="container section border-t" style={{ borderColor: 'var(--color-border)' }}>
        <SectionHeading number="03" title="Education" />

        <ScrollReveal>
          <div className="mb-10">
            <h2 className="section-heading mb-3">Academic Qualifications</h2>
            <p style={{ color: 'var(--color-muted)', maxWidth: '580px' }}>
              Chronological history of degrees, diplomas and technical training courses.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col">
          {education.map((item) => (
            <ScrollReveal key={item.id}>
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {/* Period & Location */}
                <div className="md:col-span-4">
                  <p className="label mb-1" style={{ color: 'var(--color-silver)' }}>
                    {item.period}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                    {item.location}
                  </p>
                  {item.status && (
                    <span
                      className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-sm"
                      style={{
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                {/* Degree, Institution & Notes */}
                <div className="md:col-span-8">
                  <h3 className="text-lg md:text-xl font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-muted)' }}>
                    {item.institution}
                    {item.affiliation && ` (${item.affiliation})`}
                  </p>
                  {item.description && (
                    <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t" style={{ borderColor: 'var(--color-border)' }} />
        </div>
      </section>

      {/* Languages */}
      <section className="container section border-t" style={{ borderColor: 'var(--color-border)' }}>
        <SectionHeading number="04" title="Languages" />

        <ScrollReveal>
          <div className="mb-8">
            <h2 className="section-heading mb-3">Languages</h2>
            <p style={{ color: 'var(--color-muted)' }}>
              Spoken and written language competencies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {aboutData.languages.map((lang) => (
              <div
                key={lang.name}
                className="p-5 rounded-sm border"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-secondary)',
                }}
              >
                <p className="text-base font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                  {lang.name}
                </p>
                <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-silver)' }}>
                  {lang.proficiency}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
