import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Download, Mail } from 'lucide-react';
import { site, getEmail } from '../data/site';
import { projects } from '../data/projects';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ProjectRow from '../components/ProjectRow';
import { useEffect, useState } from 'react';

const pageIndex = [
  { num: '01', label: 'About', desc: 'Background, education and interests.', to: '/about' },
  { num: '02', label: 'Experience', desc: 'Work history and professional background.', to: '/experience' },
  { num: '03', label: 'Projects', desc: 'Web tools I have built.', to: '/projects' },
  { num: '04', label: 'Skills', desc: 'Technical, creative and business skills.', to: '/skills' },
  { num: '05', label: 'Contact', desc: 'Get in touch.', to: '/contact' },
];

export default function Home() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(getEmail());
  }, []);

  return (
    <>
      <SEO
        title="Amaan Javaid | IT Student and Designer"
        description="Portfolio of Amaan Javaid, an Information Technology student from Srinagar who builds practical web tools and has a background in VFX and graphic design."
      />

      {/* ======= HERO ======= */}
      <section className="container" style={{ paddingTop: '140px', paddingBottom: '40px' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Text */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
            <ScrollReveal>
              <p className="label mb-5" style={{ color: 'var(--color-muted)' }}>
                Information Technology Student, Srinagar
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1 className="hero-heading mb-8">
                IT student.<br />
                Designer.<br />
                Builder of practical<br className="hidden lg:block" /> business tools.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                className="mb-8"
                style={{
                  color: 'var(--color-muted)',
                  maxWidth: '540px',
                  fontSize: '17px',
                  lineHeight: '1.7',
                }}
              >
                I am a B.Sc. Information Technology student in Srinagar. I help run a family travel
                business, where I build small web tools to automate invoicing and itinerary work. I
                also have a background in VFX and graphic design.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                {/* Primary button */}
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  View My Projects <ArrowRight size={14} />
                </Link>

                {/* Secondary button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm border transition-all duration-200"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-muted)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                >
                  Get in Touch
                </Link>

                {/* Resume link (conditional) */}
                {site.resume.enabled && (
                  <a
                    href={site.resume.path}
                    download={site.resume.filename}
                    className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-muted)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-text)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-muted)';
                    }}
                  >
                    <Download size={13} /> Download Resume
                  </a>
                )}
              </div>
            </ScrollReveal>

            {/* Info panel */}
            <ScrollReveal delay={0.2}>
              <div
                className="flex flex-wrap gap-x-8 gap-y-2 py-5 px-6 rounded-sm text-sm"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-muted)',
                }}
              >
                <span>B.Sc. Information Technology</span>
                <span style={{ color: 'var(--color-border)' }}>|</span>
                <span>Government S.P. College, Srinagar</span>
                <span style={{ color: 'var(--color-border)' }}>|</span>
                <span>{site.location}</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div className="md:col-span-5 lg:col-span-4">
            <ScrollReveal delay={0.1}>
              <ImagePlaceholder
                alt="Profile composition of Amaan Javaid"
                src={site.images.profileHome}
                aspectRatio="4 / 5"
                loading="eager"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-16 md:mt-24">
            <div
              className="flex flex-col items-center gap-2"
              style={{ color: 'var(--color-silver)' }}
            >
              <span className="label" style={{ fontSize: '10px' }}>Scroll</span>
              <ArrowDown size={14} className="animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ======= PAGE INDEX ======= */}
      <section className="container section">
        <SectionHeading number="00" title="Index" />

        <div className="flex flex-col">
          {pageIndex.map((page, i) => (
            <ScrollReveal key={page.to} delay={i * 0.05}>
              <Link
                to={page.to}
                className="group grid grid-cols-12 gap-4 py-6 border-t transition-colors duration-200"
                style={{ borderColor: 'var(--color-border)' }}
                onMouseEnter={(e) => {
                  const label = e.currentTarget.querySelector('[data-desc]') as HTMLElement;
                  if (label) label.style.color = 'var(--color-text)';
                }}
                onMouseLeave={(e) => {
                  const label = e.currentTarget.querySelector('[data-desc]') as HTMLElement;
                  if (label) label.style.color = 'var(--color-muted)';
                }}
              >
                <span
                  className="col-span-2 md:col-span-1 label"
                  style={{ color: 'var(--color-silver)' }}
                >
                  {page.num}
                </span>
                <span className="col-span-4 md:col-span-3 text-base font-medium">
                  {page.label}
                </span>
                <span
                  data-desc
                  className="col-span-5 md:col-span-7 text-sm hidden md:block transition-colors duration-200"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {page.desc}
                </span>
                <span className="col-span-1 flex justify-end items-center">
                  <ArrowRight
                    size={14}
                    style={{ color: 'var(--color-silver)' }}
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
          {/* Bottom border */}
          <div
            className="border-t"
            style={{ borderColor: 'var(--color-border)' }}
          />
        </div>
      </section>

      {/* ======= PROJECTS PREVIEW ======= */}
      <section
        className="container section"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div
          className="container"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <SectionHeading number="03" title="Projects" />

          <ScrollReveal>
            <h2 className="section-heading mb-4">Selected Work</h2>
            <p className="mb-2" style={{ color: 'var(--color-muted)', maxWidth: '540px' }}>
              Internal tools built for Trust Tour and Travels.
            </p>
          </ScrollReveal>

          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}

          <ScrollReveal>
            <div className="pt-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--color-accent)' }}
              >
                View all projects <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======= CONTACT STRIP ======= */}
      <section className="container section">
        <SectionHeading number="05" title="Contact" />

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="section-heading mb-4">Let's connect.</h2>
              <p style={{ color: 'var(--color-muted)', maxWidth: '480px' }}>
                For professional enquiries, collaboration or general communication, feel free to get in touch.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm transition-all duration-200"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#ffffff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                <Mail size={14} /> Get in Touch
              </Link>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-text)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-muted)';
                  }}
                >
                  {email}
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
